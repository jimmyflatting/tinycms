import React from "react";

export default function TextImageComponent({ props }) {
    return (
        <div className="flex flex-row space-x-10">
            <div className={`w-1/2 ${props.variant === 2 ? "order-1" : ""}`}>
                <img src={props.imageUrl} alt={props.imageUrl} />
            </div>
            <div className="w-1/2 my-auto">
                <h2 className="text-2xl">{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    );
}
