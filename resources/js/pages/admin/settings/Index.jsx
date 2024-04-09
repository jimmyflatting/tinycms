import SettingsEdit from "@/components/admin/Settings/SettingsEdit";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import React from "react";

export default function Index(...props) {
    let settings = props[0].settings;

    return (
        <Auth user={props[0].auth.user}>
            <Card>
                <SettingsEdit props={settings} />
            </Card>
        </Auth>
    );
}
