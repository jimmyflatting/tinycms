import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TiDelete } from "react-icons/ti";
import TextBlock from "../pagebuilder/TextBlock";
import ImageBlock from "../pagebuilder/ImageBlock";
import SliderBlock from "../pagebuilder/SliderBlock";
import WysiwygBlock from "../pagebuilder/WysiwygBlock";

const PageForm = () => {
    const [blocks, setBlocks] = useState([]);
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [selectedBlockType, setSelectedBlockType] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("published");
    let data = {
        title: title,
        slug: slug,
        blocks: blocks,
    };

    const { post, processing, errors } = useForm({
        title: title,
        slug: slug,
        blocks: blocks,
    });

    const addBlock = (type) => {
        if (type === "") return;

        setBlocks([...blocks, { id: blocks.length + 1, type: type, data: {} }]);
        setSelectedBlockType("");
    };

    const removeBlock = (id) => {
        const updatedBlocks = blocks.filter((block) => block.id !== id);
        setBlocks(updatedBlocks);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);

        const newSlug = e.target.value
            .toLowerCase()
            .replace(/å/g, "a")
            .replace(/ä/g, "a")
            .replace(/ö/g, "o")
            .replace(/ /g, "-");
        setSlug(newSlug);
    };

    const handleBlockDataChange = (blockId, data) => {
        const updatedBlocks = blocks.map((block) =>
            block.id === blockId ? { ...block, data } : block
        );
        setBlocks(updatedBlocks);
    };

    const handleBlockTypeChange = (e) => {
        setSelectedBlockType(e.target.value);
        addBlock(e.target.value);
    };

    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("form.submit"));
    };

    const renderBlockComponent = (block) => {
        switch (block.type) {
            case "text":
                return (
                    <TextBlock
                        key={block.id}
                        id={block.id}
                        onDataChange={handleBlockDataChange}
                    />
                );
            case "image":
                return (
                    <ImageBlock
                        key={block.id}
                        id={block.id}
                        onDataChange={handleBlockDataChange}
                    />
                );
            case "slider":
                return (
                    <SliderBlock
                        key={block.id}
                        id={block.id}
                        onDataChange={handleBlockDataChange}
                    />
                );
            case "WYSIWYG":
                return (
                    <WysiwygBlock
                        key={block.id}
                        id={block.id}
                        onDataChange={handleBlockDataChange}
                    />
                );

            default:
                return null;
        }
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const newBlocks = Array.from(blocks);
        const [removed] = newBlocks.splice(result.source.index, 1);
        newBlocks.splice(result.destination.index, 0, removed);

        setBlocks(newBlocks);
    };

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between mb-5 space-x-10">
                    <div className="flex flex-col w-full">
                        <input
                            className="w-full border p-2 rounded-lg"
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Kontakta oss"
                        />
                        <span>localhost:8000/{slug}</span>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <select
                            className="border p-2 rounded-lg h-10 pr-10"
                            value={selectedStatus}
                            onChange={handleStatusChange}
                        >
                            <option value="published">Publicerad</option>
                            <option value="draft">Draft</option>
                        </select>
                        <button
                            className="relative flex items-center justify-start bg-slate-500 hover:bg-gray-200 shadow-md text-white w-full h-10 mx-auto px-3 text-center mb-5 rounded-lg transition ease-in-out duration-150 space-x-2"
                            type="submit"
                        >
                            Spara
                        </button>
                    </div>
                </div>

                <div className="my-5">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="blocks">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {blocks.map((block, index) => (
                                        <Draggable
                                            key={block.id}
                                            draggableId={block.id.toString()}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="block-wrapper border p-3 mb-3 rounded-lg shadow-sm"
                                                >
                                                    <div className="flex flex-row justify-between">
                                                        <p>
                                                            {Capitalize(
                                                                block.type
                                                            )}
                                                        </p>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeBlock(
                                                                    block.id
                                                                )
                                                            }
                                                        >
                                                            <TiDelete className="w-6 h-6" />
                                                        </button>
                                                    </div>
                                                    {renderBlockComponent(
                                                        block
                                                    )}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>

                <hr />

                <div className="flex justify-end mt-5">
                    <select
                        className="border p-2 rounded-lg h-10 pr-10"
                        value={selectedBlockType}
                        onChange={handleBlockTypeChange}
                    >
                        <option value="">Lägg till block</option>
                        <option value="text">Text Block</option>
                        <option value="image">Image Block</option>
                        <option value="slider">Slider Block</option>
                        <option value="WYSIWYG">WYSIWYG Block</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default PageForm;
