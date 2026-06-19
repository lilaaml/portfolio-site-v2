import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";

const Mechanism = () => {
  const steps = [
    {
      number: "01",
      title: "Diskusi & DP",
      description:
        "Diskusi kebutuhan fitur web melalui WhatsApp, dilanjutkan pembayaran DP 50% untuk memulai proyek.",
      icon: (
        <svg
          className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Proses Koding",
      description:
        "Website mulai dideveloment dan diproduksi sesuai kesepakatan. Anda mendapatkan update berkala.",
      icon: (
        <svg
          className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Pelunasan & Launch",
      description:
        "Review hasil akhir website bersama. Setelah semuanya sesuai, lakukan pelunasan dan website resmi dilaunching online.",
      icon: (
        <svg
          className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="mechanism mb-12">
      <div className="mx-auto max-w-md md:max-w-5xl px-4 md:px-0">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Alur Kerja Sederhana
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Tahapan mudah dan transparan dari awal diskusi hingga website Anda aktif online
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative overflow-hidden border-indigo-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 text-4xl font-extrabold text-gray-100 dark:text-gray-800 select-none">
                {step.number}
              </div>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50">
                    {step.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white pb-2">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mechanism;
