import Auth from "@/layouts/Auth";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ ...props }) {
    let pages = props.pages;
    console.log(pages);

    const handleDelete = (id) => {
        if (confirm("Är du säker på att du vill radera sidan?")) {
            axios.delete(route("admin.pages.destroy", id)).then(() => {
                axios.get(route("admin.pages.index")).then((response) => {
                    pages = response.data;
                });
            });
        }
    };

    return (
        <Auth user={props.auth.user}>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Sidor</h2>

                <Link href={route("admin.pages.create")} as="button">
                    Skapa ny sida
                </Link>
            </div>
            <table className="table-auto bg-gray-50  w-full">
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Slug</th>
                        <th>Senast ändrad</th>
                        <th>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {pages.map((page) => (
                        <tr key={page.id} className="odd:bg-gray-200">
                            <td>
                                <Link
                                    className=""
                                    href={route("admin.pages.edit", page.id)}
                                >
                                    {page.title}
                                </Link>
                            </td>
                            <td className="text-sm">
                                <a
                                    href={props.ziggy.url + "/" + page.slug}
                                    target="__blank"
                                >
                                    {page.slug}
                                </a>
                            </td>
                            <td>
                                {page.formatted_updated_at
                                    ? page.formatted_updated_at
                                    : "NULL"}
                            </td>
                            <td className="">
                                <Link
                                    href={route("admin.pages.edit", page.id)}
                                    as="button"
                                    className="underline underline-offset-2"
                                >
                                    Edit
                                </Link>
                                <Link
                                    className="mx-2 lg:mx-5"
                                    onClick={() => handleDelete(page.id)}
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Auth>
    );
}
