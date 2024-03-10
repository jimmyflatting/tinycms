import PageList from "@/components/admin/PageList";
import Auth from "@/layouts/Auth";
import React from "react";

export default function Pages({ ...props }) {
    return (
        <>
            <Auth user={props.auth.user}>
                <PageList props={props} />
            </Auth>
        </>
    );
}
