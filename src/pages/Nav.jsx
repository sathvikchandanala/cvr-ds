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
import logo from "../assets/cvr-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Academics",
    subItems: [
      { name: "Objectives", path: "/academics/objectives" },
      { name: "Academic Calendar", path: "/academics/calendar" },
    ],
  },
  {
    name: "Infrastructure",
    subItems: [
      { name: "Laboratories", path: "/infrastructure/labs" },
      { name: "Classrooms", path: "/infrastructure/classrooms" },
      { name: "Seminar Hall", path: "/infrastructure/seminar" },
      { name: "Library", path: "/infrastructure/library" },
    ],
  },
  {
    name: "Faculty",
    subItems: [
      { name: "Teaching", path: "/teaching" },
      { name: "Non-Teaching", path: "/faculty/non-teaching" },
    ],
  },
  {
    name: "Student Corner",
    subItems: [
      { name: "E-Resources", path: "/student-corner/eresources" },
      { name: "Gallery", path: "/student-corner/gallery" },
      { name: "Placements", path: "/student-corner/placements" },
    ],
  },
  {
    name: "Publications Hub",
    subItems: [
      { name: "Magazines", path: "/publications/Magazines" },
      { name: "News Letter", path: "/publications/newsletter" },
    ],
  },
  {
    name: "Research",
    subItems: [
      { name: "Conferences", path: "/research/conferences" },
      { name: "Workshops", path: "/research/workshops" },
      { name: "FDPs", path: "/research/fdps" },
      { name: "Patents", path: "/research/patents" },
      { name: "Publications", path: "/research/publications" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
      <header className="w-full shadow-md sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.img
            src={logo}
            alt="CVR Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-15 w-auto"
          />

          <div className="sm:hidden" />

          <div className="sm:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-white">
                <nav className="flex flex-col space-y-4 mt-10">
                  {navItems.map((item, idx) =>
                    item.subItems ? (
                      <Popover key={idx}>
                        <PopoverTrigger asChild>
                          <div className="flex items-center justify-between px-4 py-2 cursor-pointer text-gray-800 hover:text-blue-700">
                            {item.name} <ChevronDown className="w-4 h-4 ml-2" />
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className="bg-white border w-52 mt-1">
                          <div className="flex flex-col space-y-2">
                            {item.subItems.map((sub, i) => (
                              <Link
                                to={sub.path}
                                key={i}
                                className="text-sm text-gray-700 hover:text-blue-600"
                                onClick={() => setOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    ) : (
                      <Link
                        to={item.path}
                        key={idx}
                        onClick={() => setOpen(false)}
                        className="text-left px-4 py-2 text-gray-800 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="hidden sm:flex gap-4">
            {navItems.map((item, idx) =>
              item.subItems ? (
                <Popover key={idx}>
                  <PopoverTrigger asChild>
                    <div className="flex items-center text-gray-700 text-sm font-medium hover:text-blue-700 cursor-pointer">
                      {item.name} <ChevronDown className="w-4 h-4 ml-1" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white border mt-2 w-52 rounded shadow-md">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col space-y-2"
                    >
                      {item.subItems.map((sub, i) => (
                        <Link
                          to={sub.path}
                          key={i}
                          className="text-sm text-gray-700 hover:text-blue-600"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Link
                  to={item.path}
                  key={idx}
                  className="text-gray-700 text-sm font-medium hover:text-blue-700"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>
    </div>
  )
}
