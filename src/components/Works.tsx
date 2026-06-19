import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

const Works = () => {
  const projects = [
    {
      title: "Sneaker Spot",
      description:
        "A modern, responsive e-commerce platform showcasing the latest and most popular sneakers with interactive product listings.",
      url: "https://sneakerspot.vercel.app/",
      tags: ["React", "E-Commerce", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Loop Lab",
      description:
        "A premium homepage designed for a consulting firm that showcases company achievements, lists services, and exhibits career openings.",
      url: "https://looplab-eight.vercel.app/",
      tags: ["Landing Page", "Consulting", "Tailwind CSS", "Responsive"],
    },
    {
      title: "Foodie",
      description:
        "A social platform for food enthusiasts to share cooking ideas, recipes, and culinary experiences with text, images, and videos.",
      url: "https://foodie-five-sepia.vercel.app/",
      tags: ["Web App", "Recipes", "Community", "Tailwind CSS"],
    },
    {
      title: "Arcadia Ticketing",
      description:
        "An online movie ticketing dashboard displaying real-time showtimes, cinema lists, and interactive booking layouts.",
      url: "https://lilaaml.github.io/TicketingApp/",
      tags: ["React", "Ticketing", "API Integration", "GitHub Pages"],
    },
  ];

  return (
    <section className="works mb-12">
      <div className="mx-auto max-w-md md:max-w-5xl px-4 md:px-0">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Project Terpilih (Portfolio)
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            Kumpulan project website yang didevelop dengan fokus pada performa tinggi, 
            estetika modern, dan fungsionalitas optimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between overflow-hidden border-indigo-100 dark:border-gray-800 bg-white dark:bg-gray-900 group hover:scale-[1.01] transition-transform duration-300"
            >
              <div>
                {/* Visual Accent Top Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-indigo-650" />
                
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-850 px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-sm text-gray-650 dark:text-gray-350 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </div>

              <CardFooter className="pt-2 pb-6 flex items-center justify-between">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors gap-1.5"
                >
                  Kunjungi Website
                  <svg
                    className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;