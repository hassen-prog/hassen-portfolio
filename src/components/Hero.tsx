import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background */}

      <div className="absolute inset-0 grid-background opacity-60" />

      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan/5 blur-[120px]" />

      {/* Content */}

      <div className="section-container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}

          <div>
            {/* Availability */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium text-emerald-300">
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="mb-3 font-display text-lg font-medium text-zinc-500">
                Hello, I'm
              </p>

              <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
                Hassen
                <br />

                <span className="text-gradient">
                  Methnani.
                </span>
              </h1>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-10 bg-gradient-to-r from-accent to-cyan" />

                <p className="font-display text-lg font-medium text-zinc-300 sm:text-xl">
                  Full-Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
            >
              I build modern, scalable and user-focused digital experiences
              by combining clean interfaces, robust backend systems and
              thoughtful engineering.
            </motion.p>

            {/* Location */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 flex items-center gap-2 text-sm text-zinc-500"
            >
              <MapPin size={15} className="text-accent-light" />
              Tunisia
            </motion.div>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-zinc-200"
              >
                Explore my work

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/Hassen_Methnani_Software_Engineer_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/[0.06]"
              >
                <Download size={17} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="https://github.com/hassen-prog"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-500 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/hassen-methnani/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-500 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={17} />

              </a>

              <a
                href="mailto:hassen.methnani@outlook.com"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-500 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </motion.div>
          </div>

          {/* Right visual */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            {/* Glow */}

            <div className="absolute inset-10 rounded-full bg-accent/20 blur-[100px]" />

            {/* Orbit */}

            <div className="absolute inset-0 aspect-square animate-spin-slow rounded-full border border-dashed border-white/10" />

            <div className="absolute inset-10 aspect-square rounded-full border border-accent/10" />

            {/* Main card */}

            <div className="relative mx-auto aspect-square max-w-[390px]">
              <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-accent/20 via-transparent to-cyan/10 blur-xl" />

              <div className="glass absolute inset-8 overflow-hidden rounded-[3rem] shadow-glow">
                {/* Top bar */}

                <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>

                  <Code2 size={16} className="text-zinc-600" />
                </div>

                {/* Avatar */}

                <div className="flex h-[calc(100%-57px)] items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-accent/20 to-cyan/20 blur-2xl" />

                    <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-2xl sm:h-56 sm:w-56">
                      <div className="absolute inset-2 rounded-full border border-accent/20" />

                      <span className="font-display text-8xl font-bold text-gradient">
                        <img
                          src="/profile.jpg"
                          alt="Hassen Methnani"
                           className="h-full w-full rounded-full object-cover"
                            />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass absolute left-0 top-24 rounded-2xl px-4 py-3 shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/10">
                    <Code2 size={18} className="text-cyan" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      ReactJS
                    </p>
                    <p className="text-[10px] text-zinc-500">
                      Frontend
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass absolute left-0 bottom-8 rounded-2xl px-4 py-3 shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/10">
                    <Code2 size={18} className="text-cyan" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Angular
                    </p>
                    <p className="text-[10px] text-zinc-500">
                      Frontend
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass absolute top-20 right-0 rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                    <Sparkles size={17} className="text-accent-light" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      NodeJS
                    </p>
                    <p className="text-[10px] text-zinc-500">
                      Backend
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass absolute bottom-8 right-0 rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                    <Sparkles size={17} className="text-accent-light" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Spring Boot
                    </p>
                    <p className="text-[10px] text-zinc-500">
                      Backend
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-300 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;