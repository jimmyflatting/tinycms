import React, { useState, useRef } from "react";
import Auth from "@/layouts/Auth";
import { useForm } from "@inertiajs/inertia-react";
import Card from "@/layouts/components/Card";
import { useEffect } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { set } from "lodash";
import PasswordChange from "@/components/admin/users/PasswordChange";

export default function Edit({ ...props }) {
    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const { data, setData, put, processing, errors } = useForm({});

    useEffect(() => {
        fetch(`/api/staff/${props.user.id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setImageUrl(data.avatar);
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
            });
    }, []);

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
                setData("avatar", imageUrl);
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
                handleChange("avatar", data.url);
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
            <div className="justify-end">
                <img className=" rounded-lg" src={imgUrl} alt="Uploaded" />
                <button type="button" onClick={removeImage}>
                    Remove Image
                </button>
            </div>
        );
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("admin.users.update", data.id));
    };

    return (
        <Auth user={props.auth.user}>
            <Card>
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Redigera användare</h2>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-5"
                >
                    <div className="flex flex-col">
                        {imageHandler(
                            imageUrl,
                            removeImage,
                            handleFileChange,
                            handleFileDrop,
                            fileInputRef
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Namn</label>
                        <input
                            className="border border-gray-300 p-2 rounded-lg"
                            type="text"
                            name="name"
                            id="name"
                            value={data.name}
                            placeholder="Ex. John Doe"
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="title">Titel</label>
                        <input
                            className="border border-gray-300 p-2 rounded-lg"
                            type="text"
                            name="title"
                            id="title"
                            value={data.title}
                            placeholder="Ex. Webbutvecklare"
                            onChange={handleChange}
                        />
                        {errors.title && (
                            <p className="text-red-500">{errors.name}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="role">Roll</label>
                        <select
                            className="border border-gray-300 p-2 rounded-lg"
                            name="role"
                            id=""
                            onChange={handleChange}
                            value={data.role}
                        >
                            <option value="admin">Admin</option>
                            <option value="editor">Användare</option>
                        </select>
                        {errors.role && (
                            <p className="text-red-500">{errors.name}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            value={data.email}
                            className="border border-gray-300 p-2 rounded-lg"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Ex. john.doe@company.com"
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-lg"
                    >
                        {processing ? "Sparar användare..." : "Spara användare"}
                    </button>
                </form>
            </Card>
            <PasswordChange user={data} />
        </Auth>
    );
}

const imageHandler = (
    imageUrl,
    removeImage,
    handleFileChange,
    handleFileDrop,
    fileInputRef,
    handleChange
) => {
    return (
        <div className="uploader-container flex justify-center">
            <div
                className={`uploader-skeleton bg-gray-200 text-center py-10 rounded-full w-48 h-48 shadow-lg hover:scale-105 transition-all cursor-pointer ${
                    imageUrl ? "bg-cover bg-center bg-no-repeat" : ""
                }`}
                style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
            >
                {imageUrl ? (
                    <>
                        <div className="upload-placeholder h-full items-center justify-center flex-col hidden hover:flex">
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
                                        className="w-12 h-12 mx-auto my-auto"
                                        onClick={() =>
                                            fileInputRef.current.click()
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div
                        className="upload-placeholder h-full items-center justify-center flex flex-col"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleFileDrop}
                        onClick={() => fileInputRef.current.click()}
                    >
                        <IoCloudUploadOutline className="w-12 h-12" />
                    </div>
                )}
            </div>
            <input
                name="avatar"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
            />
        </div>
    );
};
