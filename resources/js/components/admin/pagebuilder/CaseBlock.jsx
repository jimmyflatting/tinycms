import Card from "@/layouts/components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CaseBlock({ id, onDataChange }) {
    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState("");
    const [loadingPosts, setLoadingPosts] = useState(false);

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

    return (
        <>
            <div className="mb-5">
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

            {/* Display selected category */}
            {values && <CasesPreview id={values} />}
            {loadingPosts && <p>Loading posts...</p>}
        </>
    );
}

function CasesPreview({ id }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/posts/category/name/${id}`)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, [id]);

    return (
        <div>
            {posts.map((post, idx) => (
                <div key={idx}>
                    <Card>
                        <h2 className="text-xl">{post.title}</h2>
                        <p>{post.content}</p>
                    </Card>
                </div>
            ))}
        </div>
    );
}
