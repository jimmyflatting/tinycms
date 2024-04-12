import SettingsEdit from "@/components/admin/Settings/SettingsEdit";
import { Card } from "@/components/ui/card";
import Auth from "@/layouts/Auth";
import React from "react";

export default function Index(...props) {
    let settings = props[0].settings;

    return (
        <Auth>
            <Card className="p-5">
                <SettingsEdit props={settings} />
            </Card>
        </Auth>
    );
}
