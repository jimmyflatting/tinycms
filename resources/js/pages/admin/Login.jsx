import React, { useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import { redirect } from "react-router-dom";

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

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onSuccess: () => {
                console.log("Welcome");
            },
        });
    };

    console.log(data);

    return (
        <div className="container h-[100vh] flex justify-center items-center w-full">
            <div className="w-full lg:w-1/2 p-5 shadow-lg rounded-lg">
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
                            onChange={onHandleChange}
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
                            onChange={onHandleChange}
                        />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                value={data.remember}
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                onChange={onHandleChange}
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Kom ihåg mig
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <a
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Glömt lösenord?
                        </a>

                        <button type="submit">Logga in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
