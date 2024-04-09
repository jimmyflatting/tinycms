import PostsTable from "@/components/admin/posts/PostsTable";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ ...props }) {
    return (
        <Auth>
            <Card className="flex flex-row justify-between">
                <h2 className="text-xl my-auto">Inlägg</h2>
                <button
                    className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
                    role="button"
                >
                    <Link href={route("admin.posts.create")}>
                        Skapa nytt inlägg
                    </Link>
                </button>
            </Card>
            <PostsTable posts={props.posts} />
        </Auth>
    );
}
