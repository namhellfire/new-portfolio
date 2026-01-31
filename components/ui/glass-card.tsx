"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glowColor?: string;
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  glowColor = "violet",
}: GlassCardProps) {
  const glowColors: Record<string, string> = {
    violet: "hover:shadow-violet-500/20",
    blue: "hover:shadow-blue-500/20",
    cyan: "hover:shadow-cyan-500/20",
    emerald: "hover:shadow-emerald-500/20",
    orange: "hover:shadow-orange-500/20",
    pink: "hover:shadow-pink-500/20",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
        hover &&
          "transition-all duration-300 hover:border-white/20 hover:bg-white/10",
        glow && `hover:shadow-xl ${glowColors[glowColor]}`,
        className,
      )}
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "outline";
}

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white/80 border-white/10",
    gradient:
      "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30",
    outline: "bg-transparent text-white/60 border-white/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white/80">{name}</span>
        <span className="text-white/50">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <motion.h2
        className="mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mx-auto max-w-2xl text-lg text-white/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </div>
  );
}

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
