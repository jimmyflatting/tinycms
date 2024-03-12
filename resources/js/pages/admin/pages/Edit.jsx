import PageEdit from "@/components/admin/PageEdit";
import Auth from "@/layouts/Auth";
import React from "react";

export default function Edit({ ...props }) {
    return (
        <Auth user={props.auth.user}>
            <PageEdit props={props} />
        </Auth>
    );
}
