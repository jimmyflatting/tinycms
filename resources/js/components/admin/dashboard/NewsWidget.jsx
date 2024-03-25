import Card from "@/layouts/components/Card";
import React from "react";

export default function NewsWidget() {
    let news = [
        {
            title: "Serveruppdatering",
            content: "Server har uppdaterats till senaste versionen.",
            date: "2021-10-02",
        },
        {
            title: "Säkerhetsuppdatering",
            content: "Säkerhetsuppdatering har gjorts på servern.",
            date: "2021-10-03",
        },
        {
            title: "Blockuppdatering",
            content: "Ett A.I textblock som kan generera texter åt dig.",
            date: "2021-10-04",
        },
    ];

    news = news.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <Card>
            <div className="flex justify-between border-b">
                <div>
                    <h1 className="text-2xl">Senaste uppdateringar</h1>
                    <p className="text-gray-500 mb-3">Updatez mannen.</p>
                </div>
                <img
                    className="h-12 w-12"
                    src="https://emojis.slackmojis.com/emojis/images/1625533047/46783/sailor_moon.gif?1625533047"
                    alt=""
                />
            </div>
            {news.map((item, index) => (
                <div key={index} className="border-b border-gray-200 py-2">
                    <div className="flex justify-between">
                        <h2 className="text-lg">{item.title}</h2>
                        <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                    <p className="text-sm">{item.content}</p>
                </div>
            ))}
        </Card>
    );
}
