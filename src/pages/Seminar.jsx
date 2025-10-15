import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";
import { Tv, Users, Airplay, Box } from "lucide-react"; // Lucide icons
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

const seminarData = [
    {
        title: "Facilities & Features",
        features: [
            "The college has an air-conditioned seminar hall which is frequently used by faculty and students. Designed to facilitate learning and professional development.",
            "LCD Projectors",
            "Advanced multimedia equipment",
        ],
        icon: Tv,
    },
    {
        title: "Capacity",
        features: ["Seats 105 participants", "Air Conditioned", "Comfortable environment"],
        icon: Box,
    },
    {
        title: "Multimedia Kits",
        features: ["Complete presentation tools"],
        icon: Airplay,
    },
    {
        title: "Event Versatility",
        features: ["Lectures", "Workshops", "Recruitment Programs", "Academic Conferences", "Guest Talks"],
        icon: Users,
    },
];

export default function Seminar() {
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
                    Seminar Hall
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    "A space where ideas are shared, knowledge is expanded, and futures are shaped."
                </p>
            </motion.div>

            {/* Seminar Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 space-y-12">
                {seminarData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={index}
                        >
                            <Card className="p-6 hover:shadow-xl transition transform rounded-2xl border border-gray-100">
                                <CardHeader className="flex items-center gap-4 mb-4">
                                    <Icon className="text-4xl text-blue-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
                                </CardHeader>
                                <CardContent className="text-gray-700 text-sm space-y-2">
                                    <ul className="list-disc list-inside space-y-1">
                                        {item.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </section>

            {/* Scroll To Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-800 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>

            <Footer />
        </div>
    );
}
