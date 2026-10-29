import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Rocket,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete applications across modern frontend and backend technologies.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Designing structured systems with clean APIs, reusable components and maintainable code.",
  },
  {
    icon: Rocket,
    title: "DevOps Mindset",
    description:
      "Comfortable with Docker, CI/CD workflows and development practices that improve delivery.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Real-World Projects",
    description:
      "Hands-on experience developing solutions for database management, healthcare support and digital platforms.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="glass-section relative overflow-hidden border-t border-white/5 bg-transparent"
    >
      <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-accent/5 blur-[120px]" />

      <div className="section-container section-padding relative z-10">
        <SectionHeading
          eyebrow="About me"
          title="I turn ideas into working products."
          description="A software engineering graduate passionate about building useful digital experiences from the interface all the way to the backend."
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Main story */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-3xl p-7 sm:p-9">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    My approach
                  </p>

                  <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                    Engineering with purpose.
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                  <Code2 className="text-accent-light" size={22} />
                </div>
              </div>

              <div className="space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">
                <p>
                  I'm a software engineering graduate with a strong interest
                  in full-stack development. I enjoy understanding how
                  different parts of a product work together and turning
                  requirements into clean, reliable solutions.
                </p>

                <p>
                  During my internship at{" "}
                  <span className="font-medium text-white">
                    Datarox
                  </span>
                  , I worked on a database design and management platform
                  designed to simplify database operations through a unified
                  interface. The project brought together React, Express,
                  Python APIs, MongoDB and Docker.
                </p>

                <p>
                  I've also worked on a{" "}
                  <span className="font-medium text-white">
                    Spring Boot and Angular
                  </span>{" "}
                  platform for Bahja Association, combining community
                  features, educational content, appointments and an AI
                  assistant into a single web application.
                </p>

                <p>
                  What I enjoy most is the process of taking something from
                  an idea or technical requirement and gradually turning it
                  into a polished, usable product.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "React",
                  "Angular",
                  "TypeScript",
                  "Spring Boot",
                  "Node.js",
                  "Docker",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href="#projects"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                See what I've built

                <ArrowUpRight
                  size={16}
                  className="text-accent-light transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* Highlights */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                      <Icon
                        size={20}
                        className="text-accent-light"
                      />
                    </div>

                    <div>
                      <h3 className="font-display text-base font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;