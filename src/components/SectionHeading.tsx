import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${
        centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-accent to-cyan" />

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
          {eyebrow}
        </span>

        <span className="h-px w-8 bg-gradient-to-r from-cyan to-accent" />
      </div>

      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;