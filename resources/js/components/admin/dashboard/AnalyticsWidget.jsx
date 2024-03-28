import Card from "@/layouts/components/Card";
import React, { useState } from "react";
import Pages from "./Analytics/Pages";
import Sources from "./Analytics/Sources";
import Devices from "./Analytics/Devices";
import Graph from "./Analytics/Graph";

export default function AnalyticsWidget() {
    const [nDaysAgo, setNDaysAgo] = useState(7);

    const handleChange = (e) => {
        setNDaysAgo(parseInt(e.target.value)); // Convert the value to integer
    };

    return (
        <Card>
            <div className="flex flex-row justify-between">
                <h1>Analytics</h1>
                <select
                    className="rounded-lg border border-gray-300"
                    name="timeframe"
                    id=""
                    onChange={handleChange}
                >
                    <option value="7">7 dagar</option>
                    <option value="14">14 dagar</option>
                    <option value="30">30 dagar</option>
                </select>
            </div>
            <Graph nDaysAgo={nDaysAgo} />
            <div className="flex flex-row justify-between">
                <Pages nDaysAgo={nDaysAgo} />
                <Sources nDaysAgo={nDaysAgo} />
                <Devices nDaysAgo={nDaysAgo} />
            </div>
        </Card>
    );
}
