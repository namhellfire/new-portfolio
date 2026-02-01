"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { GradientText } from "@/components/ui/glass-card";
import { useThemeStore } from "@/lib/store";

export function HeroSection() {
  const { isDark } = useThemeStore();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Animated avatar placeholder */}
        <motion.div
          className={`mx-auto mb-8 h-64 w-64 overflow-hidden rounded-full border-2 ${
            isDark
              ? "border-violet-500/50 shadow-lg shadow-violet-500/25"
              : "border-violet-400 shadow-lg shadow-violet-300/50"
          }`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Image
              src="/me/avatar.jpg"
              alt={personalInfo.name}
              width={256}
              height={256}
              className="h-full w-full object-cover"
              priority
              unoptimized
            />
          </motion.div>
        </motion.div>

        {/* Name with staggered animation */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.h1
            className={`mb-4 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {personalInfo.name.split(" ").map((word, i) => (
              <span key={i}>
                {i === personalInfo.name.split(" ").length - 1 ? (
                  <GradientText>{word}</GradientText>
                ) : (
                  word + " "
                )}
              </span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Title with typing effect */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span
            className={`inline-block rounded-full border px-6 py-2 text-lg font-medium backdrop-blur-sm md:text-xl ${
              isDark
                ? "border-violet-500/30 bg-violet-500/10 text-violet-300"
                : "border-violet-300 bg-violet-100/80 text-violet-700 shadow-sm"
            }`}
          >
            {personalInfo.title}
          </span>
        </motion.div>

        {/* Experience badge */}
        <motion.p
          className={`mb-8 text-xl md:text-2xl ${isDark ? "text-white/60" : "text-slate-600"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span
            className={`font-semibold ${isDark ? "text-violet-400" : "text-violet-600"}`}
          >
            {personalInfo.yearsOfExperience}+
          </span>{" "}
          Years of Professional Experience
        </motion.p>

        {/* Contact info pills */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm transition-all duration-300 ${
              isDark
                ? "border-white/10 bg-white/5 text-white/70 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                : "border-slate-200 bg-white/70 text-slate-600 shadow-sm hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
            }`}
          >
            <Mail
              className={`h-4 w-4 transition-transform group-hover:scale-110 ${isDark ? "text-violet-400" : "text-violet-500"}`}
            />
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm transition-all duration-300 ${
              isDark
                ? "border-white/10 bg-white/5 text-white/70 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                : "border-slate-200 bg-white/70 text-slate-600 shadow-sm hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
            }`}
          >
            <Phone
              className={`h-4 w-4 transition-transform group-hover:scale-110 ${isDark ? "text-violet-400" : "text-violet-500"}`}
            />
            {personalInfo.phone}
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm transition-all duration-300 ${
              isDark
                ? "border-white/10 bg-white/5 text-white/70 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                : "border-slate-200 bg-white/70 text-slate-600 shadow-sm hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
            }`}
          >
            <Linkedin
              className={`h-4 w-4 transition-transform group-hover:scale-110 ${isDark ? "text-violet-400" : "text-violet-500"}`}
            />
            LinkedIn
          </a>
        </motion.div>

        {/* Additional info */}
        <motion.div
          className={`flex flex-wrap justify-center gap-6 text-sm ${isDark ? "text-white/50" : "text-slate-500"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Ho Chi Minh City, Vietnam
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {personalInfo.dateOfBirth}
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-colors hover:cursor-pointer ${
            isDark
              ? "text-white/40 hover:text-violet-400"
              : "text-slate-400 hover:text-violet-500"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute left-10 top-1/4 h-px w-32 bg-gradient-to-r from-transparent to-transparent ${
            isDark ? "via-violet-500/50" : "via-violet-400/40"
          }`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.div
          className={`absolute right-10 top-1/3 h-px w-48 bg-gradient-to-r from-transparent to-transparent ${
            isDark ? "via-purple-500/50" : "via-purple-400/40"
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        />
        <motion.div
          className={`absolute bottom-1/4 left-20 h-32 w-px bg-gradient-to-b from-transparent to-transparent ${
            isDark ? "via-indigo-500/30" : "via-indigo-400/30"
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
        />
      </div>
    </section>
  );
}
