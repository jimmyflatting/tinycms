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

    const Capitalize = (str) => {
        if (str === "published") {
            str = "Publicerad";
        } else if (str === "draft") {
            str = "Utkast";
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="text-start pl-5">Sidnamn</th>
                    <th className="text-start">Status</th>
                    <th className="text-end pr-5">Redigera</th>
                </tr>
            </thead>
            <tbody>
                {pages.map((page, idx) => (
                    <tr key={page.id} className={`odd:bg-gray-100`}>
                        <td className="pl-5">
                            <p>{page.title}</p>
                        </td>
                        <td>
                            <p>{Capitalize(page.status)}</p>
                        </td>
                        <td className="text-end pr-5">
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
