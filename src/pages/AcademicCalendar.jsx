import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaCalendarAlt, FaFilePdf } from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

// Animation settings
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

// Smooth scroll to top
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const AcademicCalendar = () => {
    const [selectedYear, setSelectedYear] = useState(null);

    // ✅ Ensure these files exist in: public/pdfs/
    const calendars = {
        second: "/pdfs/II BTech Academic Calendar 2025-26.pdf",
        third: "/pdfs/III BTech Academic Calendar 2025-26.pdf",
        fourth: "/pdfs/IV BTech Academic Calendar 2025-26.pdf",
    };

    const yearTitles = {
        second: "B.Tech II Year - 2025-26 - R22",
        third: "B.Tech III Year - 2025-26 - R22",
        fourth: "B.Tech IV Year - 2025-26 - R22",
    };

    return (
        <>
            <Nav />

            <main className="min-h-screen py-24 px-4 md:px-16 space-y-16 bg-gray-50">
                {/* Header Section */}
                <section className="text-center max-w-3xl mx-auto">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-black mb-4"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        Academic Calendar 2025-26
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-700"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                    >
                        Explore the academic schedules for each year of the B.Tech program in
                        Computer Science and Engineering (Data Science).
                    </motion.p>
                </section>

                {/* Cards Section */}
                <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { title: "B.Tech II Year", year: "second" },
                        { title: "B.Tech III Year", year: "third" },
                        { title: "B.Tech IV Year", year: "fourth" },
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index + 2}
                        >
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Card
                                        className="hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
                                        onClick={() => setSelectedYear(item.year)}
                                    >
                                        <CardHeader className="flex items-center gap-3">
                                            <FaCalendarAlt className="text-blue-700 text-3xl" />
                                            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                                {item.title}
                                            </h2>
                                        </CardHeader>
                                        <Separator />
                                        <CardContent className="text-gray-700 text-md mt-4 text-center">
                                            <p>Click to view the academic calendar for {item.title}.</p>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>

                                {/* PDF Viewer in Modal */}
                                <DialogContent className="max-w-5xl">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent flex items-center gap-2">
                                            <FaFilePdf className="text-red-600" />
                                            {yearTitles[selectedYear]}
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className="w-full h-[600px] mt-4">
                                        {selectedYear ? (
                                            <iframe
                                                src={calendars[selectedYear]}
                                                title={yearTitles[selectedYear]}
                                                className="w-full h-full rounded-lg border"
                                            ></iframe>
                                        ) : (
                                            <p className="text-center text-gray-600">No calendar available.</p>
                                        )}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </motion.div>
                    ))}
                </section>

                {/* Scroll To Top Button */}
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-800 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            </main>

            <Footer />
        </>
    );
};

export default AcademicCalendar;

