import React, { useState, useEffect } from "react";

export default function Sources({ nDaysAgo }) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [sources, setSources] = useState([
        {
            source: "Direkt",
            sessions: 0,
        },
        {
            source: "Sökmotorer",
            sessions: 0,
        },
        {
            source: "Facebook",
            sessions: 0,
        },
        {
            source: "Instagram",
            sessions: 0,
        },
        {
            source: "Övrigt",
            sessions: 0,
        },
    ]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "api/analytics?nDaysAgo=" +
                    nDaysAgo +
                    "&dimension=pageReferrer&metric=sessions"
            );
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Error fetching analytics data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [nDaysAgo]);

    useEffect(() => {
        const filtered = data.filter(
            (item) => !item.dimension.includes("alekuriren")
        );
        setFilteredData(filtered);
    }, [data]);

    useEffect(() => {
        const updatedSources = sources.map((source) => ({
            ...source,
            sessions: 0,
        }));

        filteredData.forEach((item) => {
            if (item.dimension.includes("facebook")) {
                updatedSources[2].sessions += parseInt(item.metric);
            } else if (item.dimension.includes("instagram")) {
                updatedSources[3].sessions += parseInt(item.metric);
            } else if (
                item.dimension.includes("google") ||
                item.dimension.includes("bing") ||
                item.dimension.includes("yahoo") ||
                item.dimension.includes("duckduckgo")
            ) {
                updatedSources[1].sessions += parseInt(item.metric);
            } else if (item.dimension === "" || item.dimension === "(direct)") {
                updatedSources[0].sessions += parseInt(item.metric);
            } else {
                updatedSources[4].sessions += parseInt(item.metric);
            }
        });

        // sortera källorna efter antal sessions
        updatedSources.sort((a, b) => b.sessions - a.sessions);

        setSources(updatedSources);
    }, [filteredData]);

    return (
        <div className="">
            <h2 className="text-lg font-bold border-b mb-3">Trafikkällor</h2>
            <ul>
                {sources.map((item, index) => {
                    return (
                        <li key={index} className="flex justify-between mb-1">
                            <span>{item.source}</span>
                            <span>{item.sessions}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
