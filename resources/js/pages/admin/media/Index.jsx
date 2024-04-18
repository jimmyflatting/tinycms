import MediaTable from "@/components/admin/media/MediaTable";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Auth from "@/layouts/Auth";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ ...props }) {
    return (
        <Auth>
            <Card>
                <CardHeader className="flex flex-row justify-between">
                    <h2 className="text-xl my-auto">Media</h2>
                    <Button role="button" variant="outline">
                        <Link href={route("admin.pages.create")}>
                            Ladda upp media?!
                        </Link>
                    </Button>
                </CardHeader>
            </Card>
            <Card>
                <MediaTable />
            </Card>
        </Auth>
    );
}
