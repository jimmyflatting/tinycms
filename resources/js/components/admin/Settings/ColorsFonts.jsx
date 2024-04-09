import React from "react";
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

                <div className="form-group flex flex-col">
                    <label htmlFor="primary_color">Primary color</label>
                    <input
                        className="rounded-lg border-gray-200"
                        type="text"
                        name="primary_color"
                        value={data.primary_color}
                        onChange={handleChange}
                    />
                    <SketchPicker
                        color={data.primary_color}
                        onChange={(color) =>
                            setData("primary_color", color.hex)
                        }
                    />
                </div>

                <div className="form-group flex flex-col">
                    <label htmlFor="secondary_color">Secondary color</label>
                    <input
                        className="rounded-lg border-gray-200"
                        type="text"
                        name="secondary_color"
                        value={data.secondary_color}
                        onChange={handleChange}
                    />
                    <SketchPicker
                        color={data.secondary_color}
                        onChange={(color) =>
                            setData("secondary_color", color.hex)
                        }
                    />
                </div>

                <div className="form-group flex flex-col">
                    <label htmlFor="accent_color">Accent color</label>
                    <input
                        className="rounded-lg border-gray-200"
                        type="text"
                        name="accent_color"
                        value={data.accent_color}
                        onChange={handleChange}
                    />
                    <SketchPicker
                        color={data.accent_color}
                        onChange={(color) => setData("accent_color", color.hex)}
                    />
                </div>

                <div className="form-group flex flex-col">
                    <label htmlFor="background_color">Background color</label>
                    <input
                        className="rounded-lg border-gray-200"
                        type="text"
                        name="background_color"
                        value={data.background_color}
                        onChange={handleChange}
                    />
                    <SketchPicker
                        color={data.background_color}
                        onChange={(color) =>
                            setData("background_color", color.hex)
                        }
                    />
                </div>

                <div className="form-group flex flex-col">
                    <label htmlFor="overlay_color">Overlay color</label>
                    <input
                        className="rounded-lg border-gray-200"
                        type="text"
                        name="overlay_color"
                        value={data.overlay_color}
                        onChange={handleChange}
                    />
                    <SketchPicker
                        color={data.overlay_color}
                        onChange={(color) =>
                            setData("overlay_color", color.hex)
                        }
                    />
                </div>

                <div className="form-group flex flex-col">
                    <label htmlFor="header_color">Header color</label>
                    <input
                        className="rounded-lg border-gray-200"
                        type="text"
                        name="header_color"
                        value={data.header_color}
                        onChange={handleChange}
                    />
                    <SketchPicker
                        color={data.header_color}
                        onChange={(color) => setData("header_color", color.hex)}
                    />
                </div>
            </div>
        </>
    );
}
