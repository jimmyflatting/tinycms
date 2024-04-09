import StaffTable from "@/components/admin/staff/StaffTable";
import UsersTable from "@/components/admin/users/UsersTable";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ ...props }) {
    return (
        <Auth>
            <Card className="flex flex-row justify-between">
                <h2 className="text-xl my-auto">Användare</h2>
                <button
                    className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
                    role="button"
                >
                    <Link href={route("admin.users.create")}>
                        Skapa ny användare
                    </Link>
                </button>
            </Card>
            <UsersTable users={props.users} />
        </Auth>
    );
}
