export const metadata = {
  title: "We'll Be Back Soon | Maintenance",
  description: "Sleek note is currently undergoing scheduled maintenance to enhance your experience.",
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--secondary)] text-[var(--primary)] px-6">
      <section className="max-w-3xl w-full text-center">
        <div className="mx-auto mb-6 w-12 h-12 rounded-full border-2 border-[var(--primary)] flex items-center justify-center font-bold">
          <span className="text-sm">PD</span>
        </div>

        <h1 className="text-3xl lg:text-5xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">
          We'll Be Back Soon
        </h1>
        <p className="text-sm lg:text-base opacity-80 leading-relaxed max-w-2xl mx-auto">
          Apologies for the inconvenience! The site is currently undergoing scheduled maintenance to
          enhance your experience. We anticipate being back online shortly.
        </p>

        <div className="my-10 flex items-center justify-center">
          <div className="relative w-[260px] h-[180px] lg:w-[420px] lg:h-[260px]">
            {/* Simple illustration with Tailwind boxes */}
            <div className="absolute inset-x-0 bottom-0 h-2 bg-orange-300 rounded" />
            <div className="absolute left-6 bottom-2 w-8 h-8 bg-orange-400 rounded-sm" />
            <div className="absolute right-6 bottom-6 w-24 h-6 bg-yellow-400 rounded-sm" />
            <div className="absolute right-9 bottom-12 w-28 h-4 bg-yellow-500 rounded-sm" />
            <div className="absolute inset-x-10 top-6 h-28 bg-white rounded-xl shadow" />
          </div>
        </div>

        <p className="text-xs lg:text-sm opacity-70 max-w-xl mx-auto">
          Meanwhile, feel free to explore my work or reach out.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--primary)] px-4 py-2 text-sm font-semibold hover:bg-white/60 transition"
          >
            Go to homepage
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center rounded-full border-2 border-transparent bg-[var(--primary)] text-[var(--secondary)] px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
