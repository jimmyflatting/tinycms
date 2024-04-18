import { Select } from "@/components/ui/select";
import React, { useState } from "react";
import { useEffect } from "react";
import SelectMenu from "./SelectMenu";

export default function MenuTable({ menus }) {
    const [selectedMenu, setSelectedMenu] = useState(1);
    const [menu, setMenu] = useState(null);
    console.log(menus);

    useEffect(() => {
        const fetchMenu = (selectedMenu) => {
            try {
                fetch(`http://localhost:8000/api/menus/${selectedMenu}`)
                    .then((response) => response.json())
                    .then((data) => setMenu(data));
            } catch (error) {
                console.error(error);
            }
        };
        fetchMenu(selectedMenu);
    }, [selectedMenu]);

    return (
        <>
            <SelectMenu menus={menus} />
        </>
    );
}
