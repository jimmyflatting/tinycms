import Card from "@/layouts/components/Card";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pages from "./Analytics/Pages";
import Sources from "./Analytics/Sources";
import Devices from "./Analytics/Devices";
import Graph from "./Analytics/Graph";

export default function AnalyticsWidget() {
    const [nDaysAgo, setNDaysAgo] = useState(7);

    return (
        <>
            <Card>
                <h1>Analytics</h1>
                <Graph nDaysAgo={nDaysAgo} />
                <div className="flex flex-row justify-between">
                    <Pages nDaysAgo={nDaysAgo} />
                    <Sources nDaysAgo={nDaysAgo} />
                    <Devices nDaysAgo={nDaysAgo} />
                </div>
            </Card>
        </>
    );
}
