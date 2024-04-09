import React from "react";

export default function Information({ data, handleChange }) {
    return (
        <div className="form-group flex flex-col space-y-5">
            <div className="flex flex-col">
                <label htmlFor="instagram">Instagram</label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="instagram"
                    value={data.instagram}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="linkedin">LinkedIn</label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="linkedin"
                    value={data.linkedin}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="twitter">Twitter</label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="twitter"
                    value={data.twitter}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="facebook">Facebook</label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="facebook"
                    value={data.facebook}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="phone">Telefon</label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                    className="rounded-lg border-gray-200"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="country">Country</label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="country"
                    value={data.country}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="address">Address</label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="state">State</label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="state"
                    value={data.state}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="zip">Zip</label>
                <input
                    className="rounded-lg border-gray-200"
                    type="text"
                    name="zip"
                    value={data.zip}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
