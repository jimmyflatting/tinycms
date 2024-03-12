import React from "react";

export default function Guest({ children }) {
    return (
        <>
            <div className="guestheader">GuestHeader</div>
            <main className="container">{children}</main>
            <div className="guestFooter">GuestFooter</div>
        </>
    );
}
