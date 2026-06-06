import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "MySQL", level: 75 },
  { name: "Git", level: 85 },
  { name: "GitHub", level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">
        My Skills
      </h2>

      <div className="max-w-5xl mx-auto space-y-6">

        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-yellow-300/10"
          >
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="h-full bg-yellow-300 rounded-full"
              />

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}