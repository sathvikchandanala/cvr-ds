import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import CM_216_217 from "../assets/CM_216_217.jpg";
import CM_218_220 from "../assets/CM_218_220.webp";
import CM103 from "../assets/CM103.webp";
import { FaDesktop } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaMicrosoft } from "react-icons/fa";
import { SiOracle, SiLinux } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";
import { ArrowUp } from "lucide-react";

const labImages = [
  { src: CM103, location: "CM-103" },
  { src: CM_216_217, location: "CM-216_217" },
  { src: CM_218_220, location: "CM-218_220" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function DepartmentLaboratories() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentLab, setCurrentLab] = useState(null);

  const openViewer = (lab) => {
    setCurrentLab(lab);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
    setCurrentLab(null);
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Nav />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center py-24 px-4 sm:px-8 lg:px-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
          Department Laboratories
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Explore our state-of-the-art laboratories, equipped with high-end systems and the latest software and hardware infrastructure.
        </p>
      </motion.div>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center"
        >
          {labImages.map((lab, index) => (
            <div
              key={index}
              onClick={() => openViewer(lab)}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white max-w-md mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={lab.src}
                  alt={`Lab ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{lab.location}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </section>


      <AnimatePresence>
        {viewerOpen && currentLab && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeViewer}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentLab.src}
                alt={currentLab.location}
                className="w-full h-auto max-h-[80vh] rounded-2xl object-contain"
              />
              <div className="absolute bottom-6 left-6 bg-blue-700 bg-opacity-70 text-white px-3 py-1.5 rounded-md backdrop-blur-sm text-sm font-semibold select-none">
                {currentLab.location}
              </div>
              <button
                onClick={closeViewer}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 text-2xl leading-none"
                aria-label="Close viewer"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div
            variants={cardAnimation}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
          >
            <FaDesktop className="text-4xl text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Labs</h2>
            <ul className="text-gray-700 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <HiArrowRight className="text-indigo-600 flex-shrink-0" />
                6 B.Tech. Labs with high-end systems
              </li>
            </ul>

          </motion.div>

          <motion.div
            variants={cardAnimation}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
          >
            <HiComputerDesktop className="text-4xl text-emerald-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Equipment</h2>
            <ul className="text-gray-700 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <HiArrowRight className="text-emerald-600 flex-shrink-0" />
                Acer, Lenovo dual core, i3 and i5 desktops with LED monitors
              </li>
              <li className="flex items-center gap-2">
                <HiArrowRight className="text-emerald-600 flex-shrink-0" />
                Access to all major cloud service providers (EC2, Azure)
              </li>
              <li className="flex items-center gap-2">
                <HiArrowRight className="text-emerald-600 flex-shrink-0" />
                LCD projectors
              </li>
              <li className="flex items-center gap-2">
                <HiArrowRight className="text-emerald-600 flex-shrink-0" />
                HP LaserJet printers
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={cardAnimation}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
          >
            <div className="flex space-x-3 mb-4">
              <FaMicrosoft className="text-3xl text-blue-700" />
              <SiOracle className="text-3xl text-red-600" />
              <SiLinux className="text-3xl text-black" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Software</h2>
            <ul className="text-gray-700 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <HiArrowRight className="text-red-600 flex-shrink-0" />
                All Microsoft software (Microsoft Imagine subscription)</li>
              <li className="flex items-center gap-2">
                <HiArrowRight className="text-red-600 flex-shrink-0" />
                All Oracle software (Oracle Academy membership)</li>
              <li className="flex items-center gap-2">
                <HiArrowRight className="text-red-600 flex-shrink-0" />
                Various flavors of Linux</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
      <Footer />
    </div>
  );
}
