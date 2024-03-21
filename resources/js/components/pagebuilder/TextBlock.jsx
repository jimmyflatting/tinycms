import React, { useState } from "react";

const TextBlock = ({ id, onDataChange }) => {
    const [values, setValues] = useState({
        text: "",
    });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setValues((prevValues) => ({
            ...prevValues,
            [key]: value,
        }));

        onDataChange(id, { ...values, [key]: value });
    };

    return (
        <div className="block-wrapper flex flex-col">
            <textarea
                name="text"
                onChange={handleChange}
                rows={10}
                className="border rounded-lg p-2 w-full"
            ></textarea>
        </div>
    );
};

export default TextBlock;
