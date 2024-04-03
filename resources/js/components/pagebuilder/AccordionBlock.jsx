import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

    const addAccordion = (e) => {
        e.preventDefault();
        setValues((prevValues) => [...prevValues, { title: "", content: "" }]);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const newValues = Array.from(values);
        const [removed] = newValues.splice(result.source.index, 1);
        newValues.splice(result.destination.index, 0, removed);

        setValues(newValues);
    };

    return (
        <>
            <div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="blocks">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {values.map((_, index) => (
                                    <AccordionItem
                                        key={index}
                                        index={index}
                                        values={values}
                                        handleChange={handleChange}
                                    />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
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
        <Draggable draggableId={`item-${index}`} index={index}>
            {(provided) => (
                <div
                    className="flex flex-col mb-5 space-y-3 p-5 border rounded-lg bg-gray-50 z-10"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="flex flex-row justify-between">
                        <span>objekt {index + 1}</span>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                            role="button"
                        >
                            Ta bort
                        </button>
                    </div>
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
            )}
        </Draggable>
    );
}
