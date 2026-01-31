"use client";

import { motion } from "framer-motion";
import { education, languages, hobbies } from "@/lib/data";
import { SectionTitle, GlassCard } from "@/components/ui/glass-card";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { GraduationCap, Calendar, Languages, Music, Plane } from "lucide-react";

export function EducationSection() {
  const hobbyIcons: Record<string, React.ElementType> = {
    Music: Music,
    Travel: Plane,
  };

  return (
    <section id="education" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Education & More"
          subtitle="Academic background and personal interests"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education Card */}
          <MotionWrapper variant="fadeInLeft">
            <GlassCard className="h-full" glow glowColor="blue">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <GraduationCap className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-white/50">Academic Background</p>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="mb-2 text-lg font-semibold text-white">
                  {education.institution}
                </h4>
                <p className="mb-4 text-violet-400">{education.degree}</p>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Calendar className="h-4 w-4" />
                  {education.period}
                </div>
              </div>

              {/* Decorative element */}
              <motion.div
                className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </GlassCard>
          </MotionWrapper>

          {/* Languages & Hobbies */}
          <MotionWrapper variant="fadeInRight">
            <div className="flex h-full flex-col gap-6">
              {/* Languages */}
              <GlassCard glow glowColor="emerald">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <Languages className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Languages
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <motion.span
                      key={lang}
                      className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {lang}
                    </motion.span>
                  ))}
                  <motion.span
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white/60"
                    whileHover={{ scale: 1.05 }}
                  >
                    Vietnamese (Native)
                  </motion.span>
                </div>
              </GlassCard>

              {/* Hobbies */}
              <GlassCard glow glowColor="pink" className="flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20">
                    <Music className="h-5 w-5 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Hobbies</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {hobbies.map((hobby) => {
                    const Icon = hobbyIcons[hobby] || Music;
                    return (
                      <motion.div
                        key={hobby}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                        whileHover={{
                          scale: 1.05,
                          borderColor: "rgba(236, 72, 153, 0.3)",
                          backgroundColor: "rgba(236, 72, 153, 0.1)",
                        }}
                      >
                        <Icon className="h-5 w-5 text-pink-400" />
                        <span className="text-white/80">{hobby}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </GlassCard>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
