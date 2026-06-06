import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">
          Contact Me
        </h2>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* Left Side */}
          <div className="space-y-6">

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="mailto:yourmail@gmail.com"
              className="
              flex items-center gap-4
              bg-white/5
              backdrop-blur-md
              border border-yellow-300/10
              rounded-3xl
              p-6
              "
            >
              <FaEnvelope className="text-yellow-300 text-3xl" />
              <div>
                <h3>Email</h3>
                <p className="text-gray-400">
                  sp2392546@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="https://github.com/Srinivasan-0731"
              target="_blank"
              rel="noreferrer"
              className="
              flex items-center gap-4
              bg-white/5
              backdrop-blur-md
              border border-yellow-300/10
              rounded-3xl
              p-6
              "
            >
              <FaGithub className="text-yellow-300 text-3xl" />
              <div>
                <h3>GitHub</h3>
                <p className="text-gray-400">
                  Srinivasan-0731
                </p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="https://www.linkedin.com/in/srinivasan-p-9238a7271"
              target="_blank"
              rel="noreferrer"
              className="
              flex items-center gap-4
              bg-white/5
              backdrop-blur-md
              border border-yellow-300/10
              rounded-3xl
              p-6
              "
            >
              <FaLinkedin className="text-yellow-300 text-3xl" />
              <div>
                <h3>LinkedIn</h3>
                <p className="text-gray-400">
                  Connect with me
                </p>
              </div>
            </motion.a>

          </div>

          {/* Right Side Form */}
          <motion.form
            whileHover={{ scale: 1.01 }}
            className="
            bg-white/5
            backdrop-blur-md
            border border-yellow-300/10
            rounded-3xl
            p-8
            space-y-4
            "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full p-4 rounded-xl
              bg-[#120a30]
              outline-none
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
              w-full p-4 rounded-xl
              bg-[#120a30]
              outline-none
              "
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="
              w-full p-4 rounded-xl
              bg-[#120a30]
              outline-none
              "
            />

            <button
              className="
              bg-yellow-300
              text-black
              px-8 py-3
              rounded-full
              font-semibold
              hover:scale-105
              transition
              "
            >
              Send Message
            </button>
          </motion.form>

        </div>

      </motion.div>

    </section>
  );
}