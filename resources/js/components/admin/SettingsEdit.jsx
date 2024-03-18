import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import FontList from "./Settings/FontList.json";

export default function SettingsEdit({ props }) {
    const [activeTab, setActiveTab] = useState("information");

    let fonts = FontList.items;

    const handleTab = (tabId) => {
        setActiveTab(tabId);
    };

    const { data, setData, put, processing, errors, reset } = useForm({
        accent_color: props.accent_color,
        address: props.address,
        background_color: props.background_color,
        body_scripts: props.body_scripts,
        button_color: props.button_color,
        button_hover_color: props.button_hover_color,
        button_text_color: props.button_text_color,
        city: props.city,
        country: props.country,
        email: props.email,
        facebook: props.facebook,
        facebook_pixel: props.facebook_pixel,
        font_body: props.font_body,
        font_heading: props.font_heading,
        footer_color: props.footer_color,
        footer_scripts: props.footer_scripts,
        footer_text_color: props.footer_text_color,
        google_analytics: props.google_analytics,
        head_scripts: props.head_scripts,
        header_color: props.header_color,
        header_text_color: props.header_text_color,
        heading_color: props.heading_color,
        instagram: props.instagram,
        link_color: props.link_color,
        linkedin: props.linkedin,
        overlay_color: props.overlay_color,
        phone: props.phone,
        primary_color: props.primary_color,
        secondary_color: props.secondary_color,
        state: props.state,
        text_color: props.text_color,
        twitter: props.twitter,
        zip: props.zip,
    });

    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        put(route("admin.settings.update"), {
            onSuccess: () => {
                console.log("success");
            },
        });
    };

    console.log(data);

    return (
        <div className="max-w-2xl mx-auto">
            <div className="border-b border-gray-200 mb-4">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <button
                            onClick={() => handleTab("information")}
                            className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 ${
                                activeTab === "information"
                                    ? "border-gray-800"
                                    : "dark:text-gray-400 dark:hover:text-gray-300"
                            }`}
                        >
                            Information
                        </button>
                    </li>
                    <li className="mr-2">
                        <button
                            onClick={() => handleTab("colors_fonts")}
                            className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 ${
                                activeTab === "colors_fonts"
                                    ? "border-gray-800"
                                    : "dark:text-gray-400 dark:hover:text-gray-300"
                            }`}
                        >
                            Färger & Typsnitt
                        </button>
                    </li>
                    <li className="mr-2">
                        <button
                            onClick={() => handleTab("analytics_scripts")}
                            className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 ${
                                activeTab === "analytics_scripts"
                                    ? "border-gray-800"
                                    : "dark:text-gray-400 dark:hover:text-gray-300"
                            }`}
                        >
                            Analytics & Scripts
                        </button>
                    </li>
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <div
                    id="information"
                    className={`tab-group ${
                        activeTab === "information" ? "block" : "hidden"
                    }`}
                >
                    <div className="form-group flex flex-col space-y-5">
                        <div className="flex flex-col">
                            <label htmlFor="instagram">Instagram</label>
                            <input
                                type="text"
                                name="instagram"
                                value={data.instagram}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input
                                type="text"
                                name="linkedin"
                                value={data.linkedin}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="twitter">Twitter</label>
                            <input
                                type="text"
                                name="twitter"
                                value={data.twitter}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="facebook">Facebook</label>
                            <input
                                type="text"
                                name="facebook"
                                value={data.facebook}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone">Telefon</label>
                            <input
                                type="text"
                                name="phone"
                                value={data.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={data.country}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={data.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                name="state"
                                value={data.state}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="zip">Zip</label>
                            <input
                                type="text"
                                name="zip"
                                value={data.zip}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div
                    id="colors_fonts"
                    className={`tab-group ${
                        activeTab === "colors_fonts" ? "block" : "hidden"
                    }`}
                >
                    <div className="form-group flex flex-col">
                        <label htmlFor="font_heading">Font heading</label>
                        <select
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
                            type="text"
                            name="accent_color"
                            value={data.accent_color}
                            onChange={handleChange}
                        />
                        <SketchPicker
                            color={data.accent_color}
                            onChange={(color) =>
                                setData("accent_color", color.hex)
                            }
                        />
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="background_color">
                            Background color
                        </label>
                        <input
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
                            type="text"
                            name="header_color"
                            value={data.header_color}
                            onChange={handleChange}
                        />
                        <SketchPicker
                            color={data.header_color}
                            onChange={(color) =>
                                setData("header_color", color.hex)
                            }
                        />
                    </div>
                </div>

                <div
                    id="analytics_scripts"
                    className={`tab-group ${
                        activeTab === "analytics_scripts" ? "block" : "hidden"
                    }`}
                >
                    <div className="form-group flex flex-col space-y-5">
                        <div className="flex flex-col">
                            <label htmlFor="facebook_pixel" className="mb-1">
                                Meta Pixel
                            </label>
                            <input
                                type="text"
                                name="facebook_pixel"
                                value={data.facebook_pixel}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="google_analytics" className="mb-1">
                                Google Analytics
                            </label>
                            <input
                                type="text"
                                name="google_analytics"
                                value={data.google_analytics}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="head_scripts">Head scripts</label>
                            <textarea
                                name="head_scripts"
                                value={data.head_scripts}
                                onChange={handleChange}
                                rows={10}
                            ></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="body_scripts">Body scripts</label>
                            <textarea
                                name="body_scripts"
                                value={data.body_scripts}
                                onChange={handleChange}
                                rows={10}
                            ></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="footer_scripts">
                                Footer scripts
                            </label>
                            <textarea
                                name="footer_scripts"
                                value={data.footer_scripts}
                                onChange={handleChange}
                                rows={10}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="btngrp">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={processing}
                    >
                        Spara
                    </button>
                </div>
            </form>
        </div>
    );
}
