"use client";

import { motion } from "framer-motion";
import { education, languages, hobbies } from "@/lib/data";
import { SectionTitle, GlassCard } from "@/components/ui/glass-card";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { useThemeStore } from "@/lib/store";
import { GraduationCap, Calendar, Languages, Music, Plane } from "lucide-react";

export function EducationSection() {
  const { isDark } = useThemeStore();

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
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                    isDark
                      ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
                      : "bg-gradient-to-br from-blue-100 to-cyan-100"
                  }`}
                >
                  <GraduationCap
                    className={`h-8 w-8 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    Education
                  </h3>
                  <p className={isDark ? "text-white/50" : "text-slate-500"}>
                    Academic Background
                  </p>
                </div>
              </div>

              <div
                className={`rounded-xl border p-6 ${
                  isDark
                    ? "border-white/10 bg-white/5"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <h4
                  className={`mb-2 text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  {education.institution}
                </h4>
                <p
                  className={`mb-4 ${isDark ? "text-violet-400" : "text-violet-600"}`}
                >
                  {education.degree}
                </p>
                <div
                  className={`flex items-center gap-2 text-sm ${isDark ? "text-white/50" : "text-slate-500"}`}
                >
                  <Calendar className="h-4 w-4" />
                  {education.period}
                </div>
              </div>

              {/* Decorative element */}
              <motion.div
                className={`mt-6 h-px w-full bg-gradient-to-r from-transparent to-transparent ${
                  isDark ? "via-blue-500/30" : "via-blue-400/40"
                }`}
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
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isDark
                        ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
                        : "bg-gradient-to-br from-emerald-100 to-teal-100"
                    }`}
                  >
                    <Languages
                      className={`h-5 w-5 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    Languages
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <motion.span
                      key={lang}
                      className={`rounded-full border px-4 py-2 ${
                        isDark
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                          : "border-emerald-300 bg-emerald-100 text-emerald-700"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {lang}
                    </motion.span>
                  ))}
                  <motion.span
                    className={`rounded-full border px-4 py-2 ${
                      isDark
                        ? "border-white/20 bg-white/5 text-white/60"
                        : "border-slate-200 bg-slate-100 text-slate-600"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Vietnamese (Native)
                  </motion.span>
                </div>
              </GlassCard>

              {/* Hobbies */}
              <GlassCard glow glowColor="pink" className="flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isDark
                        ? "bg-gradient-to-br from-pink-500/20 to-rose-500/20"
                        : "bg-gradient-to-br from-pink-100 to-rose-100"
                    }`}
                  >
                    <Music
                      className={`h-5 w-5 ${isDark ? "text-pink-400" : "text-pink-600"}`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    Hobbies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {hobbies.map((hobby) => {
                    const Icon = hobbyIcons[hobby] || Music;
                    return (
                      <motion.div
                        key={hobby}
                        className={`flex items-center gap-2 rounded-xl border px-4 py-3 ${
                          isDark
                            ? "border-white/10 bg-white/5"
                            : "border-slate-200 bg-slate-50"
                        }`}
                        whileHover={{
                          scale: 1.05,
                          borderColor: isDark
                            ? "rgba(236, 72, 153, 0.3)"
                            : "rgba(236, 72, 153, 0.5)",
                          backgroundColor: isDark
                            ? "rgba(236, 72, 153, 0.1)"
                            : "rgba(236, 72, 153, 0.05)",
                        }}
                      >
                        <Icon
                          className={`h-5 w-5 ${isDark ? "text-pink-400" : "text-pink-500"}`}
                        />
                        <span
                          className={
                            isDark ? "text-white/80" : "text-slate-700"
                          }
                        >
                          {hobby}
                        </span>
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
