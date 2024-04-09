import Card from "@/layouts/components/Card";
import { Link } from "@inertiajs/react";
import React from "react";

export default function PagesTable({ pages, url }) {
    return (
        <Card>
            <table className="w-full">
                <thead className="border-b-2 border-gray-200">
                    <tr>
                        <th className="py-2">Sidnamn</th>
                        <th>Status</th>
                        <th>Senast ändrad</th>
                    </tr>
                </thead>
                <tbody>
                    {pages.map((page) => (
                        <tr
                            key={page.id}
                            className="border-b-2 border-gray-200 transition-all hover:bg-gray-100"
                        >
                            <td className="py-5">
                                <Link
                                    className="font-bold underline transition-all"
                                    href={route("admin.pages.edit", page.id)}
                                >
                                    <p>{page.title}</p>
                                </Link>

                                <a
                                    className="text-sm text-gray-500 underline transition-all"
                                    href={url + page.slug}
                                    target="__blank"
                                >
                                    {url}/{page.slug === "/" ? "" : page.slug}
                                </a>
                            </td>

                            <td>{page.status}</td>
                            <td>{page.formatted_updated_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
