import React, { useState } from "react";

export default function MapBlock({ id, onDataChange }) {
    const [location, setLocation] = useState("");

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        onDataChange({ location: e.target.value });
    };

    return (
        <>
            <div className="mapinput mb-5">
                <input
                    type="text"
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Skriv in en adress eller koordinater"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>
            {location && <MapPreview id={location} />}
        </>
    );
}

function MapPreview({ id }) {
    return (
        <iframe
            className="rounded-lg"
            title="Google Maps"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${id}&output=embed`}
        />
    );
}
