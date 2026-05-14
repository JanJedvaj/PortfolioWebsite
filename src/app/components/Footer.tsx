import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-sm text-gray-600" style={{ fontWeight: 300 }}>
          © {new Date().getFullYear()} Jan Jedvaj. Designed with care.
        </p>
      </motion.div>
    </footer>
  );
}
