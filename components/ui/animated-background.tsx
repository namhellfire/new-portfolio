"use client";

import { motion } from "framer-motion";
import { useThemeStore } from "@/lib/store";

export function AnimatedBackground() {
  const { isDark } = useThemeStore();

  if (!isDark) {
    return <AnimatedBackgroundLight />;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-600/30 to-purple-600/20 blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-600/25 to-cyan-600/15 blur-[120px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-600/20 to-violet-600/10 blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(at 40% 20%, hsla(280, 100%, 60%, 0.1) 0px, transparent 50%),
                           radial-gradient(at 80% 0%, hsla(220, 100%, 60%, 0.1) 0px, transparent 50%),
                           radial-gradient(at 0% 50%, hsla(200, 100%, 60%, 0.1) 0px, transparent 50%),
                           radial-gradient(at 80% 50%, hsla(260, 100%, 60%, 0.1) 0px, transparent 50%),
                           radial-gradient(at 0% 100%, hsla(180, 100%, 60%, 0.1) 0px, transparent 50%),
                           radial-gradient(at 80% 100%, hsla(300, 100%, 60%, 0.1) 0px, transparent 50%)`,
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}

function AnimatedBackgroundLight() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500">
      {/* Base gradient - Light */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-violet-50/30" />

      {/* Animated gradient orbs - softer for light mode */}
      <motion.div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-300/40 to-purple-300/30 blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-300/30 to-cyan-300/20 blur-[120px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-200/30 to-violet-200/20 blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern - Light */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99,102,241,.15) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
