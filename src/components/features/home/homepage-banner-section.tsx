import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

export function HomePageBannerSection() {
  return (
    <Section className="p-0">
      <div className="w-full min-h-screen flex flex-col md:flex-row">

        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/Cesar.png"
            alt="Cesar"
            className="w-full max-w-[520px]  md:max-w-none  h-auto object-contain block"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 min-h-[500px] md:min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-10 lg:px-16 py-12 md:py-0">

          {/* Heading */}
          <h1 className="w-full max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Cesar Ian Bentulan
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 w-full max-w-xl text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            I am a passionate Web Developer who creates modern, responsive,
            and user-friendly websites. I enjoy turning ideas into functional
            and visually appealing digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">

            <NavLink
              to="/about"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto px-8 h-12">
                Get Started
              </Button>
            </NavLink>

            <NavLink
              to="/contact"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                className="w-full sm:w-auto px-8 h-12 bg-white hover:bg-gray-50 border-gray-200 text-gray-700"
              >
                Contact Me
              </Button>
            </NavLink>

          </div>

        </div>

      </div>
    </Section>
  );
}