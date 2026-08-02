import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBookOpen,
  FaFolderOpen,
  FaUsers,
} from "react-icons/fa";

const statistics = [
  {
    title: "Semesters",
    value: "8",
    icon: <FaGraduationCap />,
    color: "from-blue-600 to-blue-800",
  },
  {
    title: "Subjects",
    value: "29+",
    icon: <FaBookOpen />,
    color: "from-green-600 to-emerald-700",
  },
  {
    title: "Learning Resources",
    value: "500+",
    icon: <FaFolderOpen />,
    color: "from-purple-600 to-pink-600",
  },
  {
    title: "Student Access",
    value: "24 × 7",
    icon: <FaUsers />,
    color: "from-orange-500 to-red-600",
  },
];

export default function Statistics() {
  return (
    <section className="py-10">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {statistics.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className={`
              rounded-2xl
              text-white
              shadow-xl
              bg-gradient-to-r
              ${item.color}
            `}
          >

            <div className="p-8 text-center">

              <div className="text-5xl mb-4 flex justify-center">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold">
                {item.value}
              </h2>

              <p className="mt-3 text-lg">
                {item.title}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}