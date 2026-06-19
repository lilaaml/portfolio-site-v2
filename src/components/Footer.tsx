const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300 border-t border-indigo-200/20 dark:border-indigo-400/20 py-12 md:py-16 transition-colors duration-200">
      <div className="mx-auto max-w-md md:max-w-5xl px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10">
          {/* Left Column: Branding */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-white dark:text-indigo-950 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-indigo-950" />
              Lila Amelia
            </h3>
            <p className="text-sm text-indigo-50 dark:text-indigo-950/80 max-w-sm leading-relaxed">
              Membantu bisnis dan personal brand Anda tampil lebih profesional dan dipercaya lewat website modern, responsif, dan berkinerja tinggi.
            </p>
          </div>

          {/* Right Column: Contact info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-indigo-100 dark:text-indigo-950/80 uppercase tracking-wider">
              Hubungi Saya / Diskusi Proyek
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/6281293816977"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3.5 rounded-lg border border-white/10 dark:border-indigo-450/20 bg-white/95 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 hover:border-white/30 dark:hover:border-indigo-400/30 hover:shadow-xs transition-all duration-200"
              >
                <div className="p-2 rounded-md bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">WhatsApp</div>
                  <div className="text-sm font-bold text-gray-800 dark:text-gray-200">0812-9381-6977</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:lila041aml@gmail.com"
                className="group flex items-center gap-3 p-3.5 rounded-lg border border-white/10 dark:border-indigo-450/20 bg-white/95 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 hover:border-white/30 dark:hover:border-indigo-400/30 hover:shadow-xs transition-all duration-200"
              >
                <div className="p-2 rounded-md bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                  <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Email</div>
                  <div className="text-sm font-bold text-gray-800 dark:text-gray-200">lila041aml@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/20 dark:bg-indigo-950/20 mb-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-indigo-50 dark:text-indigo-950/90">
          <div>
            Copyright © {new Date().getFullYear()} Lila Amelia. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            Powered by{" "}
            <a
              href="https://github.com/lilaaml/portfolio-site-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white dark:text-indigo-950 hover:text-indigo-50 dark:hover:text-indigo-900 hover:underline transition-colors font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
