import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import movieBooking from "../assets/movie-booking.png";
import movieSearch from "../assets/movie-search.png";
import ecommerce from "../assets/ecommerce.png";

const projects = [
  {
    title: "Movie Booking App",
    image: movieBooking,
    description:
      "A full-stack MERN movie ticket booking application with secure authentication, movie browsing, seat selection and online ticket reservation.",
    github: "https://github.com/Srinivasan-0731/Movie-Booking-Frontend",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay", "tailwindcss"],
    demo: "https://eclectic-croquembouche-47dc36.netlify.app/",
  },

  {
    title: "Movie Search App",
    image: movieSearch,
    description:
      "A simple movie search application with detailed information and trailers.",
    github: "https://github.com/Srinivasan-0731/Movie-Search-App-React",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "tailwindcss"],
    demo: "https://elaborate-sorbet-5b4e55.netlify.app/",
  },

  {
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "Responsive shopping website with cart functionality and React Router.",
    techStack: ["React.js", "React Router", "tailwindcss"],
    github: "https://github.com/Srinivasan-0731/Ecommerce_shopping-_cart",
    demo: "https://dancing-conkies-4186bb.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex justify-between items-center mb-12">

          <div>
            <p className="text-yellow-300 uppercase tracking-wider text-sm">
              Recent Projects
            </p>

            <h2 className="text-4xl font-bold mt-2">
              My Projects
            </h2>
          </div>

          <a
            href="https://github.com/Srinivasan-0731"
            target="_blank"
            rel="noreferrer"
            className="
            hidden md:block
            bg-yellow-300
            text-black
            px-6 py-3
            rounded-xl
            font-semibold
            hover:scale-105
            transition
            "
          >
            Visit My GitHub
          </a>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
              bg-white/5
              backdrop-blur-md
              border border-yellow-300/10
              rounded-3xl
              overflow-hidden
              hover:border-yellow-300/40
              transition-all
              duration-300
              "
            >

              {/* Project Image */}
              <div className="overflow-hidden h-56">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition
                  duration-500
                  "
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex gap-3">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex items-center gap-2
                    bg-yellow-300
                    text-black
                    px-4 py-2
                    rounded-xl
                    font-semibold
                    "
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex items-center gap-2
                    border
                    border-yellow-300
                    text-yellow-300
                    px-4 py-2
                    rounded-xl
                    font-semibold
                    hover:bg-yellow-300
                    hover:text-black
                    transition
                    "
                  >
                    <FaGithub />
                    Code
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}