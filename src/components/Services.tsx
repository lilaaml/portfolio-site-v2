import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

const Services = () => {
  return (
    <section className="services mb-12">
      <div className="mx-auto max-w-md md:max-w-5xl px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
          Pilihan Paket Website
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Landing Page */}
          <Card className="flex flex-col justify-between overflow-hidden border-indigo-100 dark:border-gray-800 bg-linear-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-950">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                  Umum & UMKM
                </span>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold mt-2 text-gray-900 dark:text-white">
                Landing Page / Website Brosur
              </CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400 mt-1">
                Cocok untuk UMKM, menu cafe, atau personal branding simple.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                    Apa yang didapat:
                  </h4>
                  <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-emerald-500 mr-2.5 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>1 Halaman Utama (Homepage)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-emerald-500 mr-2.5 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Profil Usaha & Galeri Produk/Jasa</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-emerald-500 mr-2.5 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Integrasi Tombol WhatsApp Langsung</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-emerald-500 mr-2.5 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Desain Responsive (HP, Tablet, Laptop)</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 dark:text-gray-500">Mulai dari</span>
                    <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                      Rp 1.200.000 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">s/d Rp 1.5M</span>
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      *Sudah termasuk domain & hosting tahun pertama
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50/50 dark:bg-gray-900/50 px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Estimasi Selesai
              </span>
              <span className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <svg
                  className="h-4 w-4 text-indigo-500 mr-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                5 – 7 hari kerja
              </span>
            </CardFooter>
          </Card>

          {/* Card 2: Company Profile */}
          <Card className="flex flex-col justify-between overflow-hidden border-indigo-100 dark:border-gray-800 bg-linear-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-950">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  Bisnis & Korporat
                </span>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold mt-2 text-gray-900 dark:text-white">
                Website Company Profile / Multi-Page
              </CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400 mt-1">
                Cocok untuk profil perusahaan formal atau bisnis dengan banyak informasi.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                    Apa yang didapat:
                  </h4>
                  <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-emerald-500 mr-2.5 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Paket Dasar hingga 3 Halaman (e.g. Home, About, Services)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-emerald-500 mr-2.5 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Form Kontak Email & Integrasi Google Maps</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-emerald-500 mr-2.5 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>SEO Dasar (Mempermudah website dicari di Google)</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 dark:text-gray-500">Mulai dari</span>
                    <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                      Rp 1.800.000
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      *Termasuk domain & hosting tahun pertama. Tambahan Halaman: +Rp 200.000 / halaman extra
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50/50 dark:bg-gray-900/50 px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Estimasi Selesai
              </span>
              <span className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <svg
                  className="h-4 w-4 text-indigo-500 mr-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                2 – 3 minggu
              </span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;

