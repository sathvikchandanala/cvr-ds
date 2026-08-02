import React, { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

export default function SemesterNav({ resources }) {
  const [activeSemester, setActiveSemester] = useState("");

  const scrollToSemester = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSemester(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      resources.forEach((semester) => {
        const section = document.getElementById(semester.semester);

        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top - 180 &&
          window.scrollY < top + height
        ) {
          setActiveSemester(semester.semester);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [resources]);

  return (
    <div className="sticky top-20 z-40 bg-white rounded-2xl shadow-lg border mb-10">

      <div className="flex items-center gap-3 px-6 py-4 border-b">

        <GraduationCap className="text-blue-700" />

        <h2 className="text-lg font-bold text-blue-800">
          Browse by Semester
        </h2>

      </div>

      <div className="flex flex-wrap justify-center gap-3 p-5">

        {resources.map((semester) => (

          <button
            key={semester.id}
            onClick={() => scrollToSemester(semester.semester)}
            className={`
              px-5
              py-2
              rounded-full
              font-medium
              transition-all
              duration-300

              ${
                activeSemester === semester.semester
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-gray-100 hover:bg-blue-600 hover:text-white"
              }
            `}
          >
            {semester.semester}
          </button>

        ))}

      </div>

    </div>
  );
}