import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated gradient orb background */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(0, 113, 227, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile photo on glass card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-8"
        >
          <div className="relative">
            <div
              className="w-32 h-32 rounded-full mx-auto overflow-hidden backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-1"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl">
                JJ
              </div>
            </div>
          </div>
        </motion.div>

        {/* Headline with letter-by-letter animation */}
        <h1
          className="text-6xl md:text-7xl mb-6 tracking-tight"
          style={{ fontWeight: 700, lineHeight: 1.1 }}
        >
          {/* Animate each character */}
          {"Hi, I'm Jan Jedva".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.2 + index * 0.05,
                ease: "easeOut",
              }}
              className="inline-block"
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
          {/* Last j with special dot animation */}
          <span className="inline-block relative">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.2 + "Hi, I'm Jan Jedva".length * 0.05,
                ease: "easeOut",
              }}
              className="inline-block relative"
            >
              {/* j stem without dot using Unicode character */}
              <span className="relative inline-block">
                ȷ
                {/* Animated dot that bounces in */}
                <motion.span
                  initial={{ opacity: 0, scale: 0, y: -30, rotate: -180 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotate: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + ("Hi, I'm Jan Jedva".length + 1) * 0.05,
                    ease: [0.34, 1.56, 0.64, 1],
                    scale: {
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }
                  }}
                  className="absolute"
                  style={{
                    top: "0.08em",
                    left: "0.06em",
                    width: "0.15em",
                    height: "0.15em",
                    borderRadius: "50%",
                    background: "#000",
                  }}
                />
              </span>
            </motion.span>
          </span>
        </h1>

        {/* Subtitle - appears after name is complete */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
          style={{ fontWeight: 300 }}
        >
          Building software with .NET · React · Azure · Next.js
        </motion.p>

        {/* CTA Buttons - appear after subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "instant" })}
            className="group px-8 py-4 rounded-full backdrop-blur-xl bg-[#0071E3] text-white border border-white/20 shadow-[0_8px_32px_rgba(0,113,227,0.15)] transition-all hover:shadow-[0_12px_40px_rgba(0,113,227,0.25)] flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:bg-white/90 transition-all flex items-center justify-center gap-2"
          >
            Get In Touch
            <Download className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Scroll indicator - centered below the buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.8 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
