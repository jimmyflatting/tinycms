import React, { useState } from "react";

const ImageBlock = ({ id, onDataChange }) => {
    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        // You can upload the file here
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
                onDataChange(id, { imageUrl: data.url });
            })
            .catch((error) => {
                console.error("Error uploading file:", error);
            });
    };

    const removeImage = () => {
        // Send a request to your backend to delete the image file
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
                onDataChange(id, { imageUrl: "" });
            })
            .catch((error) => {
                console.error("Error removing image:", error);
            });
    };

    return (
        <div>
            <label>Image:</label>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            {imageUrl && (
                <div>
                    <img
                        src={imageUrl}
                        alt="Uploaded"
                        style={{ maxWidth: "100%" }}
                    />
                    <button type="button" onClick={removeImage}>
                        Remove Image
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageBlock;
