"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionTitle, GlassCard, Badge } from "@/components/ui/glass-card";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { useThemeStore } from "@/lib/store";
import { Building2, Calendar, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  const { isDark } = useThemeStore();

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Professional Experience"
          subtitle="My journey through the tech industry"
        />

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className={`absolute left-8 top-0 hidden h-full w-px md:block ${
              isDark
                ? "bg-gradient-to-b from-violet-500/50 via-purple-500/30 to-transparent"
                : "bg-gradient-to-b from-violet-400/60 via-purple-400/40 to-transparent"
            }`}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <MotionWrapper
                key={exp.id}
                variant="fadeInUp"
                delay={index * 0.15}
              >
                <div className="relative md:pl-20">
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-6 top-8 hidden h-4 w-4 rounded-full border-2 md:block ${
                      isDark
                        ? "border-violet-500 bg-slate-900"
                        : "border-violet-500 bg-white"
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                  />

                  {/* Glow effect on dot */}
                  <motion.div
                    className="absolute left-6 top-8 hidden h-4 w-4 rounded-full bg-violet-500/50 blur-sm md:block"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.5, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                  />

                  <GlassCard glow glowColor="violet" className="group">
                    {/* Header */}
                    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${exp.color}`}
                          >
                            <Building2 className="h-4 w-4 text-white" />
                          </div>
                          <h3
                            className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
                          >
                            {exp.company}
                          </h3>
                        </div>
                        <p
                          className={`text-lg font-medium ${isDark ? "text-violet-400" : "text-violet-600"}`}
                        >
                          {exp.role}
                        </p>
                      </div>
                      <div
                        className={`flex items-center gap-2 text-sm ${isDark ? "text-white/50" : "text-slate-500"}`}
                      >
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="mb-6 space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          className={`flex gap-3 ${isDark ? "text-white/70" : "text-slate-600"}`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.15 + i * 0.1 + 0.3,
                          }}
                        >
                          <ChevronRight
                            className={`mt-1 h-4 w-4 shrink-0 ${isDark ? "text-violet-400" : "text-violet-500"}`}
                          />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="gradient">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
