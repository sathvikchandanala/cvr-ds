import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Link } from "react-router-dom";
import hod from "../assets/hod.webp"
import Nav from "./Nav";
import Footer from "./Footer";

const carouselImages = [
  { src: "/images/slide1.jpg", alt: "Campus View" },
  { src: "/images/slide2.jpg", alt: "Seminar Hall" },
  { src: "/images/slide3.jpg", alt: "Students in Lab" },
];

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
<div>
    <Nav/>
</div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-blue-50 to-white space-y-12">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Welcome to the Department of <br /> CSE - Data Science
          </h2>
          <p className="max-w-2xl text-gray-600 text-lg mb-6">
            Empowering innovation through data-driven education and research at CVR College of Engineering.
          </p>
        </div>
      </motion.section>
      <motion.section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={hod} 
            alt="HOD - CSE Data Science"
            className="rounded-lg w-full h-auto shadow-lg object-cover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <div>
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Message from the Head of Department
            </motion.h2>
            <motion.p
              className="text-gray-700 leading-relaxed text-lg text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Welcome to the Department of Computer Science and Engineering - Data Science at CVR College of Engineering.
              Our department is committed to academic excellence, research innovation, and nurturing the next generation of data professionals.
              We aim to provide students with the technical expertise and ethical values required to thrive in a data-driven world.
            </motion.p>
            <motion.p
              className="mt-6 font-semibold text-blue-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
             Dr. S.V.Suryanarayana
            </motion.p>
          </div>
        </div>
      </motion.section>
    <Footer/>
          
    </div>
  );
}
