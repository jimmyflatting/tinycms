import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";
import { Link } from "@inertiajs/react";
import React from "react";
import { IoCreate } from "react-icons/io5";
import PagesTable from "./components/PagesTable";
import FormCard from "@/layouts/components/FormCard";

export default function Index({ ...props }) {
    return (
        <Auth>
            <Card>
                <div className="flex flex-row justify-between text-gray-700">
                    <h2 className="text-2xl font-bold my-auto">Sidor</h2>

                    <Link
                        href={route("admin.pages.create")}
                        as="button"
                        className="flex flex-row space-x-3 bg-gray-200 hover:bg-gray-300 shadow-md text-gray-700 rounded-lg transition ease-in-out duration-150 px-5"
                    >
                        <IoCreate className="my-auto" />
                        <span className="my-auto font-semibold">
                            Skapa ny sida
                        </span>
                    </Link>
                </div>
            </Card>
            <FormCard>
                <PagesTable props={props} />
            </FormCard>
        </Auth>
    );
}
