import React, { useState } from "react";

export default function AccordionBlock({ id, onDataChange }) {
    const [values, setValues] = useState([{ title: "", content: "" }]);

    const handleChange = (index, name, value) => {
        setValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index][name] = value;
            return newValues;
        });

        onDataChange(id, values);
    };

    const addAccordion = () => {
        setValues((prevValues) => [...prevValues, { title: "", content: "" }]);
    };

    console.log(values);

    return (
        <>
            {values.map((_, index) => (
                <AccordionItem
                    key={index}
                    index={index}
                    values={values}
                    handleChange={handleChange}
                />
            ))}
            <div className="flex flex-row justify-end">
                <button
                    role="button"
                    className="px-4 py-2 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300"
                    onClick={addAccordion}
                >
                    Add accordion
                </button>
            </div>
        </>
    );
}

function AccordionItem({ index, values, handleChange }) {
    const item = values[index];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(index, name, value);
    };

    return (
        <div className="flex flex-col mb-5 space-y-3">
            <input
                className="w-full border p-2 rounded-lg px-3"
                type="text"
                name="title"
                placeholder="Title"
                value={item.title}
                onChange={handleInputChange}
            />
            <textarea
                className="w-full border p-2 rounded-lg mb-2 px-3"
                name="content"
                rows="3"
                placeholder="Content"
                value={item.content}
                onChange={handleInputChange}
            ></textarea>
        </div>
    );
}
