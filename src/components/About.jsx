import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* About Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="
            bg-white/5
            backdrop-blur-md
            border border-yellow-300/10
            rounded-3xl
            p-8
            shadow-lg
            "
          >
            <FaLaptopCode className="text-4xl text-yellow-300 mb-4" />

            <h3 className="text-2xl font-semibold mb-4">
              Who Am I?
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I'm P. Srinivasan, a Frontend Developer
              and MERN Stack enthusiast passionate
              about creating modern, responsive and
              user-friendly web applications.
            </p>
          </motion.div>

          {/* Career Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="
            bg-white/5
            backdrop-blur-md
            border border-yellow-300/10
            rounded-3xl
            p-8
            shadow-lg
            "
          >
            <FaUserGraduate className="text-4xl text-yellow-300 mb-4" />

            <h3 className="text-2xl font-semibold mb-4">
              Career Objective
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Looking for opportunities where I can
              contribute, learn and grow as a
              Frontend/MERN Stack Developer while
              building impactful digital products.
            </p>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}