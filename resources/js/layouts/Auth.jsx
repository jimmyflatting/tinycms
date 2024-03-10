import React from "react";
import AuthNavbar from "./components/AuthNavbar";

export default function Auth({ user, children }) {
    return (
        <>
            <AuthNavbar user={user} />
            <div className="">
                <main>
                    <div>{children}</div>
                </main>
            </div>

            <div className="AuthFooter">AuthFooter</div>
        </>
    );
}
