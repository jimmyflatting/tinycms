import Auth from "@/layouts/Auth";
import React from "react";
import { useForm } from "@inertiajs/inertia-react";

export default function Edit({ ...props }) {
    const { data, setData, post, processing, errors } = useForm({
        name: props.user.name,
        email: props.user.email,
        password: null,
        image: "",
    });

    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        put(route("admin.user.update", props.user.id), {
            onSuccess: () => {
                console.log("success");
            },
        });
    };

    const handleDelete = (id) => {
        if (confirm("Är du säker på att du vill radera användaren?")) {
            axios.delete(route("admin.users.destroy", id));
        }
    };

    return (
        <Auth user={props.auth.user}>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Ändra användare</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-3">
                    <label htmlFor="name">Namn</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        defaultValue={props.user.name}
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}
                </div>
                <div className="flex flex-col space-y-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        defaultValue={props.user.email}
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                    )}
                </div>
                <div className="flex flex-col space-y-3">
                    <label htmlFor="password">Lösenord</label>
                    <input
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
            <span onClick={handleDelete(props.user.id)}>I</span>
        </Auth>
    );
}
