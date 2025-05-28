import { useState, useRef, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Link } from "react-router-dom";
import hod from "../assets/hod.webp";
import Nav from "./Nav";
import Footer from "./Footer";

const stats = [
  { title: "Professors", count: 2 },
  { title: "Associate Professors", count: 7 },
  { title: "Sr. Assistant Professors", count: 10 },
  { title: "Assistant Professors", count: 17 },
  { title: "Programmers & Admin", count: 5 },
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

export default function HomePage() {
  const hodRef = useRef(null);

  return (
    <div className="min-h-screen font-sans">
      <Nav />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="py-40 px-6 flex flex-col items-center justify-center text-center space-y-12"
      >
        <div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Welcome to the Department of <br /> CSE - Data Science
          </h2>
          <p className="max-w-4xl text-gray-600 text-lg mb-6">
            Empowering innovation through data-driven education and research at CVR College of Engineering.
          </p>
        </div>

        <Button
          onClick={() => hodRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="group px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
        >
          Explore
          <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
        </Button>
      </motion.section>

      <motion.section className="py-24 px-6" ref={hodRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={hod}
            alt="HOD - CSE Data Science"
            className="rounded-lg w-full h-auto shadow-lg object-cover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <div>
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Message from the Head of Department
            </motion.h2>
            <motion.p
              className="text-gray-700 leading-relaxed text-lg text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Welcome to the Department of Computer Science and Engineering - Data Science at CVR College of Engineering.
              Our department is committed to academic excellence, research innovation, and nurturing the next generation of data professionals.
              We aim to provide students with the technical expertise and ethical values required to thrive in a data-driven world.
            </motion.p>
            <motion.p
              className="mt-6 font-bold text-blue-700"
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

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
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
              className="p-6 text-center shadow-md rounded-2xl bg-white text-black hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-4xl font-bold mb-2">
                <Counter target={item.count} />
              </h3>
              <p className="font-medium text-blue-700">{item.title}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
