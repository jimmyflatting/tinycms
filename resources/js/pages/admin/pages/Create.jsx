import PageForm from "@/components/admin/PageForm";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import React from "react";

export default function Create({ ...props }) {
    return (
        <Auth user={props.auth.user}>
            <Card>
                <PageForm props={props} />
            </Card>
        </Auth>
    );
}
