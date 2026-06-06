import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/profile.jpg";
import Srinivasan from "../assets/Srinivasan_CV.pdf";

export default function Hero() {
    const scrollToProjects = () => {
        document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative overflow-hidden pt-24"
        >
            {/* Background Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300/20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-yellow-300 font-medium mb-4">
                         Welcome To My Portfolio
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Hi, I'm
                        <br />
                        <span className="text-yellow-300">
                            P. Srinivasan
                        </span>
                    </h1>

                    {/* Typing Animation */}
                    <div className="text-2xl md:text-3xl mt-5 font-semibold text-yellow-300">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                            ]}
                            speed={50}
                            cursor={true}
                            repeat={Infinity}
                        />
                    </div>
                    <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
                        Passionate developer focused on creating
                        responsive, modern and scalable web
                        applications using React, Node.js and
                        modern web technologies.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">

                        <button
                            onClick={scrollToProjects}
                            className="bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                        >
                            View Projects
                        </button>

                        <a
                            href={Srinivasan}
                            download
                            className="border-2 border-yellow-300 text-yellow-300 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition"
                        >
                            Download Resume
                        </a>

                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6 mt-8 text-3xl">

                        <a
                            href="https://github.com/Srinivasan-0731"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-yellow-300 hover:-translate-y-1 transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/srinivasan-p-9238a7271"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-yellow-300 hover:-translate-y-1 transition"
                        >
                            <FaLinkedin />
                        </a>

                        <span className="hover:text-yellow-300 hover:-translate-y-1 transition">
                            <FaCode />
                        </span>

                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4 mt-10">

                        <div className="bg-white/5 backdrop-blur-md border border-yellow-300/10 rounded-2xl p-4 text-center">
                            <h3 className="text-3xl font-bold text-yellow-300">
                                11+
                            </h3>
                            <p className="text-sm text-gray-400">
                                Skills
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md border border-yellow-300/10 rounded-2xl p-4 text-center">
                            <h3 className="text-3xl font-bold text-yellow-300">
                                MERN
                            </h3>
                            <p className="text-sm text-gray-400">
                                Stack
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md border border-yellow-300/10 rounded-2xl p-4 text-center">
                            <h3 className="text-3xl font-bold text-yellow-300">
                                100%
                            </h3>
                            <p className="text-sm text-gray-400">
                                Learning
                            </p>
                        </div>

                    </div>

                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-yellow-300 blur-3xl opacity-20 rounded-full"></div>

                        {/* Floating Profile */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                            }}
                            className="relative border-4 border-yellow-300 rounded-3xl p-3 shadow-lg shadow-yellow-300/30"
                        >
                            <img
                                src={profilePic}
                                alt="P Srinivasan"
                                className="w-80 md:w-96 rounded-2xl object-cover"
                            />
                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}