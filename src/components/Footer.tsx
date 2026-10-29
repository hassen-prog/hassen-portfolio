import { ArrowUp  } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="section-container py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-white"
            >
              H<span className="text-purple-400">.</span>M
            </a>

            <p className="mt-2 text-sm text-gray-500">
              Full-Stack Developer · Tunisia
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/hassen-prog"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-300"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/hassen-methnani/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-300"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-300"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Hassen Methnani. Built with React,
            TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}