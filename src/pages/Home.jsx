import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";

import hod from "../assets/hod.webp";
import dean from "../assets/DeanET.png";

import heroImage1 from "../assets/CSE_DS.jpg";
import heroImage2 from "../assets/CSE_DS.jpg";
import heroImage3 from "../assets/CSE_DS.jpg";

// Department Strength data
const stats = [
  { title: "Professors", count: 2 },
  { title: "Associate Professors", count: 7 },
  { title: "Sr. Assistant Professors", count: 10 },
  { title: "Assistant Professors", count: 17 },
  { title: "Programmers & Admin", count: 3 },
];

// Animated Counter
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

//  Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeInUpSlow = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 1.5, ease: "easeOut" },
  }),
};

//  Scroll to Top
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//  Messages for slider
const messages = [
  {
    img: hod,
    title: "Message from the Head of the Department",
    name: "Dr. S.V.Suryanarayana",
    text: `Welcome to the Department of Computer Science and Engineering (Data Science) at CVR College of
    Engineering. Our department is committed to academic excellence, research innovation, and nurturing
    the next generation of data professionals. We aim to provide students with the technical expertise
    and ethical values required to thrive in a data-driven world.`,
  },
  {
    img: dean,
    title: "Message from the Dean",
    name: "Dr. Dr.Lakshmi H N, Ph.D.",
    text: `As Dean of CSE (Data Science), I welcome you to a vibrant department focused on fostering academic
    excellence, innovative research, and student development. We strive to build professionals equipped
    with the knowledge and skills to lead in technology-driven industries.`,
  },
];

//  Manual Slider Component
function MessageSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? messages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <img
            src={messages[current].img}
            alt={messages[current].name}
            className="rounded-lg w-full h-auto shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {messages[current].title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              {messages[current].text}
            </p>
            <p className="mt-6 font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {messages[current].name}
            </p>
          </div>
        </motion.div>

        {/* Manual Controls */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
          >
            Next 
          </button>
        </div>
      </div>
    </section>
  );
}

//  Home Component
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <motion.section initial="hidden" animate="visible" variants={fadeInUpSlow} className="relative w-full">
        <div className="w-full">
          <img src={heroImage1} alt="Slide 1" className="w-full h-auto object-contain" />
          <img src={heroImage2} alt="Slide 2" className="w-full h-auto object-contain" />
          <img src={heroImage3} alt="Slide 3" className="w-full h-auto object-contain" />
        </div>
      </motion.section>

      {/*  HOD & Dean Messages */}
      <MessageSection />

      {/*  Department Strength */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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

      {/*  Scroll to Top */}
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




