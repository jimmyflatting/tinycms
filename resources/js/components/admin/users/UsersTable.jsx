import { Link } from "@inertiajs/react";
import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function UsersTable({ users }) {
    const Captilize = (role) => {
        return role.charAt(0).toUpperCase() + role.slice(1);
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Namn</TableHead>
                    <TableHead>Roll</TableHead>
                    <TableHead className="text-right">E-post</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className="flex flex-col">
                            <Link
                                className="font-medium"
                                href={route("admin.users.edit", user.id)}
                            >
                                {user.name}
                            </Link>
                        </TableCell>
                        <TableCell>
                            {user.role === "superadmin"
                                ? "Admin"
                                : Captilize(user.role)}
                        </TableCell>
                        <TableCell className="text-right">
                            {user.email}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
