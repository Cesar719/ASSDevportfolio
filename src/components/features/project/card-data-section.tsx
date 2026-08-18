import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio website showcasing my skills, projects, and experience.",
    image: "/project1.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://siap-finals-rho.vercel.app/",
  },
  {
    id: 2,
    title: "N/A",
    description:
      "N/A.",
    image: "/Cesar.png",
    technologies: ["React", "Tailwind CSS", "Git"],
    url: "https://example.com",
  },
  {
    id: 3,
    title: "N/A",
    description:
      "N/A.",
    image: "/Cesar.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    url: "https://example.com",
  },
  {
    id: 4,
    title: "N/A",
    description:
      "N/A",
    image: "/Cesar.png",
    technologies: ["React", "Git", "GitHub"],
    url: "https://example.com",
  },
];

export function CardDataSection() {
  return (
    <Section className="py-12 bg-gray-50/50">

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          My Projects
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Here are some of my projects built using modern web development
          technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden"
          >

            <CardHeader>

              {/* Project Image */}
              <CardTitle
                imageSrc={project.image}
                imageFullWidth
              >
                {project.title}
              </CardTitle>

              {/* Description */}
              <CardDescription>
                {project.description}
              </CardDescription>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </CardHeader>

            {/* View Project Button */}
            <CardFooter>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full justify-between group/btn">
                  View Project

                  <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">
                    →
                  </span>
                </Button>
              </a>
            </CardFooter>

          </Card>
        ))}

      </div>

    </Section>
  );
}