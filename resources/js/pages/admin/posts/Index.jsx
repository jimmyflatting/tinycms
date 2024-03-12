import Auth from "@/layouts/Auth";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ ...props }) {
    let posts = props.posts;
    console.log(posts);

    const handleDelete = (id) => {
        if (confirm("Är du säker på att du vill radera posten?")) {
            axios.delete(route("admin.posts.destroy", id)).then(() => {
                axios.get(route("admin.posts.index")).then((response) => {
                    posts = response.data;
                });
            });
        }
    };

    return (
        <Auth user={props.auth.user}>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Posts</h2>

                <Link href={route("admin.posts.create")} as="button">
                    Skapa ny post
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
                    {posts.map((post) => (
                        <tr key={post.id} className="odd:bg-gray-200">
                            <td>
                                <Link
                                    className=""
                                    href={route("admin.posts.edit", post.id)}
                                >
                                    {post.title}
                                </Link>
                            </td>
                            <td className="text-sm">
                                <a
                                    href={
                                        props.ziggy.url +
                                        "/" +
                                        post.category.category_name +
                                        "/" +
                                        post.slug
                                    }
                                    target="__blank"
                                >
                                    {post.slug}
                                </a>
                            </td>
                            <td>
                                {post.formatted_updated_at
                                    ? post.formatted_updated_at
                                    : "NULL"}
                            </td>
                            <td className="">
                                <Link
                                    href={route("admin.posts.edit", post.id)}
                                    as="button"
                                    className="underline underline-offset-2"
                                >
                                    Edit
                                </Link>
                                <Link
                                    className="mx-2 lg:mx-5"
                                    onClick={() => handleDelete(post.id)}
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
