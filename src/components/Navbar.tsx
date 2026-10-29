import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="glass rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}

            <a
              href="#top"
              className="group flex items-center gap-3"
              onClick={closeMenu}
            >
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/[0.04] ring-1 ring-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-cyan/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative font-display text-lg font-bold text-gradient">
                  H
                </span>
              </div>

              <div className="hidden sm:block">
                <p className="font-display text-sm font-semibold text-white">
                  Hassen Methnani
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Full-Stack Developer
                </p>
              </div>
            </a>

            {/* Desktop navigation */}

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}

                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-accent to-cyan transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop actions */}

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="https://github.com/hassen-prog"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-all hover:bg-white/5 hover:text-white"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/hassen-methnani/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-all hover:bg-white/5 hover:text-white"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="#contact"
                className="ml-2 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
              >
                Let's talk
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Mobile button */}

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-300 transition-colors hover:text-white lg:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile navigation */}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="border-t border-white/5 pt-4">
                  <div className="flex flex-col">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={closeMenu}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </motion.a>
                    ))}

                    <a
                      href="#contact"
                      onClick={closeMenu}
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
                    >
                      Let's talk
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;