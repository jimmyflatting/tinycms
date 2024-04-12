import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DropdownFonts from "./ColorsFonts/DropdownFonts";

export default function ColorsTable({ data, handleChange, fonts }) {
    return (
        <>
            <div className="flex flex-col space-y-5 mt-5">
                <div className="form-group flex flex-col">
                    <Label className="mb-3" htmlFor="font_heading">
                        Font heading
                    </Label>
                    <DropdownFonts
                        currentValue={data.font_heading}
                        data={data}
                        handleChange={handleChange}
                        fonts={fonts}
                        name="font_heading"
                    />
                </div>
                <div className="form-group flex flex-col">
                    <Label className="mb-3" htmlFor="font_body">
                        Font body
                    </Label>
                    <DropdownFonts
                        currentValue={data.font_body}
                        data={data}
                        handleChange={handleChange}
                        fonts={fonts}
                        name="font_heading"
                    />
                </div>
                <div className="form-group flex flex-col">
                    <Label className="mb-3" htmlFor="primary_color">
                        Primärfärg
                    </Label>
                    <Input
                        type="color"
                        name="primary_color"
                        onChange={handleChange}
                        defaultValue={data.primary_color}
                    />
                </div>
                <div className="form-group flex flex-col">
                    <Label className="mb-3" htmlFor="secondary_color">
                        Secondary
                    </Label>

                    <Input
                        type="color"
                        name="secondary_color"
                        onChange={handleChange}
                        defaultValue={data.secondary_color}
                    />
                </div>
                <div className="form-group flex flex-col">
                    <Label className="mb-3" htmlFor="accent_color">
                        Accent
                    </Label>

                    <Input
                        type="color"
                        name="accent_color"
                        onChange={handleChange}
                        defaultValue={data.accent_color}
                    />
                </div>
                <div className="form-group flex flex-col">
                    <Label className="mb-3" htmlFor="background_color">
                        Background
                    </Label>

                    <Input
                        type="color"
                        name="background_color"
                        onChange={handleChange}
                        defaultValue={data.background_color}
                    />
                </div>
                <div className="form-group flex flex-col">
                    <Label className="mb-3" htmlFor="overlay_color">
                        Overlay
                    </Label>

                    <Input
                        type="color"
                        name="overlay_color"
                        onChange={handleChange}
                        defaultValue={data.overlay_color}
                    />
                </div>
                <div className="form-group flex flex-col">
                    <Label className="mb-3" htmlFor="header_color">
                        Header
                    </Label>

                    <Input
                        type="color"
                        name="header_color"
                        onChange={handleChange}
                        defaultValue={data.header_color}
                    />
                </div>
            </div>
        </>
    );
}
