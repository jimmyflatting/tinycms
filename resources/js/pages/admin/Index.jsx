import Auth from "@/layouts/Auth";
import React from "react";

export default function Admin({ ...props }) {
    console.log(props);
    return (
        <Auth user={props.auth.user}>
            <div>Admin</div>
        </Auth>
    );
}
