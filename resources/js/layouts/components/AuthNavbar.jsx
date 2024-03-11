import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

function AuthNavbar({ user }) {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open);
    };

    const date = new Date().getHours();

    let greeting;

    if (date < 10) {
        greeting = "Godmorgon";
    } else if (date < 18) {
        greeting = "God dag";
    } else {
        greeting = "Godkväll";
    }

    return (
        <>
            <nav className="border py-2">
                <div className="container flex justify-between items-center">
                    <div className="logo">Logo</div>
                    <div className="flex items-center space-x-5">
                        <p className="text-sm">
                            {greeting} {user.name}!
                        </p>
                        <div className="avatar" onClick={openMenu}>
                            <img
                                src="https://via.placeholder.com/150x150"
                                alt="avatar"
                                className="rounded-full w-10 h-10 object-cover cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className={`modal z-10 rounded-lg my-3 justify-self-end bg-gray-50 w-48 ${
                    open ? "" : "hidden"
                }`}
            >
                <div className="modal-content">
                    <ul className="list-none">
                        <a href="">
                            <li className="py-2 px-3 hover:bg-gray-100">
                                Profil
                            </li>
                        </a>
                        <a href="">
                            <li className="py-2 px-3 hover:bg-gray-100">
                                Inställningar
                            </li>
                        </a>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="w-full text-left"
                        >
                            <li className="py-2 px-3 hover:bg-gray-100">
                                Logga ut
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default AuthNavbar;
