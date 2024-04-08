import Card from "@/layouts/components/Card";
import { Link } from "@inertiajs/react";
import React from "react";

export default function StaffTable({ staff }) {
    console.log(staff);
    return (
        <Card>
            <table className="w-full">
                <thead className="border-b-2 border-gray-200">
                    <tr>
                        <th className="py-2">Namn</th>
                        <th>Roll</th>
                        <th>Telefon</th>
                        <th>E-post</th>
                    </tr>
                </thead>
                <tbody>
                    {staff.map((staff) => (
                        <tr
                            key={staff.id}
                            className="border-b-2 border-gray-200 transition-all hover:bg-gray-100"
                        >
                            <td className="py-5">
                                <Link
                                    className="font-bold underline transition-all"
                                    href={route("admin.staff.edit", staff.id)}
                                >
                                    {staff.name}
                                </Link>
                            </td>

                            <td>{staff.title}</td>
                            <td>{staff.phone}</td>
                            <td>{staff.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
