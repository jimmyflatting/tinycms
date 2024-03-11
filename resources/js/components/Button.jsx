import React from "react";

export default function Button({
    children,
    type,
    className,
    disabled,
    loading,
    ...props
}) {
    return (
        <button
            type={type}
            className={`ml-4 border px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${className}`}
        >
            {children}
        </button>
    );
}
