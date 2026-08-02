import React, { useState } from "react";
import {
  FaBook,
  FaFilePowerpoint,
  FaVideo,
  FaBookOpen,
  FaClipboardList,
  FaTasks,
  FaFileAlt,
  FaFlask,
} from "react-icons/fa";

import ResourceButton from "./ResourceButton";
import ResourceModal from "./ResourceModal";

export default function ResourceCard({ subject }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [resourceList, setResourceList] = useState([]);

  const openResources = (resourceTitle, resources) => {
    setTitle(`${subject.name} - ${resourceTitle}`);
    setResourceList(resources);
    setOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-5">

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              {subject.icon}
            </div>

            <div>

              <h2 className="text-xl font-bold">
                {subject.name}
              </h2>

              <p className="text-sm text-blue-100">
                {subject.code}
              </p>

              {subject.faculty && (
                <p className="text-xs mt-1">
                  Faculty : {subject.faculty}
                </p>
              )}

            </div>

          </div>

        </div>

        {/* Resource Buttons */}

        <div className="p-5 space-y-3">

          <ResourceButton
            icon={<FaFileAlt />}
            title="Notes"
            color="bg-blue-600"
            resources={subject.resources.notes}
            onClick={openResources}
          />

          <ResourceButton
            icon={<FaFilePowerpoint />}
            title="PPT"
            color="bg-orange-500"
            resources={subject.resources.ppt}
            onClick={openResources}
          />

          <ResourceButton
            icon={<FaFlask />}
            title="Lab Manual"
            color="bg-green-600"
            resources={subject.resources.lab}
            onClick={openResources}
          />

          <ResourceButton
            icon={<FaVideo />}
            title="Videos"
            color="bg-red-600"
            resources={subject.resources.videos}
            onClick={openResources}
          />

          <ResourceButton
            icon={<FaBook />}
            title="Books"
            color="bg-purple-600"
            resources={subject.resources.books}
            onClick={openResources}
          />

          <ResourceButton
            icon={<FaClipboardList />}
            title="Previous Papers"
            color="bg-pink-600"
            resources={subject.resources.papers}
            onClick={openResources}
          />

          <ResourceButton
            icon={<FaBookOpen />}
            title="Syllabus"
            color="bg-indigo-600"
            resources={subject.resources.syllabus}
            onClick={openResources}
          />

          <ResourceButton
            icon={<FaTasks />}
            title="Assignments"
            color="bg-teal-600"
            resources={subject.resources.assignments}
            onClick={openResources}
          />

        </div>

      </div>

      <ResourceModal
        open={open}
        title={title}
        resources={resourceList}
        onClose={() => setOpen(false)}
      />
    </>
  );
}