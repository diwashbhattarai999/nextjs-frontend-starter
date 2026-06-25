import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { STORAGE_KEYS } from "@/configs/storage";

interface VerificationCooldownState {
    entries: Record<
        string,
        {
            expiresAt: number;
            token: string;
        }
    >;
    setCooldown: (email: string, token: string, seconds: number) => void;
    clearCooldown: (email: string) => void;
    getRemainingCooldown: (email: string, token: string) => number;
}

export const useVerificationCooldownStore = create<VerificationCooldownState>()(
    persist(
        (set, get) => ({
            entries: {},
            setCooldown: (email, token, seconds) => {
                const key = email || "default";
                const expiry = Date.now() + seconds * 1000;
                set((state) => ({
                    entries: {
                        ...state.entries,
                        [key]: {
                            expiresAt: expiry,
                            token,
                        },
                    },
                }));
            },
            clearCooldown: (email) => {
                const key = email || "default";
                set((state) => {
                    if (!(key in state.entries)) {
                        return state;
                    }

                    const nextEntries = { ...state.entries };
                    delete nextEntries[key];

                    return { entries: nextEntries };
                });
            },
            getRemainingCooldown: (email, token) => {
                const key = email || "default";
                const entry = get().entries[key];
                if (!entry || entry.token !== token) return 0;
                const remaining = Math.ceil((entry.expiresAt - Date.now()) / 1000);
                return Math.max(0, remaining);
            },
        }),
        {
            name: STORAGE_KEYS.VERIFICATION_COOLDOWN,
            storage: createJSONStorage(() => localStorage),
        }
    )
);
