import React from "react";

export default function Card({ children, image = null, className = "" }) {
    return (
        <div
            className={`max-w-1/3 bg-white rounded-lg px-4 py-4 shadow-lg text-gray-700 mb-8 ${className}`}
        >
            {children}
        </div>
    );
}
