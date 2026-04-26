import React from "react";

function ClockIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M12 6.5v6l4 2"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21s-7.5-4.7-10-9.5C.3 8.2 2.2 4.5 5.8 4.5c2 0 3.4 1 4.2 2.2.8-1.2 2.2-2.2 4.2-2.2 3.6 0 5.5 3.7 3.8 7C19.5 16.3 12 21 12 21z" />
    </svg>
  );
}

function StoreIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 10h14v9H5z" fill="currentColor" />
      <path d="M4 6h16l-1 4H5L4 6z" fill="currentColor" opacity="0.85" />
      <path d="M8 14h3v5H8zM14 14h3v2h-3z" fill="white" opacity="0.9" />
    </svg>
  );
}

function StarIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3.5l2.35 5 5.4.8-3.9 3.85.9 5.35L12 16l-4.75 2.5.9-5.35-3.9-3.85 5.4-.8L12 3.5z" />
    </svg>
  );
}

export default function Acceuil() {
  const languages = [
    "English (UK)",
    "Français (France)",
    "Español",
    "Türkçe",
    "Português (Portugal)",
    "العربية",
    "Italiano",
    "More languages...",
  ];

  return (
    <main className="min-h-screen bg-white text-[#1c1e21]">
      <section className="grid min-h-[calc(100vh-76px)] grid-cols-1 lg:grid-cols-[1.65fr_1fr]">
        <div className="relative overflow-hidden border-b border-r-0 border-[#d9dde3] px-8 py-10 lg:border-r lg:border-b-0">
          <div className="absolute left-10 top-12 flex h-14 w-14 items-center justify-center rounded-full bg-[#0866ff] text-5xl font-bold text-white">
            f
          </div>

          <div className="absolute bottom-16 left-9 max-w-[310px] text-[54px] font-bold leading-[1.06] tracking-[-1.5px] sm:text-[64px] lg:bottom-14">
            <div>Explore</div>
            <div>the</div>
            <div>things</div>
            <div className="text-[#1877f2]">you love.</div>
          </div>

          <div className="relative mx-auto mt-10 h-[620px] max-w-[700px]">
            <div className="absolute left-[15%] top-10 rotate-[-12deg] text-7xl">
              😄
            </div>

            <div className="absolute left-[44%] top-[18px] z-20 h-[540px] w-[320px] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10">
              <div className="absolute left-7 right-7 top-6 z-30 h-1.5 rounded-full bg-white/85" />
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop"
                alt="Skateur"
              />
              <div className="absolute right-[-18px] top-[72px] flex items-center gap-2 rounded-xl bg-[#7467f0] px-3 py-2 text-lg font-semibold text-white shadow-lg">
                <ClockIcon className="h-6 w-6 text-white" />
                16:45
              </div>
              <div className="absolute bottom-6 left-8 flex gap-4">
                <div className="h-9 w-[135px] rounded-full border-4 border-white" />
                <div className="h-9 w-9 rounded-full border-4 border-white" />
                <div className="h-9 w-9 rounded-full border-4 border-white" />
              </div>
            </div>

            <div className="absolute left-[22%] top-[150px] z-10 h-[270px] w-[310px] overflow-hidden rounded-3xl bg-[#f5ccb0] shadow-xl ring-1 ring-black/10">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1616627561839-074385245ff6?q=80&w=900&auto=format&fit=crop"
                alt="Coussin décoratif"
              />
              <div className="absolute left-5 top-5 rounded-lg bg-white/85 p-2 text-white">
                <StoreIcon className="h-7 w-7 text-white" />
              </div>
            </div>

            <div className="absolute left-[30%] top-[365px] z-30 w-[260px] overflow-hidden rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-black/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1877f2] text-white">
                <StarIcon className="h-5 w-5 text-white" />
              </div>
              <img
                className="h-[205px] w-full rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=900&auto=format&fit=crop"
                alt="Cinéma"
              />
              <div className="mt-4 h-4 w-full rounded-full bg-gray-200" />
              <div className="mt-3 h-4 w-[70%] rounded-full bg-gray-200" />
            </div>

            <div className="absolute left-[54%] top-[470px] z-40 h-[150px] w-[150px] overflow-hidden rounded-full border-[7px] border-[#1877f2] bg-white shadow-xl">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop"
                alt="Portrait"
              />
            </div>

            <div className="absolute left-[78%] top-[385px] z-40 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-gradient-to-br from-[#ff4b9f] to-[#ff003b] p-5 text-white shadow-xl">
              <HeartIcon className="h-14 w-14 text-white" />
            </div>
          </div>
        </div>

        <aside className="flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-[640px]">
            <h1 className="mb-7 text-xl font-bold">Log in to Facebook</h1>

            <form
              className="space-y-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                className="h-16 w-full rounded-2xl border border-[#d0d5dd] px-5 text-lg outline-none transition focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/15"
                placeholder="Email address or mobile number"
                type="text"
              />
              <input
                className="h-16 w-full rounded-2xl border border-[#d0d5dd] px-5 text-lg outline-none transition focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/15"
                placeholder="Password"
                type="password"
              />
              <button className="h-14 w-full rounded-2xl bg-[#0866ff] text-lg font-bold text-white transition hover:bg-[#075be3]">
                Log in
              </button>
            </form>

            <button className="mx-auto mt-7 block text-lg font-semibold hover:underline">
              Forgotten password?
            </button>

            <div className="my-20" />

            <button className="h-14 w-full rounded-2xl border-2 border-[#0866ff] text-lg font-semibold text-[#0866ff] transition hover:bg-[#f0f6ff]">
              Create new account
            </button>

            <div className="mt-8 flex items-center justify-center gap-2 text-lg font-semibold">
              <span className="text-[#0866ff]">∞</span>
              <span>Meta</span>
            </div>
          </div>
        </aside>
      </section>

      <footer className="border-t border-[#d9dde3] bg-white px-8 py-8">
        <div className="mx-auto flex max-w-[1220px] flex-wrap justify-center gap-x-9 gap-y-3 text-sm text-[#606770]">
          {languages.map((language) => (
            <button key={language} className="hover:underline">
              {language}
            </button>
          ))}
        </div>
      </footer>
    </main>
  );
}
