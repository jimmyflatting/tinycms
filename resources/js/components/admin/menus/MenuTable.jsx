import { Select } from "@/components/ui/select";
import React, { useState } from "react";
import { useEffect } from "react";
import SelectMenu from "./SelectMenu";
import { Button } from "@/components/ui/button";
import MenuItems from "./MenuItems";

const items = [
    {
        id: 1,
        title: "Startsida",
        url: "/",
        children: [],
    },
    {
        id: 2,
        title: "Tjänster",
        url: "/tjanster",
        children: [
            {
                id: 3,
                title: "Historia",
                url: "/tjanster/historia",
                children: [],
            },
            {
                id: 4,
                title: "Säpo",
                url: "/tjanster/sapo",
                children: [],
            },
        ],
    },
    {
        id: 5,
        title: "Om oss",
        url: "/om-oss",
        children: [
            {
                id: 6,
                title: "Vårt team",
                url: "/om-oss/team",
                children: [],
            },
            {
                id: 7,
                title: "Vår historia",
                url: "/om-oss/historia",
                children: [],
            },
        ],
    },
    {
        id: 8,
        title: "Kontakt",
        url: "/kontakt",
        children: [],
    },
];

export default function MenuTable({ menus, pages }) {
    const [selectedMenu, setSelectedMenu] = useState(1);
    const [menu, setMenu] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    console.log(pages);
    console.log(menus);

    useEffect(() => {
        const fetchMenu = (selectedMenu) => {
            try {
                fetch(`/api/menu/${selectedMenu}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setMenu(data);
                    })
                    .then(() => {
                        setMenuItems(menu.menu_items);
                    });
            } catch (error) {
                console.error(error);
            }
        };
        fetchMenu(selectedMenu);
    }, [selectedMenu]);

    console.log(menu);
    console.log(menuItems);

    return (
        <>
            <SelectMenu menus={menus} />
            <div className="flex flex-row justify-between space-x-2 my-5">
                <MenuItems
                    pages={pages}
                    menu={menu}
                    handleChange={console.log("test")}
                />

                <div className="items border w-full px-2">
                    <ul>
                        <li>1 - Startsida</li>
                        <li>
                            <>2 - Tjänster</>
                            <ul className="ps-5">
                                <li>2.1 - Historia</li>
                                <li>2.2 - Säpo</li>
                            </ul>
                        </li>
                        <li>3 - Om oss</li>
                        <li>4 - Kontakt</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-end mb-5">
                <Button>Spara</Button>
            </div>
        </>
    );
}

[
    {
        label: "Om oss",
        url: "/om-oss",
        children: [
            { label: "V\u00e5rt team", url: "/om-oss/team" },
            { label: "V\u00e5r historia", url: "/om-oss/historia" },
        ],
    },
    { label: "Tj\u00e4nster", url: "/tjanster" },
    { label: "Kontakt", url: "/kontakt" },
];
