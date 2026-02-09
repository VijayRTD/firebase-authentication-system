import React from "react";

export default function MainContent() {
   // Trending Turfs
  const trendingTurfs = [
    {
      name: "Super Over Arena",
      rating: "4.9",
      location: "Indiranagar • 0.8 km",
      nextSlot: "Today 6:00 PM",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2S8SCRZCX5lxaHsqkIredmRVbSRFRgnn1r-FPi2fpjVteRkrbLRtRa-TizQkM7XzR3vbpDxIK1y6AfzBGAFbcpYK0u0H4flSTZjyeE24qj-JcBuMin9ki-xBo4A90w-xU37L_OlDmnnFptRHR1Xtqy4jwq34fX4TCZBwFfX_YJhnXJfkIE_E8_wjHxw2PL-pKuVR0S9-hn9ofGeLMzRXVOExiRPhqGSE00N3tpcUA_Iem7DvO3Mi_clYQAx9MUK4ntXF5oedtlN4",
    },
    {
      name: "The Pavilion Turf",
      rating: "4.7",
      location: "Domlur • 1.5 km",
      nextSlot: "Today 7:30 PM",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCdjFsvtDv4uPDCeqNX5E-9P3VBhdKAYOIPt_nkF9FQJqPgGYh6PlnaTLib66HihBKGZH51zJlDQH7MCTrn1tyByoe9SJLUshDIYskltEnIFVO_1kx6oGM1o3tbfeLgO_y8brLgwW8_gX6QYYXlGpUsjA-9oJaBWmBOxubdEZTnjhTckv9pr2YQXs-HddYHxBi02gTMGJ_e48pt1p0BVaJ15lFWBwzzCqNsWy6xi1gCeo8ev5-r5rEW9ApCUWe-2qD64caduXtf_-4",
    },
    {
      name: "Night Strikers",
      rating: "4.5",
      location: "Koramangala • 3.2 km",
      nextSlot: "Today 9:00 PM",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD9D1Mj7tTzdWDfQ4FNoS8yFx644jK77yMXMUsOx1wpU5YEpxwh_K0oaOB075t5T4GFs3StAhNFawl4OILVh6NasMFMw820p9UNsddj60TLf4jKh_PJwjONBF15oxp8G3M8UO8-NhC8NQb0Nbd85hZqC9s92iJ0rSwk4abaV1eNOmK_RFibIv8aTvI3_3DowNdGDIkGJKpQDVY16KmWgEBSOIg2JoznSPc7qHt2KIZU81rK6DIXkDG92pNbQrKL5PeplcB990YeK3U",
    },
  ];

  // All Turfs Near You
  const allTurfs = [
    {
      name: "Cover Drive Club",
      rating: "4.5",
      location: "HAL 2nd Stage • 1.2 km",
      price: 800,
      nextSlot: "Today 6:00 PM",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCFn9R76vzJX9WjZ26-dOFgQ8_V4ZX5QVsXuxsTrF95CKisqgT8ls9LAe40rRqfza17Df7_PDsnC71sjUQb4DBr4uOCxSwZHC8BfebawArCwkjYxXDZesGfDmooUQqnYA83yIX6e61DyMwgr3aZOm0iqJZUyPmNsz9rAidBvSIZvLGnT8NvnLpE4PxZk9_BrvKD0GKq2LYlCRMJJMqFaqh7UWa0YbHRnx_H_OPDm52UCypGYhrL7FYXysfXf24OI-ZwgcGOQq7bMqo",
      nextType: "bolt",
      nextColor: "bg-primary text-white",
    },
    {
      name: "Smash Arena",
      rating: "4.2",
      location: "Cambridge Layout • 2.5 km",
      price: 1200,
      nextSlot: "Tomorrow 7:00 AM",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ6iqheWkcHJ9a3FN3T-M84PRm5wzfCRIh6gAPAziidVRp0uW1CqAmBUSPF31gBceI65EFLGKYOITOK70oZQX3qi8273u0fXgGNA-i5Ds4AdAHVIDc3txlGZHz6espETlKxVoqUR3ITTSlnYQIElzQKD20NW1J8YDmH5J78YtA3K0Eo_175KQV-G5_iRVvqvsmw9MKuQgxGqU9jsL9wVRHxBMMpgLjE54grW4apOyMNGi9TBtXghAwTjZWHMwGlUrp-9OEHPJ8OUg",
      nextType: "schedule",
      nextColor: "bg-white/90 text-slate-900",
    },
    {
      name: "Gully Cricketers",
      rating: "3.8",
      location: "Ulsoor • 3.1 km",
      price: 600,
      nextSlot: "Today 8:00 PM",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDzGWGZf5Mlojk0sgDeDEA8p2LQCXWgXbbRNZiB3xcsl5hxZm4-kzuyN_xurSF2Ih3yjY5fYilyOCVVUgPc5fV9JWt2yFUNFLwvlpdx3Njy6FoPfZ97ucNSkXJFMC_yhmlQwir-6BLPHjRmTXA-AZo3MLwlY6Dpv1tylp4KiU0NIEgue4AuAb85p31jvhKZmnot--vaV29cq3kOn2FOQ3YT0EiUWJTJKcY5Z0NWWFlQWbd-VSDMW_DQ2vXOGSaLY-Egp0mLNWMA7xY",
      nextType: "bolt",
      nextColor: "bg-primary text-white",
    },
    {
      name: "Gamepoint Indiranagar",
      rating: "4.8",
      location: "Indiranagar • 0.5 km",
      price: 1000,
      nextSlot: "Today 10:00 PM",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-XEdEmlqpK-jUoACI3qsF-UBE_StnQa_hNTOTjOYuY6I9a6NN7kZJG6mGogFTVzrvA-tasQtKwsnYwJTierk-h0NygycUJjNbYS1MsiQzNKzicKIE5XmamZktreIs6VAkxWsVL-nAyilgp3QvMaT8cgMABj2QhLoARjLhjGRyFtgYC4oJjSB-uI9zTuiD9pmJVVnmtC3G7gaDcbubMc4ZieSRg_q1mLlChhOFSDHAe86y9wZsotjfhKjn0NC8gk-cVLTWhAyxPk",
      nextType: "schedule",
      nextColor: "bg-white/90 text-slate-900",
    },
  ];

  return (
    <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 md:px-8 py-6 space-y-12">
      {/* Trending Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined filled text-orange-500">
              local_fire_department
            </span>
            Trending Turfs
          </h2>
          <a
            className="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1"
            href="#"
          >
            View All{" "}
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTurfs.map((turf, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 dark:border-gray-800`}
            >
              <div className="aspect-[16/9] w-full bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <div className="absolute top-3 left-3 z-20 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  {turf.rating}
                </div>
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${turf.image})` }}
                  data-alt={`Turf image ${index + 1}`}
                ></div>
              </div>
              <div className="p-4 relative">
                <div className="absolute -top-5 right-4 z-20">
                  <button className="size-10 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center hover:bg-primary-dark transition-colors">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {turf.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-gray-400 flex items-center gap-1 mb-3">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {turf.location}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded w-fit">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  Next Slot: {turf.nextSlot}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Turfs Near You Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            All Turfs Near You
          </h2>
          <span className="text-sm font-medium text-slate-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md">
            {allTurfs.length} found
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allTurfs.map((turf, index) => (
            <article
              key={index}
              className="flex flex-col h-full bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all group"
            >
              {/* Image Area */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute top-3 right-3 z-10">
                  <button className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      favorite
                    </span>
                  </button>
                </div>
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${turf.image})` }}
                  data-alt={turf.name}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md ${turf.nextColor} text-xs font-bold shadow-sm`}
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {turf.nextType}
                    </span>
                    Next: {turf.nextSlot}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate pr-2">
                    {turf.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-slate-700 dark:text-gray-300">
                    <span className="material-symbols-outlined text-[12px] filled text-yellow-500">
                      star
                    </span>{" "}
                    {turf.rating}
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-gray-400 mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>
                  {turf.location}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      Starting at
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      ₹{turf.price}
                      <span className="text-xs font-normal text-slate-500">
                        /hr
                      </span>
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-lg hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold text-slate-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Load More Turfs
          </button>
        </div>
      </section>
    </main>
  );
}
