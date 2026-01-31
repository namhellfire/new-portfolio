"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useThemeStore } from "@/lib/store";

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
  const { isDark } = useThemeStore();

  const glowColorsDark: Record<string, string> = {
    violet: "hover:shadow-violet-500/20",
    blue: "hover:shadow-blue-500/20",
    cyan: "hover:shadow-cyan-500/20",
    emerald: "hover:shadow-emerald-500/20",
    orange: "hover:shadow-orange-500/20",
    pink: "hover:shadow-pink-500/20",
  };

  const glowColorsLight: Record<string, string> = {
    violet: "hover:shadow-violet-500/15",
    blue: "hover:shadow-blue-500/15",
    cyan: "hover:shadow-cyan-500/15",
    emerald: "hover:shadow-emerald-500/15",
    orange: "hover:shadow-orange-500/15",
    pink: "hover:shadow-pink-500/15",
  };

  const glowColors = isDark ? glowColorsDark : glowColorsLight;

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl p-6 backdrop-blur-xl transition-all duration-300",
        isDark
          ? "border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
          : "border border-slate-200/80 bg-white/70 shadow-sm hover:border-violet-300/50 hover:bg-white/90 hover:shadow-md",
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
  const { isDark } = useThemeStore();

  const variantsDark = {
    default: "bg-white/10 text-white/80 border-white/10",
    gradient:
      "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30",
    outline: "bg-transparent text-white/60 border-white/20",
  };

  const variantsLight = {
    default: "bg-slate-100 text-slate-700 border-slate-200",
    gradient:
      "bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-200",
    outline: "bg-transparent text-slate-600 border-slate-300",
  };

  const variants = isDark ? variantsDark : variantsLight;

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
  const { isDark } = useThemeStore();

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className={isDark ? "text-white/80" : "text-slate-700"}>
          {name}
        </span>
        <span className={isDark ? "text-white/50" : "text-slate-500"}>
          {level}%
        </span>
      </div>
      <div
        className={cn(
          "h-2 overflow-hidden rounded-full",
          isDark ? "bg-white/10" : "bg-slate-200",
        )}
      >
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
  const { isDark } = useThemeStore();

  return (
    <div className={cn("mb-12 text-center", className)}>
      <motion.h2
        className={cn(
          "mb-4 text-4xl font-bold md:text-5xl",
          isDark
            ? "bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
            : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent",
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={cn(
            "mx-auto max-w-2xl text-lg",
            isDark ? "text-white/60" : "text-slate-600",
          )}
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
        "bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
