import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="glass-section relative overflow-hidden border-t border-white/5 bg-transparent"
    >
      {/* Background decoration */}

      <div className="absolute right-[-200px] top-40 h-[450px] w-[450px] rounded-full bg-cyan/5 blur-[130px]" />

      <div className="section-container section-padding relative z-10">
        <SectionHeading
          eyebrow="Technical skills"
          title="Tools I use to build."
          description="A practical stack built around modern frontend development, backend engineering, databases and DevOps practices."
        />

        {/* Skill categories */}

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.08,
              }}
              className="group rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.035] sm:p-7"
            >
              {/* Header */}

              <div className="mb-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {category.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
                      {category.description}
                    </p>
                  </div>
                  <span className="hidden shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:block">
                  {/* <span className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:block"> */}
                    {category.skills.length}{" "}
                    {category.skills.length === 1
                      ? "technology"
                      : "technologies"}
                  </span>
                </div>
              </div>

              {/* Skills */}

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.35,
                        delay:
                          categoryIndex * 0.08 +
                          skillIndex * 0.04,
                      }}
                      className="group/skill flex items-center gap-3 rounded-2xl border border-white/5 bg-black/10 px-3 py-3 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.04]">
                        <Icon
                          size={19}
                          style={{
                            color: skill.color,
                          }}
                        />
                      </div>

                      <span className="text-xs font-medium text-zinc-400 transition-colors group-hover/skill:text-white sm:text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom mindset panel */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-6 overflow-hidden rounded-3xl border border-accent/10 bg-gradient-to-br from-accent/[0.07] via-transparent to-cyan/[0.04]"
        >
          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <BrainCircuit
                    size={21}
                    className="text-accent-light"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-accent-light">
                    Beyond the stack
                  </p>

                  <h3 className="mt-1 font-display text-xl font-semibold text-white">
                    Good engineering is more than knowing tools.
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
                I focus on understanding the problem first, choosing the
                right architecture, keeping code maintainable and building
                experiences that are practical for the people who use them.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
              {[
                "Clean Code",
                "Problem Solving",
                "API Design",
                "Responsive UI",
                "Teamwork",
                "Agile",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
                >
                  <CheckCircle2
                    size={13}
                    className="text-accent-light"
                  />

                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}

        <div className="mt-8 flex justify-center">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
          >
            See how I applied these skills

            <ArrowUpRight
              size={16}
              className="text-accent-light transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;