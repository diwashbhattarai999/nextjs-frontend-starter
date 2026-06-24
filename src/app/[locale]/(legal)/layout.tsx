export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto flex min-h-svh w-full max-w-3xl flex-col px-6 py-12">
            {children}
        </div>
    );
}
