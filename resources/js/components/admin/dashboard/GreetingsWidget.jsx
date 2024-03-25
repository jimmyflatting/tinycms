import Card from "@/layouts/components/Card";
import React from "react";

export default function GreetingsWidget({ props }) {
    let date = new Date();
    let greeting;

    if (date.getHours() < 9) {
        greeting = `Godmorgon ${props}`;
    } else if (date.getHours() < 17) {
        greeting = `Goddag ${props}`;
    } else {
        greeting = `Godkväll ${props}`;
    }

    return (
        <Card>
            <h2>{greeting}</h2>
            <p className="">
                Hörru, behöver du bilder till sajten?{" "}
                <a href="#" className="underline underline-offset-2 font-bold">
                    Boka en fotografering
                </a>
            </p>
        </Card>
    );
}
