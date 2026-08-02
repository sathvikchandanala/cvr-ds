import React from "react";
import { X, ExternalLink } from "lucide-react";

export default function ResourceModal({
  open,
  title,
  resources = [],
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">

        {/* Header */}

        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="hover:bg-gray-200 rounded-full p-2"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="overflow-y-auto max-h-[70vh] p-6">

          {resources.length === 0 ? (

            <p className="text-gray-500 text-center">
              No resources available.
            </p>

          ) : (

            resources.map((item, index) => (

              <div
                key={index}
                className="border rounded-xl p-4 mb-4 hover:shadow-lg transition"
              >

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                {item.uploaded && (
                  <p className="text-sm text-gray-500 mt-1">
                    Uploaded : {item.uploaded}
                  </p>
                )}

                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
                >
                  <ExternalLink size={16} />
                  Open Google Drive
                </a>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}








/*
import React from "react";
import { X, ExternalLink } from "lucide-react";

export default function ResourceModal({
  open,
  title,
  resources,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">

        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="overflow-y-auto max-h-[70vh] p-6">

          {resources.length === 0 ? (

            <p className="text-gray-500">
              No resources available.
            </p>

          ) : (

            resources.map((item, index) => (

              <div
                key={index}
                className="border rounded-xl p-4 mb-4"
              >

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                {item.uploaded && (

                  <p className="text-sm text-gray-500 mt-1">
                    Uploaded : {item.uploaded}
                  </p>

                )}

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  <ExternalLink size={16} />

                  Open

                </a>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

*/