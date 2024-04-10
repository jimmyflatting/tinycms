import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useState } from "react";
import { SketchPicker } from "react-color";

export default function ColorsFonts({ data, handleChange, fonts }) {
    return (
        <>
            <div>
                <div className="form-group flex flex-col">
                    <label htmlFor="font_heading">Font heading</label>
                    <select
                        className="rounded-lg border-gray-200"
                        name="font_heading"
                        value={data.font_heading}
                        onChange={handleChange}
                    >
                        {fonts.map((font, idx) => (
                            <option key={idx} value={font.family}>
                                {font.family}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group flex flex-col">
                    <label htmlFor="font_body">Font body</label>
                    <select
                        className="rounded-lg border-gray-200"
                        name="font_body"
                        value={data.font_body}
                        onChange={handleChange}
                    >
                        {fonts.map((font, idx) => (
                            <option key={idx} value={font.family}>
                                {font.family}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group flex flex-col my-5">
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
                <div className="form-group flex flex-col my-5">
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
                <div className="form-group flex flex-col my-5">
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
                <div className="form-group flex flex-col my-5">
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
                <div className="form-group flex flex-col my-5">
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
                <div className="form-group flex flex-col my-5">
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
