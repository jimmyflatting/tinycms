import Card from "@/layouts/components/Card";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import { useState } from "react";

export default function PasswordChange({ user }) {
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    const { data, setData, put, processing, errors } = useForm({
        oldPassword: "",
        password: "",
        id: user.id,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Card>
            <div className="flex justify-between mb-5">
                <h2 className="text-2xl font-bold">Uppdatera lösenord</h2>
            </div>
            <form
                className="flex flex-col space-y-5"
                onSubmit={handlePasswordSubmit}
            >
                <div className="flex flex-col">
                    <label htmlFor="password">Gammalt lösenord</label>
                    <input
                        className="border border-gray-300 p-2 rounded-lg"
                        type="password"
                        name="oldPassword"
                        id="password"
                        placeholder="********"
                        onChange={handleChange}
                    />
                    {errors.oldPassword && (
                        <p className="text-red-500">{errors.password}</p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Nytt lösenord</label>
                    <input
                        className="border border-gray-300 p-2 rounded-lg"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Ange nytt lösenord igen</label>
                    <input
                        className="border border-gray-300 p-2 rounded-lg"
                        type="password"
                        name="checkPassword"
                        id="password"
                        placeholder="********"
                        onChange={handleChange}
                    />
                    {!passwordsMatch && (
                        <p className="text-red-500 text-center mt-5">
                            Lösenorden överensstämmer ej
                        </p>
                    )}
                </div>
                <button
                    className="bg-blue-500 text-white p-2 rounded-lg"
                    role="button"
                    onClick={handlePasswordSubmit}
                >
                    Spara lösenord
                </button>
            </form>
        </Card>
    );
}
