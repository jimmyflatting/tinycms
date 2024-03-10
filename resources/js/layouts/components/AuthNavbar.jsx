import React from "react";
import { useState } from "react";

function AuthNavbar({ user }) {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open);
    };
    return (
        <>
            <nav className="border py-2">
                <div className="container flex justify-between items-center">
                    <div className="logo">Logo</div>
                    <div className="flex items-center space-x-5">
                        <p className="text-sm">Godmorgon {user.name}!</p>
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

            <div className={`modal ${open ? "" : "hidden"}`}>
                <div className="modal-content">
                    <ul className="list-none">
                        <li className="py-2 px-3 hover:bg-gray-100">
                            <a href="#">Profile</a>
                        </li>
                        <li className="py-2 px-3 hover:bg-gray-100">
                            <a href="#">Settings</a>
                        </li>
                        <li className="py-2 px-3 hover:bg-gray-100">
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default AuthNavbar;
