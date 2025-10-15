import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";
import { HiBriefcase, HiChartBar, HiUsers } from "react-icons/hi2";
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

export default function Placement() {
    const placementStats = [
        {
            title: "Campus Recruitment",
            icon: HiBriefcase,
            features: [
                "About 90 companies visited CVR for placements.",
                "Close to 1000 students placed in the 2024-25 academic year.",
                "Highest among the peer group of colleges.",
            ],
        },
        {
            title: "Salary Highlights",
            icon: HiChartBar,
            features: [
                "Highest offer: Rs. 72,00,000",
                "More than 150 students got offers with high salaries, a new record.",
                "About 250 offers are higher than Rs. 6 Lakhs.",
            ],
        },
        {
            title: "Placement Excellence",
            icon: HiUsers,
            features: [
                "Average salary continues to increase to a new high.",
                "Placement percentage higher compared to many premier institutions in the state and country.",
                "CVR becomes one of the leading colleges in terms of high salary offers.",
            ],
        },
    ];

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
                    Placement Highlights
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    The college has been creating records year after year. Despite global
                    economic challenges, CVR continues to achieve remarkable placement
                    records.
                </p>
            </motion.div>

            {/* Placement Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 space-y-12">
                {placementStats.map((stat, index) => {
                    const Icon = stat.icon;
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
                                    <Icon className="text-blue-700" />
                                    {stat.title}
                                </h2>
                                <Separator className="flex-grow ml-4" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {stat.features.map((feature, i) => (
                                    <Card
                                        key={i}
                                        className="p-6 hover:shadow-xl transition transform rounded-2xl border border-gray-100"
                                    >
                                        <CardHeader className="flex items-center gap-3">
                                            <HiBriefcase className="text-3xl text-indigo-600" />
                                            <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                                        </CardHeader>
                                        <CardContent className="text-gray-700 text-sm mt-2">
                                            {feature}
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
