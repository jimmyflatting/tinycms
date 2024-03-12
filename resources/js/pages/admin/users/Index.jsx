import Auth from "@/layouts/Auth";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ ...props }) {
    let users = props.users;
    console.log(users);

    const handleDelete = (id) => {
        if (confirm("Är du säker på att du vill radera användaren?")) {
            axios.delete(route("admin.users.destroy", id)).then(() => {
                axios.get(route("admin.users.index")).then((response) => {
                    users = response.data;
                });
            });
        }
    };

    return (
        <Auth user={props.auth.user}>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Användare</h2>

                <Link href={route("admin.users.create")} as="button">
                    Skapa ny användare
                </Link>
            </div>
            <table className="table-auto bg-gray-50  w-full">
                <thead>
                    <tr>
                        <th>Namn</th>
                        <th>Email</th>
                        <th>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="odd:bg-gray-200">
                            <td className="">
                                <Link
                                    className="my-auto flex items-center space-x-3"
                                    href={route("admin.users.edit", user.id)}
                                >
                                    <img
                                        src="https://via.placeholder.com/150x150"
                                        alt={user.name}
                                        className="rounded-full w-10 h-10 object-cover cursor-pointer"
                                    />
                                    <p>{user.name}</p>
                                </Link>
                            </td>
                            <td>{user.email}</td>
                            <td className="">
                                <Link
                                    href={route("admin.users.edit", user.id)}
                                    as="button"
                                    className="underline underline-offset-2"
                                >
                                    Edit
                                </Link>
                                <Link
                                    className="mx-2 lg:mx-5"
                                    onClick={() => handleDelete(user.id)}
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
