import { motion } from "motion/react";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", logo: `${DI}/javascript/javascript-original.svg` },
      { name: "TypeScript", logo: `${DI}/typescript/typescript-original.svg` },
      { name: "HTML5",      logo: `${DI}/html5/html5-original.svg` },
      { name: "CSS3",       logo: `${DI}/css3/css3-original.svg` },
      { name: "Java",       logo: `${DI}/java/java-original.svg` },
      { name: "C#",         logo: `${DI}/csharp/csharp-original.svg` },
      { name: "Python",     logo: `${DI}/python/python-original.svg` },
      { name: "C++",        logo: `${DI}/cplusplus/cplusplus-original.svg` },
      { name: "Swift",      logo: `${DI}/swift/swift-original.svg` },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React",        logo: `${DI}/react/react-original.svg` },
      { name: "React Native", logo: `${DI}/react/react-original.svg` },
      { name: "Next.js",      logo: `${DI}/nextjs/nextjs-original.svg` },
      { name: "Angular",      logo: `${DI}/angular/angular-original.svg` },
      { name: "Vue.js",       logo: `${DI}/vuejs/vuejs-original.svg` },
      { name: "Tailwind CSS", logo: `${DI}/tailwindcss/tailwindcss-original.svg` },
      { name: "Node.js",      logo: `${DI}/nodejs/nodejs-original.svg` },
      { name: ".NET",         logo: `${DI}/dotnetcore/dotnetcore-original.svg` },
      { name: "Spring Boot",  logo: `${DI}/spring/spring-original.svg` },
      { name: "Vite",         logo: `${DI}/vitejs/vitejs-original.svg` },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQL Server",  logo: `${DI}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
      { name: "PostgreSQL",  logo: `${DI}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git",            logo: `${DI}/git/git-original.svg` },
      { name: "GitHub",         logo: `${DI}/github/github-original.svg` },
      { name: "Docker",         logo: `${DI}/docker/docker-original.svg` },
      { name: "Azure",          logo: `${DI}/azure/azure-original.svg` },
      { name: "Figma",          logo: `${DI}/figma/figma-original.svg` },
      { name: "Jira",           logo: `${DI}/jira/jira-original.svg` },
      { name: "Postman",        logo: `${DI}/postman/postman-original.svg` },
      { name: "Swagger",        logo: `${DI}/swagger/swagger-original.svg` },
      { name: "VS Code",        logo: `${DI}/vscode/vscode-original.svg` },
      { name: "Visual Studio",  logo: `${DI}/visualstudio/visualstudio-plain.svg` },
      { name: "IntelliJ IDEA",  logo: `${DI}/intellij/intellij-original.svg` },
      { name: "Webpack",        logo: `${DI}/webpack/webpack-original.svg` },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl mb-16 text-center" style={{ fontWeight: 700 }}>
            Tech Stack
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIndex * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 text-center" style={{ fontWeight: 600 }}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, rotateX: 45 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.06 + index * 0.03,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -6,
                      rotateX: -10,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    className="flex items-center gap-2 backdrop-blur-xl bg-white/70 border border-white/40 rounded-full px-6 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,113,227,0.12)] transition-shadow cursor-default"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img src={skill.logo} alt={skill.name} className="w-4 h-4 object-contain" />
                    <span className="text-sm" style={{ fontWeight: 500 }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
