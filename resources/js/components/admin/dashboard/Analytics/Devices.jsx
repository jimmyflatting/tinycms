import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

const Devices = ({ nDaysAgo }) => {
    const [data, setData] = useState([]);

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const fetchData = async () => {
        try {
            const response = await fetch(
                "api/analytics?nDaysAgo=" +
                    nDaysAgo +
                    "&dimension=deviceCategory&metric=sessions"
            );
            const responseData = await response.json();
            setData(responseData.slice(0, 3)); // skipa allt som inte är mobil, dekstop eller tablet
        } catch (error) {
            console.error("Error fetching analytics data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [nDaysAgo]);

    ChartJS.register(ArcElement, Tooltip);

    const prepareChartData = () => {
        const labels = [];
        const dataValues = [];
        const backgroundColors = [];
        const borderColors = [];

        const colors = [
            "rgba(255, 0, 0, 1)", // RÖD
            "rgba(0, 255, 0, 1)", // GRÖN
            "rgba(0, 0, 255, 1)", // BLÅ
        ];

        data.forEach((item, index) => {
            labels.push(Capitalize(item.dimension));
            dataValues.push(parseInt(item.metric));
            if (index < colors.length) {
                backgroundColors.push(colors[index]);
                borderColors.push(colors[index]);
            } else {
                backgroundColors.push(
                    `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                        Math.random() * 256
                    )}, ${Math.floor(Math.random() * 256)}, 1)`
                );
                borderColors.push(
                    `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                        Math.random() * 256
                    )}, ${Math.floor(Math.random() * 256)}, 1)`
                );
            }
        });

        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: "Besökare från enhet",
                    data: dataValues,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                },
            ],
        };

        return chartData;
    };

    return (
        <div>
            <Doughnut data={prepareChartData()} />
        </div>
    );
};

export default Devices;
