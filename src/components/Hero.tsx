const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-b from-indigo-50/20 via-white to-white dark:from-indigo-950/20 dark:via-gray-950 dark:to-gray-950">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-indigo-400/10 dark:bg-indigo-500/5 blur-3xl" />
        <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-emerald-400/10 dark:bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-0 text-center relative z-10">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-indigo-50/50 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-850/40 dark:bg-indigo-950/30 dark:text-indigo-400 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
          Jasa Pembuatan Website Profesional
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
          Membuat Bisnis Anda Terlihat Lebih{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300">
            Profesional
          </span>{" "}
          dengan Website Modern
        </h1>

        {/* Paragraph */}
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Jasa pembuatan website Landing Page & Company Profile custom, pengerjaan cepat,
          dan desain responsif yang optimal di handphone maupun laptop.
        </p>

        {/* Action Button */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/6281293816977?text=Halo%20Lila,%20saya%20tertarik%20konsultasi%20pembuatan%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 hover:shadow-indigo-500/30 active:scale-98 transition-all duration-200 cursor-pointer"
          >
            <svg
              className="h-5 w-5 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Konsultasi Gratis via WhatsApp
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-y-4 max-w-3xl mx-auto border-t border-gray-100 dark:border-gray-900 pt-8 text-sm font-medium text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Pengerjaan Cepat
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Desain Custom Modern
          </div>
          <div className="flex items-center justify-center gap-2 col-span-2 md:col-span-1">
            <svg
              className="h-5 w-5 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Harga Terjangkau
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
