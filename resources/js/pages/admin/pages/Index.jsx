import PagesTable from "@/components/pages/PagesTable";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ ...props }) {
    return (
        <Auth>
            <Card className="flex flex-row justify-between">
                <h2 className="text-xl my-auto">Sidor</h2>
                <button
                    className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
                    role="button"
                >
                    <Link href={route("admin.pages.create")}>
                        Skapa ny sida
                    </Link>
                </button>
            </Card>
            <PagesTable pages={props.pages} url={props.ziggy.url} />
        </Auth>
    );
}
