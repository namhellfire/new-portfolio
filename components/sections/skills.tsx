"use client";

import { motion } from "framer-motion";
import { technicalSkills } from "@/lib/data";
import { SectionTitle, SkillBar, GlassCard } from "@/components/ui/glass-card";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { useThemeStore } from "@/lib/store";
import {
  Code2,
  Palette,
  BarChart3,
  Sparkles,
  Server,
  Database,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Frontend Core": Code2,
  "UI Frameworks": Palette,
  "Data Visualization": BarChart3,
  "AI & Productivity": Sparkles,
  "Backend & Mobile": Server,
  "Databases & Cloud": Database,
};

const categoryColors: Record<string, string> = {
  "Frontend Core": "from-violet-500 to-purple-500",
  "UI Frameworks": "from-pink-500 to-rose-500",
  "Data Visualization": "from-blue-500 to-cyan-500",
  "AI & Productivity": "from-amber-500 to-orange-500",
  "Backend & Mobile": "from-emerald-500 to-teal-500",
  "Databases & Cloud": "from-indigo-500 to-violet-500",
};

export function SkillsSection() {
  const { isDark } = useThemeStore();

  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I work with on a daily basis"
        />

        <StaggerContainer
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {Object.entries(technicalSkills).map(
            ([category, skills], categoryIndex) => {
              const Icon = categoryIcons[category] || Code2;
              const gradient =
                categoryColors[category] || "from-violet-500 to-purple-500";

              return (
                <StaggerItem key={category}>
                  <GlassCard className="h-full" glow>
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} ${isDark ? "bg-opacity-20" : ""}`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3
                        className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                      >
                        {category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {skills.map((skill, skillIndex) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          delay={categoryIndex * 0.1 + skillIndex * 0.05}
                        />
                      ))}
                    </div>
                  </GlassCard>
                </StaggerItem>
              );
            },
          )}
        </StaggerContainer>

        {/* Floating tech logos decoration */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind",
            "Node.js",
            "MongoDB",
            "AWS",
            "Git",
            "Cursor AI",
            "Copilot",
          ].map((tech, index) => (
            <motion.div
              key={tech}
              className={`rounded-xl border px-4 py-2 text-sm backdrop-blur-sm ${
                isDark
                  ? "border-white/10 bg-white/5 text-white/60"
                  : "border-slate-200 bg-white/70 text-slate-600 shadow-sm text-black"
              }`}
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(139, 92, 246, 0.5)",
                color: isDark ? "rgba(255, 255, 255, 0.9)" : "rgb(91, 33, 182)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
