import { Link } from "@inertiajs/react";
import React from "react";
import { FaEdit } from "react-icons/fa";

export default function PagesTable({ props }) {
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
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="text-start">Sidnamn</th>
                    <th className="text-start">Status</th>
                    <th className="text-end">Redigera</th>
                </tr>
            </thead>
            <tbody>
                {pages.map((page) => (
                    <tr key={page.id} className="odd:bg-gray-100">
                        <td>
                            <p>{page.title}</p>
                        </td>
                        <td>
                            <p>Published</p>
                        </td>
                        <td className="text-end">
                            <Link
                                href={route("admin.pages.edit", page.id)}
                                as="button"
                                className="my-2 p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition ease-in-out duration-150"
                            >
                                <FaEdit />
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
