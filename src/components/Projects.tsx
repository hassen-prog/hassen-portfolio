
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Database,
//   HeartHandshake,
//   Layers3,
//   Sparkles,
//   Workflow,
// } from "lucide-react";
// import SectionHeading from "./SectionHeading";

// const projects = [
//   {
//     number: "01",
//     name: "Database Design Tool",
//     subtitle: "Unified Database Management Platform",
//     category: "Full-Stack Development",
//     description:
//       "A centralized platform that simplifies database management by bringing multiple database systems and essential operations into one interface.",
//     icon: Database,
//     accent: "purple",
//     technologies: [
//       "React.js",
//       "Express.js",
//       "Python",
//       "Flask",
//       "MongoDB",
//       "Docker",
//     ],
//     features: [
//       "Multi-database connection management",
//       "SQL execution and script scheduling",
//       "Database migration statistics",
//       "Execution monitoring and logs",
//     ],
//     gradient: "from-purple-500/20 via-violet-500/5 to-transparent",
//     iconColor: "text-purple-300",
//     iconBackground: "bg-purple-500/15",
//     borderColor: "border-purple-400/20",
//     orbColor: "bg-purple-500/20",
//   },
//   {
//     number: "02",
//     name: "Bahja Association",
//     subtitle: "Family Support & Community Platform",
//     category: "Full-Stack Development",
//     description:
//       "A digital support platform designed to help families with children affected by cancer access helpful resources, connect with others, and discover engaging content.",
//     icon: HeartHandshake,
//     accent: "cyan",
//     technologies: [
//       "Angular",
//       "Spring Boot",
//       "Java",
//       "REST APIs",
//       "SQL",
//     ],
//     features: [
//       "Books, videos, and kids' activities",
//       "Community forum for parents",
//       "Appointment and meeting management",
//       "AI-powered conversational assistant",
//     ],
//     gradient: "from-cyan-500/20 via-blue-500/5 to-transparent",
//     iconColor: "text-cyan-300",
//     iconBackground: "bg-cyan-500/15",
//     borderColor: "border-cyan-400/20",
//     orbColor: "bg-cyan-500/20",
//   },
// ];

// function ProjectVisual({
//   project,
// }: {
//   project: (typeof projects)[number];
// }) {
//   const Icon = project.icon;

//   return (
//     <div
//       className={` relative mb-6 flex h-56 items-center justify-center overflow-hidden rounded-xl border ${project.borderColor} bg-gradient-to-br ${project.gradient}`}
//     >
//       <div
//         className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${project.orbColor} blur-3xl`}
//       />
//       <div
//         className={`absolute -bottom-16 -left-8 h-40 w-40 rounded-full ${project.orbColor} blur-3xl`}
//       />

//       <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

//       <div className="relative flex flex-col items-center">
//         <div
//           className={`flex h-20 w-20 items-center justify-center rounded-2xl border ${project.borderColor} ${project.iconBackground} shadow-2xl backdrop-blur-xl`}
//         >
//           <Icon size={38} className={project.iconColor} />
//         </div>

//         <div className="mt-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#0D0D12]/80 px-4 py-2 backdrop-blur-md">
//           {project.number === "01" ? (
//             <Workflow size={15} className={project.iconColor} />
//           ) : (
//             <Sparkles size={15} className={project.iconColor} />
//           )}
//           <span className="text-xs font-medium tracking-wide text-gray-300">
//             {project.number === "01"
//               ? "Connect · Manage · Monitor"
//               : "Connect · Support · Grow"}
//           </span>
//         </div>
//       </div>

//       <span className="absolute left-4 top-4 text-xs font-semibold tracking-[0.2em] text-gray-400">
//         PROJECT {project.number}
//       </span>

//       <Layers3
//         size={18}
//         className={`absolute bottom-4 right-4 ${project.iconColor} opacity-70`}
//       />
//     </div>
//   );
// }

// export default function Projects() {
//   return (
//     <section id="projects" className="glass-section section-padding">
//       <div className="section-container">
//         <SectionHeading
//           eyebrow="SELECTED WORK"
//           title="Projects built to solve real problems."
//           description="A selection of projects where I combined frontend, backend, and software engineering skills to create practical solutions."
//         />

//         <div className="mt-14 grid gap-7 lg:grid-cols-2">
//           {projects.map((project, index) => (
//             <motion.article
//               key={project.number}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.15 }}
//               transition={{ duration: 0.55, delay: index * 0.15 }}
//               className="glass group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-7"
//             >
//               <ProjectVisual project={project} />

//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <p
//                     className={`text-xs font-semibold uppercase tracking-[0.16em] ${project.iconColor}`}
//                   >
//                     {project.category}
//                   </p>

//                   <h3 className="mt-2 text-2xl font-semibold text-white">
//                     {project.name}
//                   </h3>

//                   <p className="mt-1 text-sm text-gray-400">
//                     {project.subtitle}
//                   </p>
//                 </div>

//                 <div
//                   className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${project.borderColor} ${project.iconBackground} transition-transform duration-300 group-hover:rotate-45`}
//                 >
//                   <ArrowUpRight
//                     size={19}
//                     className={project.iconColor}
//                   />
//                 </div>
//               </div>

//               <p className="mt-5 text-sm leading-7 text-gray-400">
//                 {project.description}
//               </p>

//               <div className="mt-6">
//                 <h4 className="mb-3 text-sm font-semibold text-gray-200">
//                   Key features
//                 </h4>

//                 <ul className="grid gap-3 sm:grid-cols-2">
//                   {project.features.map((feature) => (
//                     <li
//                       key={feature}
//                       className="flex items-start gap-2 text-sm leading-6 text-gray-400"
//                     >
//                       <span
//                         className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
//                           project.accent === "purple"
//                             ? "bg-purple-400"
//                             : "bg-cyan-400"
//                         }`}
//                       />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mt-6 border-t border-white/[0.08] pt-5">
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((technology) => (
//                     <span
//                       key={technology}
//                       className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300"
//                     >
//                       {technology}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-10 text-center text-sm text-gray-500"
//         >
//           Always learning, building, and exploring better ways to solve problems.
//         </motion.p>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  HeartHandshake,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    number: "01",
    name: "DevPulse",
    repoUrl: "https://github.com/hassen-prog/devpulse/",
    subtitle: "GitHub Repository Health Analyzer",
    category: "Developer Tooling",
    description:
      "A developer tool that evaluates the engineering health of public GitHub repositories, turning repository data and configuration checks into an explainable score and practical recommendations.",
    icon: ShieldCheck,
    accent: "purple",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "GitHub REST API",
      "Vitest",
      "Docker",
      "GitHub Actions",
    ],
    features: [
      "Repository metadata and activity analysis",
      "Engineering health score and grade",
      "Checks for README, tests, CI, and licensing",
      "Evidence-based recommendations for improvement",
    ],
    visualLabel: "Analyze · Evaluate · Improve",
    gradient: "from-purple-500/20 via-violet-500/5 to-transparent",
    iconColor: "text-purple-300",
    iconBackground: "bg-purple-500/15",
    borderColor: "border-purple-400/20",
    orbColor: "bg-purple-500/20",
  },
  {
    number: "02",
    name: "Database Design Tool",
    subtitle: "Unified Database Management Platform",
    category: "Full-Stack Development",
    demoVideo: "https://www.youtube.com/embed/ioUnVtPrfr8",
    description:
      "A centralized platform that simplifies database management by bringing multiple database systems and essential operations into one interface.",
    icon: Database,
    accent: "purple",
    technologies: [
      "React.js",
      "Express.js",
      "Python",
      "Flask",
      "MongoDB",
      "Docker",
    ],
    features: [
      "Multi-database connection management",
      "SQL execution and script scheduling",
      "Database migration statistics",
      "Execution monitoring and logs",
    ],
    visualLabel: "Connect · Manage · Monitor",
    gradient: "from-purple-500/20 via-violet-500/5 to-transparent",
    iconColor: "text-purple-300",
    iconBackground: "bg-purple-500/15",
    borderColor: "border-purple-400/20",
    orbColor: "bg-purple-500/20",
  },
  {
    number: "03",
    name: "Bahja Association",
    repoUrl: "https://github.com/hassen-prog/Bahja-Association-Platform",
    subtitle: "Family Support & Community Platform",
    category: "Full-Stack Development",
    description:
      "A digital support platform designed to help families with children affected by cancer access helpful resources, connect with others, and discover engaging content.",
    icon: HeartHandshake,
    accent: "cyan",
    technologies: [
      "Angular",
      "Spring Boot",
      "Java",
      "REST APIs",
      "SQL",
    ],
    features: [
      "Books, videos, and kids' activities",
      "Community forum for parents",
      "Appointment and meeting management",
      "AI-powered conversational assistant",
    ],
    visualLabel: "Connect · Support · Grow",
    gradient: "from-cyan-500/20 via-blue-500/5 to-transparent",
    iconColor: "text-cyan-300",
    iconBackground: "bg-cyan-500/15",
    borderColor: "border-cyan-400/20",
    orbColor: "bg-cyan-500/20",
  },
];

function ProjectVisual({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const Icon = project.icon;
// if ("demoVideo" in project && project.demoVideo) {
//   return (
//     <div
//       className={`relative mb-6 aspect-video overflow-hidden rounded-xl border ${project.borderColor} bg-black`}
//     >
//       <video
//         controls
//         preload="metadata"
//         className="h-full w-full object-contain"
//       >
//         <source src={project.demoVideo} type="video/mp4" />
//         Your browser does not support video playback.
//       </video>
      
//     </div>
//   );
// }

if ("demoVideo" in project && project.demoVideo) {
  return (
    <div
      className={`relative mb-6 aspect-video overflow-hidden rounded-xl border ${project.borderColor} bg-black`}
    >
      <iframe
        src={project.demoVideo}
        title={`${project.name} demo video`}
        className="h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

  return (
    <div
      className={`relative mb-6 flex h-56 items-center justify-center overflow-hidden rounded-xl border ${project.borderColor} bg-gradient-to-br ${project.gradient}`}
    >
      <div
        className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${project.orbColor} blur-3xl`}
      />

      <div
        className={`absolute -bottom-16 -left-8 h-40 w-40 rounded-full ${project.orbColor} blur-3xl`}
      />

      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative flex flex-col items-center">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-2xl border ${project.borderColor} ${project.iconBackground} shadow-2xl backdrop-blur-xl`}
        >
          <Icon size={38} className={project.iconColor} />
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#0D0D12]/80 px-4 py-2 backdrop-blur-md">
          {project.number === "02" ? (
            <Workflow size={15} className={project.iconColor} />
          ) : (
            <Sparkles size={15} className={project.iconColor} />
          )}

          <span className="text-xs font-medium tracking-wide text-gray-300">
            {project.visualLabel}
          </span>
        </div>
      </div>

      <span className="absolute left-4 top-4 text-xs font-semibold tracking-[0.2em] text-gray-400">
        PROJECT {project.number}
      </span>

      <Layers3
        size={18}
        className={`absolute bottom-4 right-4 ${project.iconColor} opacity-70`}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="glass-section section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects built to solve real problems."
          description="A selection of projects where I combined frontend, backend, testing, and software engineering skills to build practical solutions."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              className="glass group relative rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-7"
            >
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
                >
                  <span className="sr-only">
                    Open {project.name} repository on GitHub
                  </span>
                </a>
              )}
              <ProjectVisual project={project} />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${project.iconColor}`}
                  >
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {project.subtitle}
                  </p>
                </div>

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${project.borderColor} ${project.iconBackground} transition-transform duration-300 group-hover:rotate-45`}
                >
                  <ArrowUpRight
                    size={19}
                    className={project.iconColor}
                  />
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-200">
                  Key features
                </h4>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm leading-6 text-gray-400"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          project.accent === "purple"
                            ? "bg-purple-400"
                            : "bg-cyan-400"
                        }`}
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center text-sm text-gray-500"
        >
          Always learning, building, and exploring better ways to solve problems.
        </motion.p>
      </div>
    </section>
  );
}
