import React from "react";
import AuthMenu from "./components/AuthMenu";
import { useState } from "react";

export default function Auth({ user, children }) {
    return (
        <>
            <div className="flex bg-gray-50 max-w-screen">
                <AuthMenu />
                <main className="container mt-8">{children}</main>
            </div>
        </>
    );
}
