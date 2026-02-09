export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo & Location */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined filled">
                  sports_cricket
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hidden md:block">
                CricBox
              </span>
            </div>

            {/* Location */}
            <button className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group">
              <span className="material-symbols-outlined text-primary text-[20px]">
                location_on
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-gray-200 truncate max-w-[150px]">
                Indiranagar, BLR
              </span>
              <span className="material-symbols-outlined text-slate-400 text-[18px] group-hover:text-slate-600">
                keyboard_arrow_down
              </span>
            </button>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
                  search
                </span>
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Search for turfs, arenas, or location..."
                type="text"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 shrink-0">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-gray-300">
              <a className="hover:text-primary transition-colors" href="#">
                Bookings
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Offers
              </a>
            </nav>

            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

            <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-700 dark:text-white transition-colors relative">
              <span className="material-symbols-outlined">
                notifications
              </span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-surface-dark"></span>
            </button>

            <button className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                R
              </div>
              <span className="hidden md:block text-sm font-semibold text-slate-700 dark:text-white">
                Rahul
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
