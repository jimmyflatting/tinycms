import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CaseBlock({ id, onDataChange }) {
    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState("");

    useEffect(() => {
        axios
            .get("/api/posts/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setValues(selectedValue);
        onDataChange(id, selectedValue);
    };

    console.log(categories);

    return (
        <>
            <div>
                <select
                    value={values}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                >
                    <option value="">Select a category</option>
                    {categories.map((category, idx) => (
                        <option key={idx} value={category.category_name}>
                            {category.category_name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
