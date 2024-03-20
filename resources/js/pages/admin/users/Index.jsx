import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import FormCard from "@/layouts/components/FormCard";
import { Link } from "@inertiajs/react";
import React from "react";
import { IoCreate } from "react-icons/io5";

export default function Index({ ...props }) {
    let users = props.users;
    console.log(users);

    return (
        <Auth>
            <Card>
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Användare</h2>

                    <Link
                        href={route("admin.users.create")}
                        as="button"
                        className="flex flex-row space-x-3 bg-gray-200 hover:bg-gray-50 shadow-md text-gray-700 md:w-16 md:h-16 rounded-lg transition ease-in-out duration-150 px-5"
                    >
                        <IoCreate className="mx-auto my-auto scale-125" />
                        <p className="my-auto">Skapa ny användare</p>
                    </Link>
                </div>
            </Card>
            <FormCard>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="text-start">Namn</th>
                            <th className="text-start">Email</th>
                            <th className="text-start">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="odd:bg-gray-200">
                                <td className="">
                                    <Link
                                        href={route(
                                            "admin.users.edit",
                                            user.id
                                        )}
                                    >
                                        <p>{user.name}</p>
                                    </Link>
                                </td>
                                <td>{user.email}</td>
                                <td className="">
                                    <Link
                                        href={route(
                                            "admin.users.edit",
                                            user.id
                                        )}
                                        as="button"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </FormCard>
        </Auth>
    );
}
