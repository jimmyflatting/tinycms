import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import React from "react";

export default function Admin({ ...props }) {
    console.log(props);
    return (
        <Auth user={props.auth.user}>
            <Card>
                <h1 className="text-2xl">Admin Dashboard</h1>
                <p className="text-gray-500">Welcome to the admin dashboard.</p>
            </Card>
            <Card>
                <h1 className="text-2xl">Admin Dashboard</h1>
                <p className="text-gray-500">Welcome to the admin dashboard.</p>
            </Card>
        </Auth>
    );
}
