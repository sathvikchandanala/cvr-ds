import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import { FaBook, FaDatabase } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { ArrowUp } from "lucide-react";

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function EResources() {
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
                    E-Resources
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Access our wide range of print journals, e-journals, and e-books to support learning and research.
                </p>
            </motion.div>

            {/* Cards */}
            <section className="py-16 px-4 sm:px-8 lg:px-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                    className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-2"
                >
                    {/* Print Journals */}
                    <motion.div
                        variants={cardAnimation}
                        className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
                    >
                        <FaBook className="text-4xl text-blue-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Print Journals</h2>
                        <p className="text-gray-700 text-sm">
                            Total Number of Print Journals and Magazines: <span className="font-semibold">193</span>
                        </p>
                    </motion.div>

                    {/* E-Journals & E-Books */}
                    <motion.div
                        variants={cardAnimation}
                        className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
                    >
                        <FaDatabase className="text-4xl text-green-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">E-Journals & E-Books</h2>
                        <ul className="text-gray-700 space-y-2 text-sm max-h-80 overflow-y-auto">
                            <li className="flex items-center gap-2"><HiArrowRight className="text-green-600" /> IEEE Journals: 206</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-green-600" /> ASME Journals: 34</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-green-600" /> ASCE Journals: 38</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-green-600" /> DELNET Journals: 858</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-green-600" /> KNIMBUS Journals: 10014</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-green-600" /> IESTC Journals: 1825</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-green-600" /> DELNET Books: 2128</li>
                            <li className="flex items-center gap-2"><HiArrowRight className="text-green-600" /> KNIMBUS Books: 16704</li>
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
