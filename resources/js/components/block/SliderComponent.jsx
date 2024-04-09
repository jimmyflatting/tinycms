import React from "react";

export default function SliderComponent({ props }) {
    return (
        <div className="container">
            {props.map((image, index) => {
                <img key={index} src={image} alt={index} />;
            })}
        </div>
    );
}
