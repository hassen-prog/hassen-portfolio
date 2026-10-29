import { motion } from "framer-motion";
import {
  Code2,
  Database,
  CloudCog,
  ServerCog,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building modern web applications from responsive interfaces to robust backend APIs and business logic.",
    technologies: "React · Angular · Node.js · Spring Boot",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Designing and integrating database-driven applications with a focus on reliable data management and scalable architectures.",
    technologies: "MySQL · PostgreSQL · MongoDB · Oracle",
  },
  {
    icon: ServerCog,
    title: "API & Backend Development",
    description:
      "Developing REST APIs and backend services that connect applications, databases, and external systems.",
    technologies: "Express.js · Spring Boot · Flask · REST APIs",
  },
  {
    icon: CloudCog,
    title: "DevOps & Deployment",
    description:
      "Using containerization, version control, and CI/CD practices to make applications easier to build, test, and deploy.",
    technologies: "Docker · Git · CI/CD · Jenkins",
  },
];

export default function Services() {
  return (
    <section id="services" className="glass-section section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="WHAT I DO"
          title="Turning ideas into practical solutions."
          description="The areas where I can contribute throughout the software development lifecycle."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 md:p-7"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                      <Icon size={23} />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-purple-300"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-white/[0.08] pt-4">
                    <p className="text-xs font-medium tracking-wide text-gray-500">
                      {service.technologies}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-purple-400/10 bg-purple-500/[0.04] p-6 text-center md:p-8"
        >
          <p className="text-sm leading-7 text-gray-400">
            I enjoy working across the stack, learning new technologies, and
            turning complex technical requirements into clean, maintainable
            solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}