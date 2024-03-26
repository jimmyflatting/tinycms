import React, { useState, useEffect } from "react";

export default function Graph({ nDaysAgo }) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "api/analytics?nDaysAgo=" +
                    nDaysAgo +
                    "&dimension=pageTitle&metric=active1DayUsers"
            );
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Error fetching analytics data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    //    console.log(data);
    return <div>Graph</div>;
}
