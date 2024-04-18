import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function MenuItems({ pages, menu, handleChange }) {
    const [menuItems, setMenuItems] = useState([]);
    console.log(menu);

    if (!menu) {
        return;
    }
    return (
        <div>
            <div className="mb-4">
                <p className="font-bold">{menu.menu_name}</p>
                <p className="text-sm">
                    Välj vilka sidor som ska finnas i menyn.
                </p>
            </div>
            {pages.map((item) => (
                <div key={item.id} className="flex flex-row space-x-2">
                    <Checkbox className="my-auto" />
                    <label className="my-auto">{item.title}</label>
                </div>
            ))}
            <Button
                variant="outline"
                className="px-2 py-1 mt-5 w-full"
                size="small"
                onClick={() => console.log("Add page")}
            >
                Lägg till
            </Button>
        </div>
    );
}
