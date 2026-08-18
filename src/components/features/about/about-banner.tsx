import { Section } from "@/components/common/section";

export function AboutPageBannerSection() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Git",
    "GitHub",
  ];

  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            About Me
          </p>

          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Who I Am
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Get to know me and the technologies I use.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* About Text */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              I'm Cesar Ian Bentulan
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
              I am a passionate Web Developer who enjoys creating modern,
              responsive, and user-friendly websites. I like turning ideas
              into functional digital experiences while focusing on clean
              design, usability, and performance.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
              I continuously improve my skills by learning new technologies
              and building projects that help me become a better developer.
              My goal is to create websites and applications that are both
              visually appealing and useful.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="border border-gray-200 rounded-xl px-4 py-4 text-center font-semibold text-gray-700 bg-white hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
}