import StaffEdit from "@/components/admin/staff/StaffEdit";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import React from "react";

export default function Edit({ ...props }) {
    return (
        <Auth>
            <StaffEdit staff={props.staff} />
        </Auth>
    );
}
