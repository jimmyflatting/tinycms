import PostsEditForm from "@/components/admin/posts/PostsEditForm";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import React from "react";
import { Link } from "react-router-dom";

export default function Edit({ ...props }) {
    return (
        <Auth>
            <Card className="flex flex-row justify-between">
                <h2 className="text-xl my-auto">Redigera post</h2>
            </Card>
            <Card>
                <PostsEditForm post={props.post} />
            </Card>
        </Auth>
    );
}
