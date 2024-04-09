import PageForm from "@/components/pages/PageForm";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import React from "react";

export default function Edit({ ...props }) {
    return (
        <Auth user={props.auth.user}>
            <Card>
                <PageForm props={props} />
            </Card>
        </Auth>
    );
}
