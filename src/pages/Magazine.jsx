import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Book, Newspaper } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Sample magazine data
const magazinesData = [
    {
        category: "Print Journals & Magazines",
        icon: Newspaper,
        items: [
            "Total Number of Print Journals and Magazines: 193",
        ],
    },
    {
        category: "E-Journals & E-Books",
        icon: Book,
        items: [
            "IEEE Journals: 206",
            "ASME Journals: 34",
            "ASCE Journals: 38",
            "DELNET Journals: 858",
            "KNIMBUS Journals: 10014",
            "IESTC Journals: 1825",
            "DELNET Books: 2128",
            "KNIMBUS Books: 16704",
        ],
    },
];

export default function Magazine() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
            <Nav />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-center py-24 px-4 sm:px-8 lg:px-16"
            >
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                    College Magazines & Journals
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Explore the wide range of print and digital journals, magazines, and e-resources available to students and faculty.
                </p>
            </motion.div>

            {/* Magazine Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 space-y-12">
                {magazinesData.map((mag, index) => {
                    const Icon = mag.icon;
                    return (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={index}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent flex items-center gap-2">
                                    <Icon className="text-blue-700 w-6 h-6" />
                                    {mag.category}
                                </h2>
                                <Separator className="flex-grow ml-4" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {mag.items.map((item, i) => (
                                    <Card
                                        key={i}
                                        className="p-6 hover:shadow-xl transition transform rounded-2xl border border-gray-100"
                                    >
                                        <CardHeader className="flex items-center gap-3">
                                            <Icon className="text-indigo-600 w-5 h-5" />
                                            <h3 className="text-lg font-semibold text-gray-900">{item}</h3>
                                        </CardHeader>
                                        <CardContent className="text-gray-700 text-sm mt-2">
                                            {item}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </section>

            {/* Scroll To Top Button */}
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
