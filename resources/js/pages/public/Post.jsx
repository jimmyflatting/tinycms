import Guest from "@/layouts/Guest";
import React from "react";

export default function Post({ ...props }) {
    let post = props.post;

    return (
        <Guest>
            <div className="post">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">{props.post.title}</h1>
                    <img
                        className="w-24"
                        src={props.post.featured_image}
                        alt=""
                    />
                </div>
                <p>{props.post.content}</p>
            </div>
        </Guest>
    );
}
