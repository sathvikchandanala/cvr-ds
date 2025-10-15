import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl relative">
                {/* Header */}
                <div className="flex justify-between items-center border-b px-4 py-2">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
