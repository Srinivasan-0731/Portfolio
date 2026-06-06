import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#07021d]/80 backdrop-blur-md border-b border-yellow-300/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-3xl font-bold text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]">
                    PS
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="text-white hover:text-yellow-300 transition duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>


                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-yellow-300 text-2xl"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#0d0627] border-t border-yellow-300/10">
                    <ul className="flex flex-col items-center gap-5 py-6">

                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-white hover:text-yellow-300 transition"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <a
                            href="/resume.pdf"
                            download
                            className="bg-yellow-300 text-black px-5 py-2 rounded-full font-semibold"
                        >
                            Download Resume
                        </a>

                    </ul>
                </div>
            )}
        </nav>
    );
}