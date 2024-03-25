import Card from "@/layouts/components/Card";
import React from "react";

export default function AnalyticsWidget() {
    return (
        <>
            <Card>
                <h1>Analytics</h1>
                <div>TRENDLINJE</div>
                <div className="flex flex-row justify-between">
                    <div>Pages</div>
                    <div>Trafikkälla</div>
                    <div>Devices</div>
                </div>
            </Card>
        </>
    );
}
