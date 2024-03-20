import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";

const PageBuilder = () => {
    const [blocks, setBlocks] = useState([]);
    const [selectedBlockType, setSelectedBlockType] = useState("text");

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
        slug: "",
    });

    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const addBlock = () => {
        let newBlock;
        switch (selectedBlockType) {
            case "text":
                newBlock = {
                    type: "text",
                    content: "Enter text here",
                };
                break;
            case "image":
                newBlock = {
                    type: "image",
                    src: "path_to_image.jpg",
                };
                break;
            // Add more block types as needed
            default:
                return;
        }
        setBlocks([...blocks, newBlock]);
        saveBlock(newBlock);
    };

    const saveBlock = (block) => {
        console.log("Saving block to backend:", block);
        console.log(blocks);
    };

    return (
        <div>
            <select
                value={selectedBlockType}
                onChange={(e) => setSelectedBlockType(e.target.value)}
            >
                <option value="text">Text Block</option>
                <option value="image">Image Block</option>
                {/* Add more options for other block types */}
            </select>
            <button
                type="button"
                onClick={addBlock}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Add Block
            </button>

            {blocks.map((block, index) => {
                switch (block.type) {
                    case "text":
                        return (
                            <TextBlock
                                key={index}
                                content={block.content}
                                block_id={index}
                            />
                        );
                    case "image":
                        return <ImageBlock key={index} src={block.src} />;
                    // Render other block types as needed
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default PageBuilder;
