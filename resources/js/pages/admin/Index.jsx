import AnalyticsWidget from "@/components/admin/dashboard/AnalyticsWidget";
import GreetingsWidget from "@/components/admin/dashboard/GreetingsWidget";
import NewsWidget from "@/components/admin/dashboard/NewsWidget";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import React from "react";

export default function Admin({ ...props }) {
    // console.log(props);
    return (
        <Auth>
            <GreetingsWidget props={props.auth.user.name} />
            <NewsWidget />
            <AnalyticsWidget />
        </Auth>
    );
}
