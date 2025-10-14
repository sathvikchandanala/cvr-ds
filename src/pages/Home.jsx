import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import hod from "../assets/hod.webp";

import heroImage1 from "../assets/CSE_DS.jpg";

// ✅ Added missing hero image constants
const heroImage2 = "https://via.placeholder.com/1920x800.png?text=Slide+2";
const heroImage3 = "https://via.placeholder.com/1920x800.png?text=Slide+3";

import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";

const stats = [
  { title: "Professors", count: 2 },
  { title: "Associate Professors", count: 7 },
  { title: "Sr. Assistant Professors", count: 10 },
  { title: "Assistant Professors", count: 17 },
  { title: "Programmers & Admin", count: 3 },
];

function Counter({ target }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const duration = 2000;
    const incrementTime = 40;
    const steps = Math.ceil(duration / incrementTime);
    const step = Math.ceil(target / steps);

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, incrementTime);

    return () => clearInterval(interval);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

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

const fadeInUpSlow = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1.5,
      ease: "easeOut",
    },
  }),
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function HomePage() {
  const hodRef = useRef(null);

  return (
    <div className="min-h-screen">
      <Nav />

      {/* ✅ Hero Section with Carousel */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUpSlow}
        className="relative w-full"
      >
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <img
                src={heroImage1}
                alt="Slide 1"
                className="w-full h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={heroImage2}
                alt="Slide 2"
                className="w-full h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={heroImage3}
                alt="Slide 3"
                className="w-full h-auto object-contain"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </motion.section>

      <motion.section className="py-24 px-6" ref={hodRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={hod}
            alt="HOD - CSE Data Science"
            className="rounded-lg w-full h-auto shadow-lg object-cover"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          />
          <div>
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Message from the Head of the Department
            </motion.h2>
            <motion.p
              className="text-gray-700 leading-relaxed text-lg text-justify"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Welcome to the Department of Computer Science and Engineering (Data Science) at CVR College of Engineering.
              Our department is committed to academic excellence, research innovation, and nurturing the next generation of data professionals.
              We aim to provide students with the technical expertise and ethical values required to thrive in a data-driven world.
            </motion.p>
            <motion.p
              className="mt-6 font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Dr. S.V.Suryanarayana
            </motion.p>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Department Strength</h2>
          <p className="text-gray-600 mt-2">Dedicated team supporting education and research excellence.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {stats.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center shadow-md rounded-2xl bg-white text-black hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Link to={`/faculty/${encodeURIComponent(item.title)}`} className="block">
                <h3 className="text-4xl font-bold mb-2">
                  <Counter target={item.count} />
                </h3>
                <p className="font-medium tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {item.title}
                </p>
              </Link>
            </Card>
          ))}
        </div>
      </motion.section>

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
