import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
      { name: "Conference Publications", path: "/research/conferencepublications" },
      { name: "Journal Publications", path: "/research/journalpublications" },
      { name: "Book chapter Publications ", path: "/research/bookchapterpublications" },
      { name: "FDPs", path: "/research/fdps" },
      { name: "Patents", path: "/research/patents" },
      
    ],
  },
  { name: "Contact", path: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-sans">
      <header className="w-full shadow-md sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="CVR Logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="h-14 w-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] "
            />
<motion.span
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight 
             bg-gradient-to-r from-blue-600 to-blue-800 
             bg-clip-text text-transparent 
             drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] 
             whitespace-nowrap cursor-pointer smaller-below-360 hide-below-355"
>
  Department of CSE (Data Science)
</motion.span>






          </div>

          <div className="xl:hidden">
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

          <nav className="hidden xl:flex gap-4">
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
  );
}
