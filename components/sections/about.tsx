"use client";

import { motion } from "framer-motion";
import { professionalProfile, personalInfo } from "@/lib/data";
import { GlassCard, SectionTitle } from "@/components/ui/glass-card";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { Sparkles, Target, Rocket } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Sparkles,
      title: "7+ Years Experience",
      description:
        "Building scalable web applications with React, Next.js, and TypeScript",
    },
    {
      icon: Target,
      title: "Tech Leadership",
      description:
        "Led frontend architecture for Max Bank and large-scale e-commerce at Tiki",
    },
    {
      icon: Rocket,
      title: "AI-Powered Development",
      description:
        "Expert in leveraging AI tools to maximize productivity and code quality",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about creating exceptional digital experiences"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Profile text */}
          <MotionWrapper
            variant="fadeInLeft"
            className="flex flex-col justify-center"
          >
            <GlassCard hover={false} className="h-full">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Professional Profile
              </h3>
              <p className="leading-relaxed text-white/70">
                {professionalProfile}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "AI Tools",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300 border border-violet-500/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </MotionWrapper>

          {/* Highlights */}
          <div className="flex flex-col gap-4">
            {highlights.map((item, index) => (
              <MotionWrapper
                key={item.title}
                variant="fadeInRight"
                delay={index * 0.1}
              >
                <GlassCard glow glowColor="violet">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                      <item.icon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </MotionWrapper>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: "7+", label: "Years Experience" },
            { value: "5+", label: "Companies" },
            { value: "20+", label: "Projects" },
            { value: "10+", label: "Technologies" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(139, 92, 246, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="mb-2 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
