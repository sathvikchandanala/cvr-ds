import React from "react";
import {
  X,
  ExternalLink,
  Download,
  FileText,
  PlayCircle,
  BookOpen,
} from "lucide-react";

export default function ResourceViewer({
  open,
  title,
  resources = [],
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-5">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-5 flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              {title}
            </h2>

            <p className="text-blue-100">
              Available Learning Resources
            </p>

          </div>

          <button
            onClick={onClose}
            className="hover:bg-white/20 rounded-full p-2"
          >
            <X />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 overflow-y-auto max-h-[70vh]">

          {resources.length === 0 ? (

            <div className="text-center py-20">

              <BookOpen
                size={60}
                className="mx-auto text-gray-300"
              />

              <h3 className="mt-6 text-2xl font-semibold text-gray-700">
                No Resources Available
              </h3>

              <p className="text-gray-500 mt-2">
                Resources will be uploaded soon.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {resources.map((item, index) => (

                <div
                  key={index}
                  className="border rounded-xl p-5 hover:shadow-lg transition"
                >

                  <div className="flex justify-between flex-wrap gap-4">

                    <div>

                      <h3 className="font-bold text-lg">
                        {item.title}
                      </h3>

                      {item.description && (

                        <p className="text-gray-600 mt-2">
                          {item.description}
                        </p>

                      )}

                      <div className="flex gap-5 mt-3 text-sm text-gray-500">

                        {item.type && (
                          <span>
                            Type : {item.type}
                          </span>
                        )}

                        {item.uploaded && (
                          <span>
                            Uploaded : {item.uploaded}
                          </span>
                        )}

                      </div>

                    </div>

                    <div className="flex flex-wrap gap-3">

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Open
                      </a>

                      <a
                        href={item.url}
                        download
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <Download size={18} />
                        Download
                      </a>

                      {item.type === "Video" && (

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                          <PlayCircle size={18} />
                          Watch
                        </a>

                      )}

                      {item.type === "PDF" && (

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                          <FileText size={18} />
                          View PDF
                        </a>

                      )}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}