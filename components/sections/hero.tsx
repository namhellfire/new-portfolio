"use client";

import { motion } from "framer-motion";
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

export function HeroSection() {
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
          className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full border-2 border-violet-500/50 bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.span
            className="text-5xl font-bold text-violet-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </motion.span>
        </motion.div>

        {/* Name with staggered animation */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.h1
            className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
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
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-2 text-lg font-medium text-violet-300 backdrop-blur-sm md:text-xl">
            {personalInfo.title}
          </span>
        </motion.div>

        {/* Experience badge */}
        <motion.p
          className="mb-8 text-xl text-white/60 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="text-violet-400 font-semibold">
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
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
          >
            <Mail className="h-4 w-4 text-violet-400 transition-transform group-hover:scale-110" />
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
          >
            <Phone className="h-4 w-4 text-violet-400 transition-transform group-hover:scale-110" />
            {personalInfo.phone}
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
          >
            <Linkedin className="h-4 w-4 text-violet-400 transition-transform group-hover:scale-110" />
            LinkedIn
          </a>
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-sm text-white/50"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-violet-400"
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
          className="absolute left-10 top-1/4 h-px w-32 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.div
          className="absolute right-10 top-1/3 h-px w-48 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-20 h-32 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
        />
      </div>
    </section>
  );
}
