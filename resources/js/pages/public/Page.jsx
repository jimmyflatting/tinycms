import Guest from "@/layouts/Guest";
import React from "react";

export default function Page({ ...props }) {
    console.log(props.page);
    let content = props.page.content;
    return (
        <>
            <Guest>
                <h1 className="font-bold">{props.page.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </Guest>
        </>
    );
}
