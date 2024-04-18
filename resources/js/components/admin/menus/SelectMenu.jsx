import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function SelectMenu({ menus }) {
    console.log(menus);
    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder="Välj en meny" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {menus.map((menu) => (
                        <SelectItem key={menu.id} value={menu.id}>
                            {menu.menu_name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
