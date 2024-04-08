import Card from "@/layouts/components/Card";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function StaffCreate() {
    const { data, setData, post } = useForm({
        avatar: "",
        name: "",
        title: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.staff.create"));
    };

    console.log(data);

    return (
        <Card>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col justify-between space-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="name">Namn</label>
                        <input
                            className="rounded-lg border border-gray-300 p-2"
                            type="text"
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
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Telefon</label>
                        <input
                            className="rounded-lg border border-gray-300 p-2"
                            type="text"
                            placeholder="Telefonnummer"
                            name="phone"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex-row justify-end space-x-5">
                    <button type="submit">Spara</button>
                </div>
            </form>
        </Card>
    );
}
