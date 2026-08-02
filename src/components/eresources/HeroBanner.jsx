import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBookOpen,
  FaLaptopCode,
  FaVideo,
  FaFilePdf,
} from "react-icons/fa";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white">

      {/* Floating Background Icons */}

      <div className="absolute inset-0 opacity-10">

        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-12 top-12 text-8xl"
        >
          <FaBookOpen />
        </motion.div>

        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute right-16 top-24 text-7xl"
        >
          <FaLaptopCode />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-1/3 bottom-10 text-6xl"
        >
          <FaFilePdf />
        </motion.div>

        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute right-1/4 bottom-20 text-6xl"
        >
          <FaVideo />
        </motion.div>

      </div>

      {/* Hero Content */}

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <div className="flex justify-center">

            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-xl">

              <FaGraduationCap className="text-6xl text-yellow-300" />

            </div>

          </div>

          <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold">

            E-Resources Hub

          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">

            Department of Computer Science & Engineering (Data Science)

          </p>

          <p className="mt-3 text-lg text-blue-200 max-w-3xl mx-auto">

            Access Notes, PPTs, Lab Manuals, Video Lectures, Reference Books, Previous Question Papers and Assignments for every semester.

          </p>

          {/* Feature Badges */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <span className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
              📄 Notes
            </span>

            <span className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
              📊 PPT Slides
            </span>

            <span className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
              🧪 Lab Manuals
            </span>

            <span className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
              🎥 Video Lectures
            </span>

            <span className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
              📚 Reference Books
            </span>

            <span className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
              📝 Previous Papers
            </span>

          </div>

        </motion.div>

      </div>

      {/* Bottom Wave */}

      <svg
        className="block w-full"
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f8fafc"
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L0,120Z"
        />
      </svg>

    </section>
  );
}