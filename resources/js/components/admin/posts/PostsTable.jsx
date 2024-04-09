import Card from "@/layouts/components/Card";
import { Link } from "@inertiajs/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function PostsTable() {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(0);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get("/api/posts/categories");
            setCategories(response.data);
        };

        fetchCategories();
    }, [setCategories]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`/api/posts/category/${category}`);
            setPosts(response.data);
        };

        fetchPosts();
    }, [category]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <Card>
            <div className="flex justify-end mb-5 space-x-5">
                <select
                    className="rounded-lg border border-gray-200"
                    name="category"
                    id=""
                    onChange={handleCategoryChange}
                >
                    <option value="0">Alla</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.category_name}
                        </option>
                    ))}
                </select>
            </div>
            <table className="w-full">
                <thead className="border-b-2 border-gray-200">
                    <tr>
                        <th className="py-2">Inlägg</th>
                        <th>Kategori</th>
                        <th>Status</th>
                        <th>Senast ändrad</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr
                            key={post.id}
                            className="border-b-2 border-gray-200 transition-all hover:bg-gray-100"
                        >
                            <td className="py-5">
                                <Link
                                    className="font-bold underline transition-all"
                                    href={route("admin.posts.edit", post.id)}
                                >
                                    {post.title}
                                </Link>
                            </td>
                            <td>{post.category.category_name}</td>
                            <td>{post.status}</td>
                            <td>{post.formatted_updated_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
