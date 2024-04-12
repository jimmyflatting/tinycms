import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

import FontList from "./ColorsFonts/FontList.json";
import ColorsTable from "./ColorsTable";
import AnalyticsTable from "./AnalyticsTable";
import { Button } from "@/components/ui/button";
import { hexToHSL } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import InformationTable from "./InformationTable";

export default function SettingsEdit({ props }) {
    let fonts = FontList.items;

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

    const handleChange = (e) => {
        if (e.target.type === "color" || e.target.name.includes("color")) {
            const { h, s, l } = hexToHSL(e.target.value);
            let hsl = `${h}, ${s}%, ${l}%`;
            setData({ ...data, [e.target.name]: hsl });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.settings.update"));
    };

    console.log(data);

    return (
        <form onSubmit={handleSubmit}>
            <Tabs defaultValue="information">
                <TabsList className="w-full justify-between">
                    <TabsTrigger className="w-full" value="information">
                        Information
                    </TabsTrigger>
                    <TabsTrigger className="w-full" value="colors_fonts">
                        Färger & Typsnitt
                    </TabsTrigger>
                    <TabsTrigger className="w-full" value="analytics_scripts">
                        Analytics & Scripts
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="information">
                    <InformationTable
                        data={props}
                        handleChange={handleChange}
                    />
                </TabsContent>
                <TabsContent value="colors_fonts">
                    <ColorsTable
                        data={props}
                        handleChange={handleChange}
                        fonts={fonts}
                    />
                </TabsContent>
                <TabsContent value="analytics_scripts">
                    <AnalyticsTable data={props} handleChange={handleChange} />
                </TabsContent>
            </Tabs>
            <div className="flex flex-row justify-end mt-5">
                <Button variant="outline" type="submit" disabled={processing}>
                    Spara
                </Button>
            </div>
        </form>
    );
}
