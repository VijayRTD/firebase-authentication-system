import React from "react";

export default function MainContent() {
  // Turf images
  const turfImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2S8SCRZCX5lxaHsqkIredmRVbSRFRgnn1r-FPi2fpjVteRkrbLRtRa-TizQkM7XzR3vbpDxIK1y6AfzBGAFbcpYK0u0H4flSTZjyeE24qj-JcBuMin9ki-xBo4A90w-xU37L_OlDmnnFptRHR1Xtqy4jwq34fX4TCZBwFfX_YJhnXJfkIE_E8_wjHxw2PL-pKuVR0S9-hn9ofGeLMzRXVOExiRPhqGSE00N3tpcUA_Iem7DvO3Mi_clYQAx9MUK4ntXF5oedtlN4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCdjFsvtDv4uPDCeqNX5E-9P3VBhdKAYOIPt_nkF9FQJqPgGYh6PlnaTLib66HihBKGZH51zJlDQH7MCTrn1tyByoe9SJLUshDIYskltEnIFVO_1kx6oGM1o3tbfeLgO_y8brLgwW8_gX6QYYXlGpUsjA-9oJaBWmBOxubdEZTnjhTckv9pr2YQXs-HddYHxBi02gTMGJ_e48pt1p0BVaJ15lFWBwzzCqNsWy6xi1gCeo8ev5-r5rEW9ApCUWe-2qD64caduXtf_-4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9D1Mj7tTzdWDfQ4FNoS8yFx644jK77yMXMUsOx1wpU5YEpxwh_K0oaOB075t5T4GFs3StAhNFawl4OILVh6NasMFMw820p9UNsddj60TLf4jKh_PJwjONBF15oxp8G3M8UO8-NhC8NQb0Nbd85hZqC9s92iJ0rSwk4abaV1eNOmK_RFibIv8aTvI3_3DowNdGDIkGJKpQDVY16KmWgEBSOIg2JoznSPc7qHt2KIZU81rK6DIXkDG92pNbQrKL5PeplcB990YeK3U",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCFn9R76vzJX9WjZ26-dOFgQ8_V4ZX5QVsXuxsTrF95CKisqgT8ls9LAe40rRqfza17Df7_PDsnC71sjUQb4DBr4uOCxSwZHC8BfebawArCwkjYxXDZesGfDmooUQqnYA83yIX6e61DyMwgr3aZOm0iqJZUyPmNsz9rAidBvSIZvLGnT8NvnLpE4PxZk9_BrvKD0GKq2LYlCRMJJMqFaqh7UWa0YbHRnx_H_OPDm52UCypGYhrL7FYXysfXf24OI-ZwgcGOQq7bMqo",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ6iqheWkcHJ9a3FN3T-M84PRm5wzfCRIh6gAPAziidVRp0uW1CqAmBUSPF31gBceI65EFLGKYOITOK70oZQX3qi8273u0fXgGNA-i5Ds4AdAHVIDc3txlGZHz6espETlKxVoqUR3ITTSlnYQIElzQKD20NW1J8YDmH5J78YtA3K0Eo_175KQV-G5_iRVvqvsmw9MKuQgxGqU9jsL9wVRHxBMMpgLjE54grW4apOyMNGi9TBtXghAwTjZWHMwGlUrp-9OEHPJ8OUg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDzGWGZf5Mlojk0sgDeDEA8p2LQCXWgXbbRNZiB3xcsl5hxZm4-kzuyN_xurSF2Ih3yjY5fYilyOCVVUgPc5fV9JWt2yFUNFLwvlpdx3Njy6FoPfZ97ucNSkXJFMC_yhmlQwir-6BLPHjRmTXA-AZo3MLwlY6Dpv1tylp4KiU0NIEgue4AuAb85p31jvhKZmnot--vaV29cq3kOn2FOQ3YT0EiUWJTJKcY5Z0NWWFlQWbd-VSDMW_DQ2vXOGSaLY-Egp0mLNWMA7xY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-XEdEmlqpK-jUoACI3qsF-UBE_StnQa_hNTOTjOYuY6I9a6NN7kZJG6mGogFTVzrvA-tasQtKwsnYwJTierk-h0NygycUJjNbYS1MsiQzNKzicKIE5XmamZktreIs6VAkxWsVL-nAyilgp3QvMaT8cgMABj2QhLoARjLhjGRyFtgYC4oJjSB-uI9zTuiD9pmJVVnmtC3G7gaDcbubMc4ZieSRg_q1mLlChhOFSDHAe86y9wZsotjfhKjn0NC8gk-cVLTWhAyxPk",
  ];

  return (
    <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 md:px-8 py-6 space-y-8">
      
      {/* Filters */}
      <section className="flex flex-col gap-4">
        <div className="flex gap-3 overflow-x-auto pb-1">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Filters
          </button>

          <button className="px-4 py-2 bg-white border rounded-full text-sm">
            Near Me
          </button>

          <button className="px-4 py-2 bg-white border rounded-full text-sm">
            Under ₹1000
          </button>

          <button className="px-4 py-2 bg-white border rounded-full text-sm">
            Night Slots
          </button>
        </div>
      </section>

      {/* Trending */}

      {/* All Turfs */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined filled text-orange-500">local_fire_department</span>
            Trending Turfs
          </h2>
          <a className="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1" href="#">
            View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Turf Cards */}
          {["Super Over Arena", "The Pavilion Turf", "Night Strikers"].map((name, index) => (
            <div key={index} className={`group relative rounded-2xl overflow-hidden bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 dark:border-gray-800 ${index > 0 ? "hidden md:block" : ""} ${index > 1 ? "hidden lg:block" : ""}`}>
              <div className="aspect-[16/9] w-full bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <div className="absolute top-3 left-3 z-20 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  {["4.9", "4.7", "4.5"][index]}
                </div>
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${turfImages[index]})` }}
                  data-alt={`Turf image ${index + 1}`}
                ></div>
              </div>
              <div className="p-4 relative">
                <div className="absolute -top-5 right-4 z-20">
                  <button className="size-10 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center hover:bg-primary-dark transition-colors">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-400 flex items-center gap-1 mb-3">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {["Indiranagar • 0.8 km", "Domlur • 1.5 km", "Koramangala • 3.2 km"][index]}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded w-fit">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  Next Slot: {["Today 6:00 PM", "Today 7:30 PM", "Today 9:00 PM"][index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Remaining sections (All Turfs Near You, etc.) */}
      {/* You can use the same pattern: style={{ backgroundImage: `url(${url})` }} */}
      {/* Add other cards using turfImages array or new arrays as needed */}
    </main>
  );
}
