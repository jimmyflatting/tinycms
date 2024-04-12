import * as React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function DropdownFonts({
    handleChange,
    data,
    name,
    fonts,
    currentValue,
}) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(currentValue);

    const handleValueChange = (value) => {
        setValue(value);
        handleChange({ target: { name, value } });
    };

    return (
        <Select
            className="w-full"
            name={name}
            onValueChange={(value) => {
                handleValueChange(value);
            }}
        >
            <SelectTrigger>
                <SelectValue placeholder={value} />
            </SelectTrigger>
            <SelectContent>
                {fonts.map((font, idx) => (
                    <SelectItem key={idx} value={font.family}>
                        {font.family}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
