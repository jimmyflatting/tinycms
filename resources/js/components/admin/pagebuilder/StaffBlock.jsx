import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StaffBlock({ id, onDataChange }) {
    const [staff, setStaff] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState([]);

    useEffect(() => {
        try {
            axios.get(`/api/staff`).then((response) => {
                setStaff(response.data);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleStaffChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
            staff.find((staff) => staff.id === option.value)
        );
        setSelectedStaff(selectedOptions);
    };

    return (
        <>
            <div className="staffSelect">
                <select
                    name="staff"
                    id=""
                    multiple
                    onChange={handleStaffChange}
                >
                    {staff.map((staff) => (
                        <option value={staff.id} key={staff.id}>
                            {staff.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="staff">
                {selectedStaff.map((x, idx) => (
                    <StaffCard key={idx} user={x} />
                ))}
            </div>
        </>
    );
}

function StaffCard({ user }) {
    return <div>{user.name}</div>;
}
