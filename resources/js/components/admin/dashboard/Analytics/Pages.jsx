import React, { useState, useEffect } from "react";
import PagesLoading from "./PagesLoading";

export default function Pages({ nDaysAgo }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "api/analytics?nDaysAgo=" +
                    nDaysAgo +
                    "&dimension=pageTitle&metric=sessions"
            );
            const data = await response.json();
            setData(data.slice(0, 5));
            setLoading(false);
        } catch (error) {
            console.error("Error fetching analytics data:", error);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [nDaysAgo]);

    return (
        <div className="">
            <h2 className="text-lg font-bold border-b mb-3">
                Mest besökta sidor de senaste {nDaysAgo} dagarna
            </h2>
            {loading ? (
                <PagesLoading />
            ) : (
                <ul>
                    {data.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="flex justify-between mb-1"
                            >
                                <span>{item.dimension}</span>
                                <span>{item.metric}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
