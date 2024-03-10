import React, { useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleInputChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <div className="container h-[100vh]">
            <div className="w-1/3 p-5 shadow-lg rounded-lg mx-auto">
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            autoFocus
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password">Lösenord</label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={data.remember}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Kom ihåg mig
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <a
                            href="password-request"
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Glömt lösenord?
                        </a>

                        <button
                            type="submit"
                            className="ml-4"
                            disabled={processing}
                        >
                            Logga in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
