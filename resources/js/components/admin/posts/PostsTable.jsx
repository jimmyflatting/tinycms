import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "@inertiajs/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function PostsTable({ posts }) {
    console.log(posts);

    const handleStatus = (status) => {
        if (status === "published") {
            return "Publicerad";
        } else if (status === "draft") {
            return "Utkast";
        } else {
            return status;
        }
    };

    const capilize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // return null;
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Inlägg</TableHead>
                        <TableHead>Kategori</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">
                            Senast ändrad
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.data.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell className="flex flex-col">
                                <Link
                                    className="font-medium"
                                    href={route("admin.posts.edit", post.id)}
                                >
                                    {post.title}
                                </Link>
                            </TableCell>
                            <TableCell>
                                {capilize(post.category.category_name)}
                            </TableCell>
                            <TableCell>{handleStatus(post.status)}</TableCell>
                            <TableCell className="text-right">
                                {post.formatted_updated_at}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* PAGINATION */}

            <Pagination className="my-3">
                <PaginationContent>
                    {posts.current_page > 1 && (
                        <>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={posts.prev_page_url}
                                />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href={posts.prev_page_url}>
                                    {posts.current_page - 1}
                                </PaginationLink>
                            </PaginationItem>
                        </>
                    )}
                    <PaginationItem>
                        <PaginationLink
                            className="border"
                            href={posts.path + "/?page=" + posts.current_page}
                        >
                            {posts.current_page}
                        </PaginationLink>
                    </PaginationItem>
                    {posts.last_page > posts.current_page && (
                        <>
                            <PaginationItem>
                                <PaginationLink href={posts.next_page_url}>
                                    {posts.current_page + 1}
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href={posts.next_page_url} />
                            </PaginationItem>
                        </>
                    )}
                </PaginationContent>
            </Pagination>
        </>
    );
}
