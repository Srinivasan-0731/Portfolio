import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import movieBooking from "../assets/movie-booking.png";
import tourist from "../assets/tourist-booking.png";
import furniture from "../assets/furniture-booking.png";

const projects = [
  {
    title: "Movie Booking App",
    image: movieBooking,
    description:
      "A full-stack MERN movie ticket booking application with user authentication, movie browsing, seat selection, payment integration, and online ticket reservation.",

    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Razorpay",
      "Tailwind CSS",
    ],

    frontendGithub:
      "https://github.com/Srinivasan-0731/Movie-Booking-Forntend",

    backendGithub:
      "https://github.com/Srinivasan-0731/Movie-Booking-System-Backend",

    demo: "https://eclectic-croquembouche-47dc36.netlify.app/",
  },

  {
    title: "Tourist Management System",
    image: tourist,
    description:
      "A MERN-based tourist management platform that allows users to search destinations, view detailed information, manage bookings, and access travel guides.",

    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "TMDB API",
      "Tailwind CSS",
    ],

    frontendGithub:
      "https://github.com/Srinivasan-0731/Tourist_Mnagemant_System_Forntend",

    backendGithub:
      "https://github.com/Srinivasan-0731/Tourist_Management_System_Backend",

    demo: "https://golden-fairy-7c23fe.netlify.app/",
  },

  {
    title: "Furniture Management System",
    image: furniture,
    description:
      "A MERN-based furniture management system that allows users to browse products, manage inventory, and process orders with secure authentication and payment integration.",

    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Tailwind CSS",
    ],

    frontendGithub:
      "https://github.com/Srinivasan-0731/Furniture_Manegement_System_Frontend",

    backendGithub:
      "https://github.com/Srinivasan-0731/Furniture_Management_System_Backend",

    demo: "https://deluxe-frangollo-3462d8.netlify.app/",
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
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
              {/* Image */}
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

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1
                        text-sm
                        rounded-full
                        bg-yellow-300/10
                        border border-yellow-300/20
                        text-yellow-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2">
                  <a
                    href={project.frontendGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      border border-yellow-300
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
                    Frontend
                  </a>

                  <a
                    href={project.backendGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      border border-yellow-300
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
                    Backend
                  </a>

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
                    Live Demo
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