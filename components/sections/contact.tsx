"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { SectionTitle, GlassCard } from "@/components/ui/glass-card";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion-wrapper";
import { useThemeStore } from "@/lib/store";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Download,
  Heart,
} from "lucide-react";

export function ContactSection() {
  const { isDark } = useThemeStore();

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin,
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ho Chi Minh City, Vietnam",
      href: "#",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's discuss how I can contribute to your next project"
        />

        <StaggerContainer
          className="grid gap-6 md:grid-cols-2"
          staggerDelay={0.1}
        >
          {contactItems.map((item) => (
            <StaggerItem key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <GlassCard glow className="group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-sm ${isDark ? "text-white/50" : "text-slate-500"}`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`font-medium transition-colors ${
                          isDark
                            ? "text-white group-hover:text-violet-300"
                            : "text-slate-900 group-hover:text-violet-600"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                    <Send
                      className={`h-5 w-5 transition-all duration-300 group-hover:translate-x-1 ${
                        isDark
                          ? "text-white/30 group-hover:text-violet-400"
                          : "text-slate-300 group-hover:text-violet-500"
                      }`}
                    />
                  </div>
                </GlassCard>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Buttons */}
        <MotionWrapper variant="fadeInUp" delay={0.4} className="mt-12">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="h-5 w-5" />
              Hire Me
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="/me/cv.pdf"
              download="Nguyen Hoang Nam - FE Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 rounded-full border px-8 py-4 font-medium backdrop-blur-sm transition-all duration-300 ${
                isDark
                  ? "border-white/20 bg-white/5 text-white hover:border-violet-500/50 hover:bg-violet-500/10"
                  : "border-slate-300 bg-white/70 text-slate-700 shadow-sm hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-5 w-5" />
              Download CV
            </motion.a>
          </div>
        </MotionWrapper>

        {/* Footer */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div
            className={`mb-4 h-px w-full bg-gradient-to-r from-transparent to-transparent ${
              isDark ? "via-white/10" : "via-slate-200"
            }`}
          />
          <p
            className={`flex items-center justify-center gap-2 text-sm ${isDark ? "text-white/40" : "text-slate-500"}`}
          >
            Made with <Heart className="h-4 w-4 text-pink-500" /> by Nguyen
            Hoang Nam
          </p>
          <p
            className={`mt-2 text-xs ${isDark ? "text-white/30" : "text-slate-400"}`}
          >
            Built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion &
            Zustand
          </p>
        </motion.div>
      </div>
    </section>
  );
}
