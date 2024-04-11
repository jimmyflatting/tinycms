import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    const [value, setValue] = React.useState(props.defaultValue);

    const handleChange = (e) => {
        if (e.target.type === "color") {
            const { h, s, l } = hexToHSL(e.target.value);
            let hsl = `${h}, ${s}%, ${l}%`;
            setValue(hsl);
            props.onChange({ target: { name: e.target.name, value: hsl } });
        } else {
            setValue(e.target.value);
        }
    };

    if (type === "color") {
        return (
            <div
                className={cn(
                    "flex h-15 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
            >
                <input
                    type={type}
                    ref={ref}
                    {...props}
                    defaultValue={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={cn(
                        "h-10 w-10 bg-background border-none text-sm",
                        className
                    )}
                />
                <input
                    type="text"
                    {...props}
                    defaultValue={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={cn(
                        "h-10 w-full bg-background border-none text-sm focus:border-none",
                        className
                    )}
                />
            </div>
        );
    } else {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
});
Input.displayName = "Input";

export { Input };
