import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export const datatest = {
    labels: ["Mobile", "Desktop", "Tablet"],
    datasets: [
        {
            label: "Besökare från enhet",
            data: [12, 19, 3],
            backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

export default function Devices({ nDaysAgo }) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "api/analytics?nDaysAgo=" +
                    nDaysAgo +
                    "&dimension=deviceCategory&metric=sessions"
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
    console.log(data);

    ChartJS.register(ArcElement, Tooltip);

    return (
        <div>
            <Doughnut data={datatest} />
        </div>
    );
}
