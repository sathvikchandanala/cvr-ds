import React, { useState } from "react";

// --- MOCK External/Local Imports (REQUIRED for single-file execution) ---
// Since this is a single, self-contained file, all components/functions
// that would typically be imported from other files or libraries must be defined here.

// Mock: Nav Component
const Nav = () => (
  <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <p className="text-xl font-bold text-green-600">Staff Directory</p>
    </div>
  </header>
);

// Mock: Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 text-center">
    <p className="text-sm">© {new Date().getFullYear()} Non-Teaching Staff Showcase</p>
  </footer>
);

// Mock: Card Component (Shadcn/UI structure using Tailwind)
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

// Mock: Input Component (Shadcn/UI structure using Tailwind)
const Input = ({ value, onChange, placeholder, className = "" }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);

// Mock: Button Component (Shadcn/UI structure using Tailwind)
const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700 h-10 px-4 py-2 ${className}`}
  >
    {children}
  </button>
);

// Mock: Icons (Replace lucide-react and react-icons/fa)
const ArrowUp = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
);

const FaSearch = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
    <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.1-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
  </svg>
);

const FaPhone = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M164.9 24.6c-13.8-21-38.8-31.9-63.4-27.1L2.1 36.8C-8 42.4-15.6 52.8-17.7 64.8s3.4 23.3 12.4 32.2l38.2 38.2c6.4 6.4 15 9.4 23.6 9.4c.1 0 .2 0 .3 0c9.1 0 17.8-3.5 24.1-10.1l40.3-40.3c11.6-11.6 24.7-22.3 38.1-31.5c.2-.1 .4-.2 .6-.3c-1.3-1.6-2.5-3.3-3.6-5.1c-1.6-2.5-3-5.2-4.2-8.1c-2.3-5.6-3.4-11.4-3.4-17.3c0-3.2 .3-6.4 .8-9.4zM488 208a144 144 0 1 0-288 0h32a112 112 0 1 1 224 0V432H400v48h48v32h16v-32h48v-48h-16V208z"/></svg>
);

const FaMail = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 96c26.5 0 48 21.5 48 48V368c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48H448zm-16 64L256 288L32 160h384z"/></svg>
);


// Mock: Framer Motion
const motion = {
    // Fix: Filter out Framer Motion props to prevent React warnings.
    div: ({ children, className, initial, animate, variants, whileInView, viewport, custom, whileHover, ...props }) => 
        <div className={className} {...props}>{children}</div>,
    h1: ({ children, className, initial, animate, variants, whileInView, viewport, custom, whileHover, ...props }) => 
        <h1 className={className} {...props}>{children}</h1>,
};
const fadeInUp = { hidden: { opacity: 0, y: 0 }, visible: () => ({ opacity: 1, y: 0 }) };

// --- IMAGE HANDLING ---
// Function to generate a unique placeholder based on the staff member's name
const getImageUrl = (name) => {
    if (!name) return generateFallbackImage("STAFF");
    const initial = name.charAt(0).toUpperCase();
    
    // Simple way to cycle through a few colors for variety
    const colorCycle = ["4F46E5", "EF4444", "059669", "F97316", "14B8A6"];
    const index = initial.charCodeAt(0) % colorCycle.length;
    const color = colorCycle[index];
    
    // Generates a unique placeholder image with the staff member's initial
    return `https://placehold.co/160x160/${color}/FFFFFF?text=${initial}`;
};

// Fallback utility for error handling (used if name is missing or image fails)
const generateFallbackImage = (text) => 
    `https://placehold.co/160x160/6B7280/FFFFFF?text=${text}`;

// --- NEW NON-TEACHING STAFF DATA (Based on latest table) ---
const nonTeachingStaffData = [
  {
    title: "Lab Programmers (CSE/DS)",
    members: [
      { code: "CVRETN002", name: "B. Rajeshwar Rao", designation: "Lab Programmer", mobile: "9866212054", joined: "19.12.2022", email: "rajeswarrao.2054@cvr.ac.in" },
      { code: "CVRETN005", name: "K. Sumathi", designation: "Lab Programmer", mobile: "9849541269", joined: "15.11.2023", email: "kunchapu.sumathi@cvr.ac.in" },
      { code: "CVRETN008", name: "Ch. Ashwini", designation: "Lab Programmer", mobile: "8270490206", joined: "15.02.2024", email: "mahimaashwini123@gmail.com" },
      { code: "CVRETN011", name: "A. Anand Kumar", designation: "Lab Programmer", mobile: "7013280468", joined: "10.02.2025", email: "anand.anamaina@cvr.ac.in" },
      { code: "CVRETN013", name: "H. Srikanth", designation: "Lab Programmer", mobile: "9381302297", joined: "01.08.2025", email: "hakeesrikanth2002@cvr.ac.in" },
    ],
  },
  {
    title: "DTP Operators (CSE/DS)",
    members: [
      { code: "CVRADM202", name: "G. Yamuna", designation: "DTP Operator", mobile: "8008651251", joined: "15.12.2023", email: "g.yamuna@cvr.ac.in" },
      { code: "CVRADM229", name: "S. Ramesh", designation: "DTP Operator", mobile: "9963692405", joined: "02.12.2024", email: "rameshsoma.kumar@cvr.ac.in" },
    ],
  },
];


const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function NonTeachingStaff() {
  const [search, setSearch] = useState("");

  const filteredData = nonTeachingStaffData
    .map((group) => ({
      ...group,
      members: group.members.filter((member) =>
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.designation.toLowerCase().includes(search.toLowerCase()) ||
        member.code.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.members.length > 0);


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Nav />
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-left w-full sm:w-auto"
            >
              Non-Teaching Staff
            </motion.h1>
            <motion.div
              className="flex w-full sm:w-auto gap-2 items-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <Input
                placeholder="Search by name, role, or code..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-grow sm:w-64 border-green-300 focus-visible:ring-green-500"
              />
              <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                <FaSearch className="w-4 h-4" /> Search
              </Button>
            </motion.div>
          </div>

          {filteredData.length === 0 && search.length > 0 ? (
            <div className="text-xl text-gray-600 p-10 bg-white rounded-xl shadow-inner border border-dashed border-gray-300">
                No staff members found matching "{search}".
            </div>
          ) : (
            filteredData.map((group, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 3}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-6 text-left border-b-2 border-green-100 pb-2">
                  {group.title} ({group.members.length})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {group.members.map((member, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.03 }} className="w-full">
                      <Card className="rounded-2xl shadow-xl bg-white border border-green-50 hover:shadow-2xl transition-all duration-300">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <img
                            // Use getImageUrl to generate a unique placeholder image based on the name
                            src={getImageUrl(member.name)}
                            alt={`Profile of ${member.name}`}
                            className="w-36 h-36 object-cover object-center mb-4 shadow-lg rounded-full border-4 border-green-500/20 transition-transform hover:scale-105"
                            onError={(e) => { e.target.onerror = null; e.target.src = generateFallbackImage(member.name.charAt(0)) }}
                          />
                          <p className="text-xl font-semibold text-gray-900 mt-2">
                            {member.name}
                          </p>

                          {/* New details added */}
                          <p className="text-sm text-gray-500 font-mono mt-1 mb-2 p-1 px-3 bg-gray-100 rounded">
                            Code: {member.code}
                          </p>

                          <p className="text-sm text-green-600 font-medium mt-1 p-1 px-3 bg-green-50 rounded-full">
                            {member.designation}
                          </p>

                          <div className="mt-3 space-y-1 w-full text-sm text-gray-700">
                            <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 hover:text-green-500 transition-colors">
                              <FaMail className="w-4 h-4 text-green-400" /> {member.email}
                            </a>
                            <a href={`tel:${member.mobile}`} className="flex items-center justify-center gap-2 hover:text-green-500 transition-colors">
                              <FaPhone className="w-4 h-4 text-green-400" /> {member.mobile}
                            </a>
                          </div>

                          <p className="text-xs text-gray-400 mt-3">
                            Joined: {member.joined}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-xl transition-transform transform hover:scale-110 active:scale-95 duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
      <Footer />
    </div>
  );
}
