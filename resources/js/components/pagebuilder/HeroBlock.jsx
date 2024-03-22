import React, { useState, useRef } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import HeroComponent from "../block/HeroComponent";

export default function HeroBlock({ id, onDataChange }) {
    const [values, setValues] = useState({
        title: "",
        content: "",
        variant: 1,
        imageUrl: "",
        emailButtonToggle: false,
        emailButton: {
            text: "",
            link: "",
        },

        extraButtonToggle: false,
        extraButton: {
            text: "",
            link: "",
        },
    });
    const [imageUrl, setImageUrl] = useState(null);
    const [showControls, setShowControls] = useState(false);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        onDataChange(id, values);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        uploadFile(selectedFile);
    };

    const uploadFile = (file) => {
        const formData = new FormData();
        formData.append("image", file);

        fetch("/api/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.url);
                setValues((prevValues) => ({
                    ...prevValues,
                    imageUrl: data.url,
                }));
            })
            .catch((error) => {
                console.error("Error uploading file:", error);
            });
    };

    const removeImage = () => {
        fetch("/api/remove-image", {
            method: "POST",
            body: JSON.stringify({ imageUrl }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setImageUrl("");
                setValues((prevValues) => ({
                    ...prevValues,
                    imageUrl: "",
                }));
            })
            .catch((error) => {
                console.error("Error removing image:", error);
            });
    };

    const handleFileDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);

            setFile(file);
            uploadFile(file);
        }
    };

    const imagePreview = (imgUrl) => {
        return (
            <div className="w-1/2 justify-end">
                <img
                    className="max-w-full rounded-lg"
                    src={imgUrl}
                    alt="Uploaded"
                />
                <button type="button" onClick={removeImage}>
                    Remove Image
                </button>
            </div>
        );
    };

    return (
        <>
            <div className="flex flex-col space-y-3">
                <div className="hero_variant">
                    <span className="mb-3">Variant:</span>
                    {radioButtons(id, handleChange)}
                </div>

                {imageHandler(
                    imageUrl,
                    removeImage,
                    handleFileChange,
                    handleFileDrop,
                    fileInputRef
                )}

                <div className="flex flex-col space-y-3">
                    <div className="flex flex-col">
                        <label>Rubrik:</label>
                        <input
                            name="title"
                            className="rounded-md"
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Content:</label>
                        <textarea
                            name="content"
                            className="rounded-md"
                            rows={5}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col">
                        <div className="space-x-3">
                            <label>Email:</label>
                            <input
                                name="emailButtonToggle"
                                className="rounded-md"
                                type="checkbox"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-x-3">
                            <label>Extra button:</label>
                            <input
                                name="extraButtonToggle"
                                className="rounded-md"
                                type="checkbox"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* PREVIEW SECTION */}
            <div className="">
                <HeroComponent props={values} />
            </div>
        </>
    );
}

const radioButtons = (id, handleChange) => {
    const [selectedOption, setSelectedOption] = useState(1);

    let radioButtons = [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
    ];

    return (
        <div className="flex flex-row w-full gap-2 rounded-xl bg-gray-200 p-2 mb-5">
            {radioButtons.map((radioButton, idx) => (
                <div className="w-full" key={idx}>
                    <input
                        type="radio"
                        name="variant"
                        id={radioButton.id}
                        value={radioButton.id}
                        className="peer hidden"
                        onChange={handleChange}
                        {...(radioButton.value === 1 && {
                            defaultChecked: true,
                        })}
                    />
                    <label
                        htmlFor={radioButton.id}
                        className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                        {radioButton.id}
                    </label>
                </div>
            ))}
        </div>
    );
};

const imageHandler = (
    imageUrl,
    removeImage,
    handleFileChange,
    handleFileDrop,
    fileInputRef,
    handleChange
) => {
    return (
        <div className="uploader-container">
            <div
                className={`uploader-skeleton bg-gray-200 w-full text-center py-10 rounded-lg ${
                    imageUrl ? "bg-cover bg-center bg-no-repeat" : ""
                }`}
                style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
            >
                {imageUrl ? (
                    <>
                        <div className="image-container z-10">
                            <div className="image-controls text-white font-bold">
                                <div
                                    className="upload-placeholder"
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={() =>
                                        handleFileChange({
                                            target: { files: [] },
                                        })
                                    }
                                >
                                    <IoCloudUploadOutline
                                        className="w-48 h-48 mx-auto"
                                        onClick={() =>
                                            fileInputRef.current.click()
                                        }
                                    />
                                    <div className="uploader-skeleton__text">
                                        Tryck eller dra och släpp för att
                                        ersätta bild
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="remove-button z-10 text-white font-bold bg-red-500 px-1 py-1 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                            onClick={removeImage}
                        >
                            <TiDelete className="w-6 h-6" />
                        </button>
                    </>
                ) : (
                    <div
                        className="upload-placeholder"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleFileDrop}
                        onClick={() => fileInputRef.current.click()}
                    >
                        <IoCloudUploadOutline className="w-48 h-48 mx-auto" />
                        <div className="uploader-skeleton__text">
                            Tryck eller dra och släpp för att ladda upp bild
                        </div>
                    </div>
                )}
            </div>
            <input
                name="imageUrl"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
            />
        </div>
    );
};
