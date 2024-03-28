import React, { useState, useEffect } from "react";

export default function Pages({ nDaysAgo }) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "api/analytics?nDaysAgo=" +
                    nDaysAgo +
                    "&dimension=pageTitle&metric=sessions"
            );
            const data = await response.json();
            setData(data.slice(0, 5));
        } catch (error) {
            console.error("Error fetching analytics data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [nDaysAgo]);

    return (
        <div className="">
            <h2 className="text-lg font-bold border-b mb-3">
                Mest besökta sidor de senaste {nDaysAgo} dagarna
            </h2>
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index} className="flex justify-between mb-1">
                            <span>{item.dimension}</span>
                            <span>{item.metric}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
