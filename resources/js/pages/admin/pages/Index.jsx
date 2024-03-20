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
                        className="flex flex-row space-x-3 bg-gray-200 hover:bg-gray-50 shadow-md text-gray-700 md:w-16 md:h-16 rounded-lg transition ease-in-out duration-150 px-5"
                    >
                        <IoCreate className="mx-auto my-auto scale-125" />
                        <p className="my-auto">Skapa ny sida</p>
                    </Link>
                </div>
            </Card>
            <FormCard>
                <PagesTable props={props} />
            </FormCard>
        </Auth>
    );
}
