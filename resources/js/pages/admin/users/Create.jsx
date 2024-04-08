import React, { useState } from "react";
import Auth from "@/layouts/Auth";
import { useForm } from "@inertiajs/inertia-react";
import Card from "@/layouts/components/Card";

export default function Create({ ...props }) {
    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        avatar: "",
        role: "admin",
        title: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
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
                setData("avatar", data.url); // Set avatar field in form data
                console.log(data.url);
            })
            .catch((error) => {
                console.error("Error uploading file:", error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("admin.users.store"), {
            onSuccess: () => {
                console.log("success");
            },
        });
    };

    console.log(data);

    return (
        <Auth user={props.auth.user}>
            <Card>
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Skapa användare</h2>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-5"
                >
                    <div className="flex flex-col">
                        <label htmlFor="avatar">Avatar</label>
                        <input
                            className="border border-gray-300 p-2 rounded-lg"
                            type="file"
                            name="avatar"
                            id="avatar"
                            onChange={handleFileChange}
                        />
                        {errors.avatar && ( // Change errors.name to errors.avatar
                            <p className="text-red-500">{errors.avatar}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Namn</label>
                        <input
                            className="border border-gray-300 p-2 rounded-lg"
                            type="text"
                            name="name"
                            id="name"
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
                    <div className="flex flex-col">
                        <label htmlFor="password">Lösenord</label>
                        <input
                            className="border border-gray-300 p-2 rounded-lg"
                            placeholder="********"
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-lg"
                    >
                        {processing ? "Skapar användare..." : "Skapa användare"}
                    </button>
                </form>
            </Card>
        </Auth>
    );
}
