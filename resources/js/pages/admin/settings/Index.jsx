import SettingsEdit from "@/components/admin/SettingsEdit";
import Auth from "@/layouts/Auth";
import React from "react";

export default function Index(...props) {
    let settings = props[0].settings;

    return (
        <Auth user={props[0].auth.user}>
            <SettingsEdit props={settings} />
        </Auth>
    );
}
