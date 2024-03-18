import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import FontList from "./Settings/FontList.json";
import TextInput from "./Settings/TextInput";

export default function SettingsEdit({ props }) {
    const [activeTab, setActiveTab] = useState("information");

    let fonts = FontList.items;

    console.log(fonts);

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
        linked_in: props.linked_in,
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
    console.log(props.font_heading);

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
                            onClick={() => handleTab("colors")}
                            className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 ${
                                activeTab === "colors"
                                    ? "border-gray-800"
                                    : "dark:text-gray-400 dark:hover:text-gray-300"
                            }`}
                        >
                            Colors
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
                    <div className="form-group flex flex-col">
                        <label htmlFor="font_heading">Font heading</label>
                        <select name="font_heading">
                            {fonts.map((font, idx) => (
                                <option
                                    key={idx}
                                    value={font.family}
                                    selected={
                                        font.family === props.font_heading
                                    }
                                >
                                    {font.family}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="font_body">Font body</label>
                        <select name="font_body">
                            {fonts.map((font, idx) => (
                                <option
                                    key={idx}
                                    value={font.family}
                                    selected={font.family === props.font_body}
                                >
                                    {font.family}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Repeat for other tab contents */}
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
