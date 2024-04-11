import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import FontList from "../FontList.json";

export default function DropdownFonts({ data, handleChange, name }) {
    const [open, setOpen] = useState(false);
    const [selectedFont, setSelectedFont] = useState(
        name === "font_heading" ? data.font_heading : data.font_body
    );

    const fonts = [
        {
            family: "Roboto",
        },
        {
            family: "Open Sans",
        },
    ];

    return null;

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {selectedFont ? selectedFont : "Välj typsnitt..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command className="w-full">
                    <CommandInput placeholder="Sök typsnitt..." />
                    <CommandEmpty>Hittade inga typsnitt...</CommandEmpty>
                    <CommandGroup>
                        {fonts.map((font, idx) => (
                            <CommandItem
                                value={font.family}
                                key={idx}
                                onSelect={(e) => {
                                    handleChange, setOpen(false);
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        selectedFont === font.family
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                                {font.family}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
