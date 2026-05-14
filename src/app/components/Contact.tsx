import { motion } from "motion/react";
import { Mail, LucideGithub, LucideLinkedin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_7afmirm";
const EMAILJS_TEMPLATE_ID = "template_hkl65zc";
const EMAILJS_PUBLIC_KEY = "FhA60QX4TU5yXFuPI";

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:jan.jedvaj2@gmail.com", color: "#EA4335" },
  { icon: LucideGithub, label: "GitHub", href: "https://github.com/JanJedvaj", color: "#333" },
  { icon: LucideLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jan-jedvaj-625261236/", color: "#0A66C2" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl mb-6" style={{ fontWeight: 700 }}>
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600" style={{ fontWeight: 300 }}>
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center gap-4 mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.06,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{
                scale: 1.1,
                y: -6,
                rotateY: -10,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow group"
              aria-label={link.label}
              style={{ transformStyle: "preserve-3d" }}
            >
              <link.icon className="w-6 h-6 text-gray-700 group-hover:text-[#0071E3] transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/60 focus:border-[#0071E3] focus:outline-none focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/60 focus:border-[#0071E3] focus:outline-none focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-5 py-3 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/60 focus:border-[#0071E3] focus:outline-none focus:ring-2 focus:ring-[#0071E3]/20 transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
              className="w-full px-8 py-4 rounded-full bg-[#0071E3] text-white shadow-[0_8px_32px_rgba(0,113,227,0.2)] hover:shadow-[0_12px_40px_rgba(0,113,227,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ fontWeight: 600 }}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
              <Send className="w-5 h-5" />
            </motion.button>

            {status === "success" && (
              <p className="text-center text-sm text-green-600" style={{ fontWeight: 500 }}>
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-500" style={{ fontWeight: 500 }}>
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
