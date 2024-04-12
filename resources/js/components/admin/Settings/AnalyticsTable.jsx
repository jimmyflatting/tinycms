import React from "react";

export default function AnalyticsTable({ data, handleChange }) {
    return (
        <div className="form-group flex flex-col space-y-5">
            <div className="flex flex-col">
                <label htmlFor="facebook_pixel" className="mb-1">
                    Meta Pixel
                </label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="facebook_pixel"
                    value={data.facebook_pixel}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="google_analytics" className="mb-1">
                    Google Analytics
                </label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="google_analytics"
                    value={data.google_analytics}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="head_scripts">Head scripts</label>
                <textarea
                    className="rounded-lg border-gray-200"
                    name="head_scripts"
                    value={data.head_scripts}
                    onChange={handleChange}
                    rows={10}
                ></textarea>
            </div>
            <div className="flex flex-col">
                <label htmlFor="body_scripts">Body scripts</label>
                <textarea
                    className="rounded-lg border-gray-200"
                    name="body_scripts"
                    value={data.body_scripts}
                    onChange={handleChange}
                    rows={10}
                ></textarea>
            </div>
            <div className="flex flex-col">
                <label htmlFor="footer_scripts">Footer scripts</label>
                <textarea
                    className="rounded-lg border-gray-200"
                    name="footer_scripts"
                    value={data.footer_scripts}
                    onChange={handleChange}
                    rows={10}
                ></textarea>
            </div>
        </div>
    );
}
