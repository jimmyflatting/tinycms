import StaffTable from "@/components/admin/staff/StaffTable";
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
                    <h2 className="text-xl my-auto">Personal</h2>
                    <Button role="button" variant="outline">
                        <Link href={route("admin.staff.create")}>
                            Skapa ny personal
                        </Link>
                    </Button>
                </CardHeader>
            </Card>
            <Card>
                <StaffTable staff={props.staff} />
            </Card>
        </Auth>
    );
}
