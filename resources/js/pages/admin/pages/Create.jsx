import PageForm from "@/components/admin/PageForm";
import Auth from "@/layouts/Auth";
import React from "react";

export default function Create({ ...props }) {
    return (
        <Auth user={props.auth.user}>
            <PageForm props={props} />
        </Auth>
    );
}
