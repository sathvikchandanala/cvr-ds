import React from "react";
import { FaExternalLinkAlt, FaLock } from "react-icons/fa";

export default function ResourceButton({
  icon,
  title,
  resources = [],
  color = "bg-blue-600",
  onClick,
}) {
  const available = resources.length > 0;

  return (
    <button
      onClick={() => available && onClick(title, resources)}
      disabled={!available}
      className={`
        w-full
        flex
        items-center
        justify-between
        px-4
        py-3
        rounded-lg
        text-white
        transition-all
        duration-300
        ${available ? color : "bg-gray-400 cursor-not-allowed"}
      `}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
          {resources.length}
        </span>

        {available ? (
          <FaExternalLinkAlt />
        ) : (
          <FaLock />
        )}
      </div>
    </button>
  );
}