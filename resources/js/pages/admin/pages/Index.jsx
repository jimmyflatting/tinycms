import PagesTable from "@/components/admin/pages/PagesTable";
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
                    <h2 className="text-xl my-auto">Sidor</h2>
                    <Button role="button" variant="outline">
                        <Link href={route("admin.pages.create")}>
                            Skapa ny sida
                        </Link>
                    </Button>
                </CardHeader>
            </Card>
            <Card>
                <PagesTable pages={props.pages} url={props.ziggy.url} />
            </Card>
        </Auth>
    );
}
