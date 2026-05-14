import { motion } from "motion/react";
import { MapPin, Briefcase, GraduationCap, Code } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Eviden", sublabel: "Satellite Comms Intern" },
  { icon: MapPin, label: "Zagreb", sublabel: "Croatia" },
  { icon: GraduationCap, label: "Algebra", sublabel: "Software Engineering" },
  { icon: Code, label: ".NET · React · Next.js · Swift", sublabel: "Current Focus" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl mb-16 text-center" style={{ fontWeight: 700 }}>
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
          >
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontWeight: 300 }}>
              Pursuing a Bachelor's degree in Computer Software Engineering at Sveučilište Algebra,
              with expected graduation in July 2026. Currently interning at Eviden as a Satellite
              Communications Systems Intern, developing foundational understanding of satellite
              communication systems and project management in the field.
              <br /><br />
              Previously contributed to network design strategy and incident response at Hrvatski
              Telekom, and provided administrative support at Ericsson Nikola Tesla. Proficient in
              software solution development and data analysis, with multiple Cisco CCNA certifications.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  rotateX: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow"
                style={{ transformStyle: "preserve-3d" }}
              >
                <stat.icon className="w-6 h-6 text-[#0071E3] mb-3" />
                <div className="text-lg" style={{ fontWeight: 600 }}>
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500" style={{ fontWeight: 300 }}>
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
