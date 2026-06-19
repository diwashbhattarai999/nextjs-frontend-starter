import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { STORAGE_KEYS } from "@/configs/storage";
import { removeCookie } from "@/lib/cookies";

interface AuthState {
    accessToken: string | null;
    setAccessToken: (accessToken: string) => void;
    clearAccessToken: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            accessToken: null,
            setAccessToken: (accessToken) => set({ accessToken }),
            clearAccessToken: () => {
                removeCookie(STORAGE_KEYS.ACCESS_TOKEN);
                set({ accessToken: null });
            },
        }),
        {
            name: STORAGE_KEYS.ACCESS_TOKEN,
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ accessToken: state.accessToken }),
        }
    )
);

/** Read the access token outside React (e.g. Axios interceptors). */
export function getAccessToken(): string | undefined {
    return useAuthStore.getState().accessToken ?? undefined;
}
