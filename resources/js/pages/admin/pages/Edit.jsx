import PageEdit from "@/components/admin/PageEdit";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import React from "react";

export default function Edit({ ...props }) {
    return (
        <Auth user={props.auth.user}>
            <Card>
                <PageEdit props={props} />
            </Card>
        </Auth>
    );
}
