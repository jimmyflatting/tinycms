import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function MenuBlock({ id, onDataChange }) {
    const [sections, setSections] = useState([
        {
            title: "",
            items: [
                {
                    title: "",
                    description: "",
                    price: "",
                },
            ],
        },
    ]);

    const handleSectionTitleChange = (sectionIndex, value) => {
        setSections((prevSections) => {
            const newSections = [...prevSections];
            newSections[sectionIndex].title = value;
            return newSections;
        });

        onDataChange(id, sections);
    };

    const handleChange = (sectionIndex, itemIndex, name, value) => {
        setSections((prevSections) => {
            const newSections = [...prevSections];
            newSections[sectionIndex].items[itemIndex][name] = value;
            return newSections;
        });

        onDataChange(id, sections);
    };

    const addSection = () => {
        setSections((prevSections) => [
            ...prevSections,
            {
                title: "",
                items: [
                    {
                        title: "",
                        description: "",
                        price: "",
                    },
                ],
            },
        ]);
    };

    const removeSection = (sectionIndex) => {
        setSections((prevSections) => {
            const newSections = [...prevSections];
            newSections.splice(sectionIndex, 1);
            return newSections;
        });
    };

    const addMenuItem = (sectionIndex) => {
        setSections((prevSections) => {
            const newSections = [...prevSections];
            newSections[sectionIndex].items.push({
                title: "",
                description: "",
                price: 0,
            });
            return newSections;
        });
    };

    const removeMenuItem = (sectionIndex, itemIndex) => {
        setSections((prevSections) => {
            const newSections = [...prevSections];
            newSections[sectionIndex].items.splice(itemIndex, 1);
            return newSections;
        });
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) return;

        const sourceSectionIndex = parseInt(source.droppableId);
        const destinationSectionIndex = parseInt(destination.droppableId);

        if (sourceSectionIndex === destinationSectionIndex) {
            // Reorder items within the same section
            const newSections = [...sections];
            const items = [...newSections[sourceSectionIndex].items];
            const [removed] = items.splice(source.index, 1);
            items.splice(destination.index, 0, removed);
            newSections[sourceSectionIndex].items = items;
            setSections(newSections);
        } else {
            // Move item between sections
            const newSections = [...sections];
            const sourceItems = [...newSections[sourceSectionIndex].items];
            const [removed] = sourceItems.splice(source.index, 1);
            const destinationItems = [
                ...newSections[destinationSectionIndex].items,
            ];
            destinationItems.splice(destination.index, 0, removed);
            newSections[sourceSectionIndex].items = sourceItems;
            newSections[destinationSectionIndex].items = destinationItems;
            setSections(newSections);
        }
    };

    return (
        <>
            <div>
                <DragDropContext onDragEnd={onDragEnd}>
                    {sections.map((section, sectionIndex) => (
                        <Droppable
                            key={sectionIndex}
                            droppableId={sectionIndex.toString()}
                        >
                            {(provided) => (
                                <div
                                    className="flex flex-col mb-5 space-y-3 p-5 border rounded-lg bg-gray-50 z-10"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <div className="flex flex-row justify-between">
                                        <input
                                            type="text"
                                            placeholder="Section title"
                                            value={section.title}
                                            className="border p-2 rounded-lg mb-2 px-3"
                                            onChange={(e) =>
                                                handleSectionTitleChange(
                                                    sectionIndex,
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <button
                                            role="button"
                                            className="px-4 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700"
                                            onClick={() =>
                                                removeSection(sectionIndex)
                                            }
                                        >
                                            Remove Section
                                        </button>
                                    </div>
                                    {section.items.map((item, itemIndex) => (
                                        <MenuItem
                                            key={itemIndex}
                                            sectionIndex={sectionIndex}
                                            itemIndex={itemIndex}
                                            item={item}
                                            handleChange={handleChange}
                                            removeItem={() =>
                                                removeMenuItem(
                                                    sectionIndex,
                                                    itemIndex
                                                )
                                            }
                                        />
                                    ))}
                                    {provided.placeholder}
                                    <div className="flex flex-row justify-end">
                                        <button
                                            role="button"
                                            className="px-4 py-2 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300"
                                            onClick={() =>
                                                addMenuItem(sectionIndex)
                                            }
                                        >
                                            Add Item
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))}
                    <button
                        role="button"
                        role="button"
                        className="px-4 py-2 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300"
                        onClick={addSection}
                    >
                        Add Section
                    </button>
                </DragDropContext>
            </div>
        </>
    );
}

function MenuItem({ sectionIndex, itemIndex, item, handleChange, removeItem }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(sectionIndex, itemIndex, name, value);
    };

    return (
        <Draggable
            draggableId={`${sectionIndex}-${itemIndex}`}
            index={itemIndex}
        >
            {(provided) => (
                <div
                    className="border p-5 rounded-lg bg-white z-20"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="flex flex-row justify-between mb-3">
                        <input
                            className="border p-2 rounded-lg px-3"
                            type="text"
                            name="title"
                            placeholder="Maträtt"
                            value={item.title}
                            onChange={handleInputChange}
                        />
                        <input
                            className="border p-2 rounded-lg px-3"
                            type="number"
                            name="price"
                            placeholder="Pris"
                            value={item.price}
                            onChange={handleInputChange}
                        />
                        <button
                            role="button"
                            className="px-4 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700"
                            onClick={removeItem}
                        >
                            Remove
                        </button>
                    </div>
                    <textarea
                        className="w-full border p-2 rounded-lg mb-2 px-3"
                        name="description"
                        rows="3"
                        placeholder="Beskrivning"
                        value={item.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
            )}
        </Draggable>
    );
}
