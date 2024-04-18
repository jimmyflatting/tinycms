import React from "react";
import { Link } from "@inertiajs/react";
import { MdDashboard } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import { FaNewspaper } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdPermMedia } from "react-icons/md";

export default function AuthMenu() {
    const [expanded, setExpanded] = useState(true);

    const handleSidebar = () => {
        setExpanded(!expanded);
        let sidebar = document.querySelector("aside");
        sidebar.classList.toggle("px-12");
        sidebar.classList.toggle("px-5");
    };
    return (
        <aside className="text-xl border-r h-screen transition-all px-12">
            <ul className="mt-8">
                <div className="flex flex-col">
                    <AuthItem
                        expanded={expanded}
                        href="admin.index"
                        icon={<MdDashboard />}
                        tooltip={"Dashboard"}
                    />
                    <AuthItem
                        expanded={expanded}
                        href="admin.media.index"
                        icon={<MdPermMedia />}
                        tooltip={"Media"}
                    />
                    <AuthItem
                        expanded={expanded}
                        href="admin.pages.index"
                        icon={<SiPowerpages />}
                        tooltip={"Sidor"}
                    />
                    <AuthItem
                        expanded={expanded}
                        href="admin.posts.index"
                        icon={<FaNewspaper />}
                        tooltip={"Inlägg"}
                    />
                    <AuthItem
                        expanded={expanded}
                        href="admin.staff.index"
                        icon={<FaUser />}
                        tooltip={"Personal"}
                    />
                    <AuthItem
                        expanded={expanded}
                        href="admin.users.index"
                        icon={<FaUser />}
                        tooltip={"Användare"}
                    />
                    <AuthItem
                        expanded={expanded}
                        href="admin.menus.index"
                        icon={<IoMenu />}
                        tooltip={"Menyer"}
                    />
                    <AuthItem
                        expanded={expanded}
                        href="admin.settings.index"
                        icon={<FaCog />}
                        tooltip={"Inställningar"}
                    />
                </div>
                <hr className="mb-5" />
                <div className="flex flex-col justify-end">
                    <AuthItem
                        as="button"
                        expanded={expanded}
                        href="logout"
                        icon={<IoLogOut />}
                        tooltip={"Logga ut"}
                    />
                </div>
            </ul>
            <div className="">
                <span
                    role="button"
                    onClick={handleSidebar}
                    className="relative flex items-center justify-center bg-white hover:bg-gray-200 shadow-md text-gray-700 w-12 h-12 md:w-16 md:h-16 mx-auto text-center mb-5 rounded-full hover:rounded-lg transition ease-in-out duration-150"
                >
                    {expanded ? (
                        <IoChevronBackCircleSharp />
                    ) : (
                        <IoChevronForwardCircleSharp />
                    )}
                </span>
            </div>
        </aside>
    );
}

function AuthItem({
    href = "admin.index",
    icon = null,
    tooltip = "",
    expanded = false,
    as = "a",
}) {
    return (
        <>
            <div className="group">
                <Link
                    className={`${as === "button" ? "w-full" : null}`}
                    as={as}
                    href={route(href)}
                    method={href === "logout" ? "post" : "get"}
                >
                    {!expanded ? (
                        <li className="relative flex items-center justify-center bg-white hover:bg-gray-200 shadow-md text-gray-700 w-12 h-12 md:w-16 md:h-16 mx-auto text-center mb-5 rounded-full hover:rounded-lg transition ease-in-out duration-150">
                            {icon}
                        </li>
                    ) : (
                        <li className="relative flex items-center justify-start bg-white hover:bg-gray-200 shadow-md text-gray-700 w-full h-12 mx-auto px-3 text-center mb-5 rounded-lg transition ease-in-out duration-150 space-x-2">
                            {icon}
                            <span className="text-sm transition-all">
                                {tooltip}
                            </span>
                        </li>
                    )}
                </Link>
            </div>
        </>
    );
}
