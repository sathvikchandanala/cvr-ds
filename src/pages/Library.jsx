import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import { FaBook, FaUsers } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { ArrowUp } from "lucide-react";
import libraryImg from "../assets/library.jpg"; // your single library image

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function LibraryPage() {
    const [viewerOpen, setViewerOpen] = useState(false);

    const openViewer = () => setViewerOpen(true);
    const closeViewer = () => setViewerOpen(false);

    const cardAnimation = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
            <Nav />

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-center py-24 px-4 sm:px-8 lg:px-16"
            >
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                    College Library
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    A hub of knowledge with extensive print and digital resources to support academic excellence and research.
                </p>
            </motion.div>

            {/* Library Image */}
            <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="cursor-pointer overflow-hidden rounded-2xl shadow-lg max-w-4xl mx-auto"
                    onClick={openViewer}
                >
                    <div className="aspect-[16/9] overflow-hidden">
                        <img
                            src={libraryImg}
                            alt="Library"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {viewerOpen && (
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
                                src={libraryImg}
                                alt="Library"
                                className="w-full h-auto max-h-[80vh] rounded-2xl object-contain"
                            />
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

            {/* Library Info Cards */}
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
                        className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
                    >
                        <FaBook className="text-4xl text-blue-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Overview</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Dedicated three-storied building (1460 Sqm) for Library & Postgraduate Research.
                            87582 books, 17046 reference titles, 191 journals, digital library with 30 multimedia PCs, and access to IEEE, ASME, ASCE, DELNET, KNIMBUS, NDLI, and NPTEL.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardAnimation}
                        className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
                    >
                        <FaUsers className="text-4xl text-green-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Facilities</h2>
                        <ul className="text-gray-700 space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <HiArrowRight className="text-green-600 flex-shrink-0" />
                                College bus facility till 6 PM for students
                            </li>
                            <li className="flex items-center gap-2">
                                <HiArrowRight className="text-green-600 flex-shrink-0" />
                                Newspapers, magazines, and books of general interest
                            </li>
                            <li className="flex items-center gap-2">
                                <HiArrowRight className="text-green-600 flex-shrink-0" />
                                Digital library with remote access to major e-resources
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={cardAnimation}
                        className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
                    >
                        <FaBook className="text-4xl text-purple-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Programme Books</h2>
                        <ul className="text-gray-700 space-y-2 text-sm max-h-64 overflow-y-auto">
                            <li className="flex items-center gap-2"><HiArrowRight className="text-purple-600" /> B.Tech CSE: 12107 books</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-purple-600" /> B.Tech ECE: 10693 books</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-purple-600" /> B.Tech ME: 8303 books</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-purple-600" /> Humanities & Science: 22666 books</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-purple-600" /> M.Tech AI: 279 books</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-purple-600" /> M.Tech Data Science: 337 books</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </section>

            {/* Scroll To Top */}
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
