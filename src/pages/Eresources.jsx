import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

import HeroBanner from "../components/eresources/HeroBanner";
import Statistics from "../components/eresources/Statistics";
import SearchBar from "../components/eresources/SearchBar";
import SemesterNav from "../components/eresources/SemesterNav";
import SemesterSection from "../components/eresources/SemesterSection";

import resources from "../data/resources";

import { ArrowUp } from "lucide-react";

export default function Eresources() {
  const [search, setSearch] = useState("");

  const filteredResources =
    search.trim() === ""
      ? resources
      : resources
          .map((semester) => ({
            ...semester,
            subjects: semester.subjects.filter(
              (subject) =>
                subject.name.toLowerCase().includes(search.toLowerCase()) ||
                subject.code.toLowerCase().includes(search.toLowerCase()) ||
                (subject.faculty || "")
                  .toLowerCase()
                  .includes(search.toLowerCase())
            ),
          }))
          .filter((semester) => semester.subjects.length > 0);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Nav />

      <HeroBanner />

      <main className="max-w-7xl mx-auto px-5">

        <Statistics />

        <SemesterNav resources={resources} />

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch("")}
        />

        {filteredResources.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-4xl font-bold">
              No Subjects Found
            </h2>

            <p className="text-gray-500 mt-4">
              Try another keyword.
            </p>
          </div>
        ) : (
          filteredResources.map((semester) => (
            <SemesterSection
              key={semester.id}
              semester={semester}
            />
          ))
        )}

      </main>

      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full p-4 shadow-xl transition"
      >
        <ArrowUp size={20} />
      </button>

      <Footer />
    </div>
  );
}


