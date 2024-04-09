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

export default function PagesTable({ pages, url }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Sidnamn</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Senast ändrad</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {pages.map((page) => (
                    <TableRow key={page.id}>
                        <TableCell className="flex flex-col">
                            <Link
                                className="font-medium"
                                href={route("admin.pages.edit", page.id)}
                            >
                                {page.title}
                            </Link>
                        </TableCell>
                        <TableCell>{page.status}</TableCell>
                        <TableCell className="text-right">
                            {page.formatted_updated_at}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
