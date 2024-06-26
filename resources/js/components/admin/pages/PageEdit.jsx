import React, { useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/react";

export default function PageEdit({ props }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        title: props.page.title,
        content: props.page.content,
        slug: props.page.slug,
    });

    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.pages.update", props.page.id));
    };

    const handleDelete = (id) => {
        if (confirm("Är du säker på att du vill radera sidan?")) {
            axios.delete(route("admin.pages.destroy", id));
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Redigera sida
                        </h2>

                        <div className="space-y-8">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Titel
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            autoComplete="title"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Kontakta oss"
                                            onChange={handleChange}
                                            defaultValue={props.page.title}
                                        />
                                    </div>
                                    <input
                                        hidden
                                        type="text"
                                        name="slug"
                                        value={data.title
                                            .toLowerCase()
                                            .replace(/å/g, "a")
                                            .replace(/ä/g, "a")
                                            .replace(/ö/g, "o")
                                            .replace(/ /g, "-")}
                                        onChange={handleChange}
                                    />
                                    <span className="flex select-none items-center pl-2 pt-1.5 text-gray-400 sm:text-sm">
                                        localhost:3000/
                                        {data.title
                                            .toLowerCase()
                                            .replace(/å/g, "a")
                                            .replace(/ä/g, "a")
                                            .replace(/ö/g, "o")
                                            .replace(/ /g, "-")}
                                    </span>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="content"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Content
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="content"
                                        name="content"
                                        rows={10}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={props.page.content}
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="justify-start">
                        <Link
                            onClick={() => handleDelete(props.page.id)}
                            as="button"
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Delete
                        </Link>
                    </div>
                    <div className="justify-end space-x-4">
                        <Link
                            href={route("admin.pages.index")}
                            as="button"
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Avbryt
                        </Link>

                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Spara
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
