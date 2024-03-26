import React, { useState, useEffect } from "react";

export default function Pages() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("api/analytics");
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Error fetching analytics data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(data);

    return (
        <div>
            Pages
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    );
}
