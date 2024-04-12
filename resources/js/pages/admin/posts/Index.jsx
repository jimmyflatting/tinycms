import PostsTable from "@/components/admin/posts/PostsTable";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Auth from "@/layouts/Auth";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ ...props }) {
    return (
        <Auth>
            <Card>
                <CardHeader className="flex flex-row justify-between">
                    <h2 className="text-xl my-auto">Inlägg</h2>
                    <Button role="button" variant="outline">
                        <Link href={route("admin.posts.create")}>
                            Skapa nytt inlägg
                        </Link>
                    </Button>
                </CardHeader>
            </Card>
            <Card>
                <PostsTable posts={props.posts} />
            </Card>
        </Auth>
    );
}
