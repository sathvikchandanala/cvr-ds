import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";

import Image1 from "../assets/grad1.jpg";
import Image2 from "../assets/grad2.jpg";
import Image3 from "../assets/grad3.jpg";
import Image4 from "../assets/annaulday.jpg";

const galleryImages = [
    { src: Image1, alt: "Gallery Image 1" },
    { src: Image2, alt: "Gallery Image 2" },
    { src: Image3, alt: "Gallery Image 3" },
    { src: Image4, alt: "Gallery Image 4" },
];

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

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
                    Gallery
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Explore the vibrant moments captured from our campus, events, and facilities.
                </p>
            </motion.div>

            {/* Carousel */}
            <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 py-16 relative">
                <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-xl">
                    <AnimatePresence initial={false}>
                        <motion.img
                            key={galleryImages[currentIndex].src}
                            src={galleryImages[currentIndex].src}
                            alt={galleryImages[currentIndex].alt}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 shadow-lg"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 shadow-lg"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="w-6 h-6 text-gray-800" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mt-6">
                    {galleryImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-700" : "bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Scroll To Top */}
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
