
import { motion } from "framer-motion";
import {  CalendarDays, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Datarox",
    logo: "/company-logos/datarox.png",
    website: "https://www.datarox.fr/",
    role: "Full-Stack Developer Intern",
    period: "Internship",
    location: "Tunis, Tunisia",
    description:
      "Contributed to the development of a database management platform designed to simplify database operations through a unified interface.",
    technologies: [
      "React.js",
      "Express.js",
      "Python",
      "Flask",
      "MongoDB",
      "Docker",
    ],
    achievements: [
      "Developed frontend features using React.js and integrated them with backend APIs.",
      "Worked on database connectivity and operations across multiple database systems.",
      "Contributed to migration statistics, execution logs, and SQL script scheduling features.",
      "Collaborated using Git and Agile/Scrum practices.",
    ],
  },

{
  role: "DevOps Engineer Intern",
  company: "EO Data Center",
  website: "https://www.eodatacenter.com/",
  logo: "/company-logos/eodc.jpg",
  period: "Internship",
  location: "Tunis, Tunisia",
  description:
    "Worked on container orchestration, automated deployments, and monitoring to improve infrastructure reliability.",
  achievements: [
    "Deployed and maintained Kubernetes clusters to support reliable container orchestration.",
    "Built Helm-based deployment workflows to improve consistency and developer productivity.",
    "Monitored and troubleshot production-like systems using Prometheus and Grafana."
  ],
  technologies: [
    "Kubernetes",
    "Docker",
    "Helm",
    "Prometheus",
    "Grafana"
  ]
},

{
  role: "Company Immersion Intern",
  company: "INNOV-ALLIANCE-TECH",
  website: "https://www.ia-tech.net/",
  logo: "/company-logos/iat.jpg",
  period: "Internship",
  location: "Mégrine, Ben Arous, Tunisia",
  description:
    "Contributed to improving telework request management by working on request validation and administrative workflows, helping make the process more efficient.",
  achievements: [
    "Worked on telework request validation and management workflows.",
    "Contributed to reducing administrative overhead through improvements to request processing.",
    "Gained hands-on experience with full-stack development using C#, ASP.NET, Angular, and Microsoft SQL Server.",
  ],
  technologies: [
    "C#",
    "ASP.NET",
    "Angular",
    "Microsoft SQL Server",
  ],
}


];

export default function Experience() {
  return (
    <section id="experience" className="glass-section section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="MY JOURNEY"
          title="Experience that builds expertise."
          description="A look at the experience where I turned technical knowledge into practical solutions."
        />

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-purple-500 via-cyan-400/50 to-transparent md:left-8" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="relative pb-10 pl-14 md:pl-20"

            >

              <div className="absolute left-[11px] top-6 flex h-5 w-5 items-center justify-center rounded-full border border-purple-400 bg-[#0D0D12] md:left-[23px]">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
              </div>

              <div className="glass group relative cursor-pointer rounded-2xl p-6 transition-colors duration-300 hover:border-purple-400/30 md:p-8">
                <a
    href={experience.website}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${experience.company} official website`}
    className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
  />
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300"> */}
                      {/* <BriefcaseBusiness size={23} /> */}
                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="h-full w-full object-cover"
                        />
                    </div>
                    {/* </div> */}

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-gradient">
                        {experience.company}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={15} />
                          {experience.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={15} />
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
                    Professional Experience
                  </span>
                </div>

                <p className="mt-6 leading-7 text-gray-400">
                  {experience.description}
                </p>

                <div className="mt-6 space-y-3">
                  {experience.achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-purple-400"
                      />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
