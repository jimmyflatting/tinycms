import React from "react";

export default function FormCard({ children }) {
    return (
        <div
            className={`max-w-1/3 bg-white rounded-lg shadow-lg text-gray-700 mb-8`}
        >
            {children}
        </div>
    );
}
