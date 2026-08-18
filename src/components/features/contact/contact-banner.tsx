import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

export function ContactPageBannerSection() {
  return (
    <Section className="py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Contact Me
          </p>

          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Let's Work Together
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project, idea, or opportunity? Feel free to get in touch
            with me. I would be happy to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="flex flex-col justify-center">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              I'm always open to discussing new projects, creative ideas,
              collaborations, or opportunities to work together.
            </p>

            {/* Email */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-500 uppercase">
                Email
              </p>

              <p className="mt-1 text-lg font-medium text-gray-900">
                cesarianbentulan@gmail.com
              </p>
            </div>

            {/* Location */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-500 uppercase">
                Location
              </p>

              <p className="mt-1 text-lg font-medium text-gray-900">
                Philippines
              </p>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
                Follow Me
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-gray-300 p-4 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Button */}
              <Button
                type="submit"
                className="w-full h-12 text-base"
              >
                Send Message
              </Button>

            </form>

          </div>

        </div>

      </div>
    </Section>
  );
}