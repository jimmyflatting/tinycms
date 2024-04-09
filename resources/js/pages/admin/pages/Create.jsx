import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import React from "react";

export default function Create({ ...props }) {
    return (
        <Auth>
            <Card>
                <PageForm props={props} />
            </Card>
        </Auth>
    );
}
