import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative pt-20 pb-10 px-6 border-t border-yellow-300/10">

      {/* Glow */}
      <div className="absolute inset-0 bg-yellow-300/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-yellow-300">P.</span>
              Srinivasan
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Frontend Developer & MERN Stack Enthusiast
              focused on building modern, responsive and
              user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-yellow-300 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-yellow-300 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-yellow-300 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-yellow-300 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-300 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              Connect
            </h3>

            <div className="flex gap-4 text-2xl">

              <a
                href="https://github.com/Srinivasan-0731"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                flex items-center justify-center
                rounded-full
                bg-white/5
                border border-yellow-300/10
                hover:bg-yellow-300
                hover:text-black
                transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/srinivasan-p-9238a7271"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                flex items-center justify-center
                rounded-full
                bg-white/5
                border border-yellow-300/10
                hover:bg-yellow-300
                hover:text-black
                transition
                "
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-yellow-300/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} P. Srinivasan.
            All Rights Reserved.
          </p>

          {/* Scroll Top Button */}
          <button
            onClick={scrollTop}
            className="
            bg-yellow-300
            text-black
            w-12 h-12
            rounded-full
            flex items-center justify-center
            hover:scale-110
            transition
            "
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}