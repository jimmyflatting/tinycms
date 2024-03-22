import React from "react";

export default function TextComponent({ props }) {
    console.log(props);
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: props.text,
            }}
        ></div>
    );
}
