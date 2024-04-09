import Card from "@/layouts/components/Card";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function StaffEdit({ staff }) {
    const {
        data,
        setData,
        put,
        delete: destroy,
    } = useForm({
        avatar: staff.avatar,
        name: staff.name,
        title: staff.title,
        email: staff.email,
        phone: staff.phone,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleDelete = (e) => {
        e.preventDefault();

        const isConfirmed = confirm(
            `Är du säker att du vill ta bort ${staff.name}?`
        );

        if (isConfirmed) {
            destroy(route("admin.staff.destroy", staff.id));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.staff.update", staff.id));
    };

    return (
        <Card>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-5">
                    <img
                        src={staff.avatar}
                        alt=""
                        className="rounded-full w-20 h-20 mx-auto"
                    />
                    <input
                        className="rounded-lg border border-gray-300 p-2"
                        type="upload"
                        defaultValue={staff.avatar}
                        name="avatar"
                    />
                </div>
                <div className="flex flex-col justify-between space-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="name">Namn</label>
                        <input
                            className="rounded-lg border border-gray-300 p-2"
                            type="text"
                            defaultValue={staff.name}
                            placeholder="Namn"
                            name="name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Roll</label>
                        <input
                            className="rounded-lg border border-gray-300 p-2"
                            type="text"
                            defaultValue={staff.title}
                            placeholder="Titel"
                            name="title"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between space-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="name">Email</label>
                        <input
                            className="rounded-lg border border-gray-300 p-2"
                            name="email"
                            type="text"
                            defaultValue={staff.email}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Telefon</label>
                        <input
                            className="rounded-lg border border-gray-300 p-2"
                            type="text"
                            defaultValue={staff.phone}
                            placeholder="Telefonnummer"
                            name="phone"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-end space-x-5">
                    <button
                        className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-all"
                        role="button"
                        onClick={handleDelete}
                    >
                        Ta bort
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all"
                        type="submit"
                    >
                        Spara
                    </button>
                </div>
            </form>
        </Card>
    );
}
