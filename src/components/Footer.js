export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined filled text-[16px]">
              sports_cricket
            </span>
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            CricBox
          </span>
        </div>

        <p className="text-sm text-slate-500 dark:text-gray-400">
          © 2024 CricBox India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
