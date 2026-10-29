import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hassen.methnani@outlook.com",
    href: "mailto:hassen.methnani@outlook.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/hassen-methnani",
    href: "https://github.com/hassen-prog",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/hassen-methnani",
    href: "https://www.linkedin.com/in/hassen-methnani",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="glass-section section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's build something meaningful."
          description="Have a project, opportunity, or idea you'd like to discuss? I'd be happy to hear from you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main contact card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/[0.08] via-[#0D0D12] to-cyan-500/[0.05] p-7 md:p-10"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                <Mail size={26} />
              </div>

              <h3 className="mt-7 max-w-lg text-2xl font-semibold leading-tight text-white md:text-3xl">
                Open to opportunities and interesting projects.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
                Whether you're looking for a Full-Stack Developer, have a
                project in mind, or simply want to connect, feel free to reach
                out.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:hassen.methnani@outlook.com"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Send me an email
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href="/Hassen_Methnani_Software_Engineer_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-purple-400/30 hover:bg-purple-500/10"
                >
                  <Download size={17} />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact information */}
          <div className="space-y-4">
            {contactLinks.map((contact, index) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-colors group-hover:border-purple-400/20 group-hover:bg-purple-500/10 group-hover:text-purple-300">
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      {contact.label}
                    </p>
                    <p className="mt-1 truncate text-sm text-gray-300">
                      {contact.value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-gray-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-300"
                  />
                </motion.a>
              );
            })}

            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Location
                </p>
                <p className="mt-1 text-sm text-gray-300">
                  Tunisia · Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}