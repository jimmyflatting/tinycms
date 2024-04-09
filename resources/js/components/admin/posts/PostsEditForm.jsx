import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function PostsEditForm({ post }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        title: post.title,
        content: post.content,
        category_id: post.category_id,
        status: post.status,
    });

    return <div>PostsEditForm</div>;
}
