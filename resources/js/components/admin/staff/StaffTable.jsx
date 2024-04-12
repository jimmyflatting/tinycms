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

export default function StaffTable({ staff }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Namn</TableHead>
                    <TableHead>Roll</TableHead>
                    <TableHead>Telefon</TableHead>
                    <TableHead className="text-right">E-post</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {staff.map((staff) => (
                    <TableRow key={staff.id}>
                        <TableCell className="flex flex-col">
                            <Link
                                className="font-medium"
                                href={route("admin.staff.edit", staff.id)}
                            >
                                {staff.name}
                            </Link>
                        </TableCell>
                        <TableCell>{staff.title}</TableCell>
                        <TableCell>{staff.phone}</TableCell>
                        <TableCell className="text-right">
                            {staff.email}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
