import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  onClear,
}) {
  return (
    <div className="mb-12">

      <div className="relative max-w-3xl mx-auto">

        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          size={22}
        />

        <input
          type="text"
          placeholder="Search by Subject Name, Subject Code or Faculty..."
          value={value}
          onChange={onChange}
          className="
            w-full
            rounded-2xl
            border
            border-gray-300
            bg-white
            py-4
            pl-14
            pr-14
            text-lg
            shadow-md
            focus:border-blue-600
            focus:ring-4
            focus:ring-blue-200
            outline-none
            transition
          "
        />

        {value && (

          <button
            onClick={onClear}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              p-2
              rounded-full
              hover:bg-gray-100
              transition
            "
          >
            <X size={20} />
          </button>

        )}

      </div>

      <p className="text-center text-gray-500 mt-4">

        Search resources by subject name, subject code or faculty.

      </p>

    </div>
  );
}