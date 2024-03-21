import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TiDelete } from "react-icons/ti";

const SliderBlock = ({ id, onDataChange }) => {
    const [images, setImages] = useState([]);

    const handleImageChange = (index, imageUrl) => {
        const newImages = [...images];
        newImages[index] = imageUrl;
        setImages(newImages);
        onDataChange(id, { images: newImages });
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const newImages = [...images];
        const [reorderedItem] = newImages.splice(result.source.index, 1);
        newImages.splice(result.destination.index, 0, reorderedItem);

        setImages(newImages);
        onDataChange(id, { images: newImages });
    };

    const uploadImages = (files) => {
        const promises = Array.from(files).map((file) => {
            const formData = new FormData();
            formData.append("image", file);

            return fetch("/api/upload", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .catch((error) => {
                    console.error("Error uploading image:", error);
                    return null;
                });
        });

        Promise.all(promises).then((uploadedImages) => {
            const newImages = [...images];
            uploadedImages.forEach((image) => {
                if (image) {
                    newImages.push(image.url);
                }
            });
            setImages(newImages);
            onDataChange(id, { images: newImages });
        });
    };

    const removeImage = (index) => {
        const imageUrl = images[index];
        if (!imageUrl) return;

        fetch("/api/remove-image", {
            method: "POST",
            body: JSON.stringify({ imageUrl }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const newImages = [...images];
                newImages.splice(index, 1);
                setImages(newImages);
                onDataChange(id, { images: newImages });
            })
            .catch((error) => {
                console.error("Error removing image:", error);
            });
    };

    return (
        <div>
            <label>Slider Images:</label>
            <input
                type="file"
                onChange={(e) => uploadImages(e.target.files)}
                multiple
                accept="image/*"
            />
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="images">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {images.map((imageUrl, index) => (
                                <Draggable
                                    key={imageUrl}
                                    draggableId={imageUrl}
                                    index={index}
                                    className="flex flex-row justify-between"
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <div>
                                                <img
                                                    src={imageUrl}
                                                    alt={`Image ${index + 1}`}
                                                    style={{
                                                        maxWidth: "100px",
                                                    }}
                                                />
                                                <button
                                                    type="button"
                                                    className="relative shadow-md bg-white hover:bg-red-600 text-gray-700 hover:text-white mx-auto text-center rounded-full transition ease-in-out duration-150"
                                                    onClick={() =>
                                                        removeImage(index)
                                                    }
                                                >
                                                    <TiDelete className="w-8 h-8" />
                                                </button>
                                            </div>
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
    );
};

export default SliderBlock;
