import { motion } from "framer-motion";

import cert1 from "../assets/certification1.jpg";
import cert2 from "../assets/certification2.jpg";
import cert3 from "../assets/certification3.jpg";
import cert4 from "../assets/certification4.jpg";
import cert5 from "../assets/certification5.jpg";
import cert6 from "../assets/certification6.jpg";
import cert7 from "../assets/certification7.jpg";

const certifications = [
  {
    title: "Certificate 1",
    image: cert1,
  },
  {
    title: "Certificate 2",
    image: cert2,
  },
  {
    title: "Certificate 3",
    image: cert3,
  },
  {
    title: "Certificate 4",
    image: cert4,
  },
  {
    title: "Certificate 5",
    image: cert5,
  },
  {
    title: "Certificate 6",
    image: cert6,
  },
  {
    title: "Certificate 7",
    image: cert7,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-yellow-300 uppercase tracking-wider text-sm">
            Achievements
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                bg-white/5
                backdrop-blur-md
                border border-yellow-300/10
                rounded-3xl
                overflow-hidden
                hover:border-yellow-300/40
                transition-all
              "
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {certificate.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}