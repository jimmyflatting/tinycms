import Card from "@/layouts/components/Card";
import { Link } from "@inertiajs/react";
import React from "react";

export default function UsersTable({ users }) {
    const Captilize = (role) => {
        return role.charAt(0).toUpperCase() + role.slice(1);
    };

    return (
        <Card>
            <table className="w-full">
                <thead className="border-b-2 border-gray-200">
                    <tr>
                        <th className="py-2">Namn</th>
                        <th>Roll</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="border-b-2 border-gray-200 transition-all hover:bg-gray-100"
                        >
                            <td className="py-5">
                                <Link
                                    className="font-bold underline transition-all"
                                    href={route("admin.users.edit", user.id)}
                                >
                                    {user.name}
                                </Link>
                            </td>

                            <td>
                                {user.role === "superadmin"
                                    ? "Admin"
                                    : Captilize(user.role)}
                            </td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
