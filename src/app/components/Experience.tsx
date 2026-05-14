import { motion } from "motion/react";

const experiences = [
  {
    role: "Software Engineer Intern – Satellite Communications Systems",
    company: "Eviden",
    period: "Oct 2025 – Mar 2026 · 6 mos · Completed",
    location: "Zagreb, Croatia · Hybrid",
    description:
      "Completed a 6-month internship focused on satellite communication systems. Explored key components and industry standards, studied project management practices within satellite-related projects, and developed hands-on skills applying satellite communications data with real-world software tools.",
  },
  {
    role: "Activation of Property for Local Network Investments",
    company: "Hrvatski Telekom",
    period: "Nov 2022 – Feb 2024 · 1 yr 4 mos",
    location: "Zagreb, Croatia · Remote",
    description:
      "Contributed to network design strategy discussions, created efficient escalation processes for high-priority incidents, and collaborated with teams to manage networking projects with timely delivery.",
  },
  {
    role: "Administration Assistant",
    company: "Ericsson Nikola Tesla",
    period: "Aug 2022 – Nov 2022 · 4 mos",
    location: "Zagreb, Croatia · On-site",
    description:
      "Provided professional responses to customer inquiries, coordinated employee onboarding orientation sessions, and maintained accounting records.",
  },
  {
    role: "Sales Advisor Assistant",
    company: "Lacoste",
    period: "May 2022 – Aug 2022 · 4 mos",
    location: "Zagreb, Croatia · On-site",
    description:
      "Provided product knowledge to customers, built rapport to identify needs and drive sales, and collaborated with the team to achieve monthly sales goals.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl mb-16 text-center" style={{ fontWeight: 700 }}>
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#0071E3] via-[#0071E3]/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-[#0071E3] border-4 border-white shadow-lg" />

                {/* Experience card */}
                <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl" style={{ fontWeight: 600 }}>
                      {exp.role}
                    </h3>
                    <span className="text-sm text-gray-500" style={{ fontWeight: 500 }}>
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-[#0071E3] mb-1" style={{ fontWeight: 500 }}>
                    {exp.company}
                  </div>
                  <div className="text-xs text-gray-400 mb-3" style={{ fontWeight: 400 }}>
                    {exp.location}
                  </div>
                  <p className="text-gray-600" style={{ fontWeight: 300 }}>
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
