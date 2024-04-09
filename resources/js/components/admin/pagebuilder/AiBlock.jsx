import React, { useState, useEffect } from "react";
import { client } from "@gradio/client";

async function generateAI() {
    const app = await client("huggingface-projects/llama-2-7b-chat");
    const result = await app.predict("/chat", [
        "Hello!!", // string  in 'Message' Textbox component
        "Hello!!", // string  in 'System prompt' Textbox component
        1, // number (numeric value between 1 and 2048) in 'Max new tokens' Slider component
        0.1, // number (numeric value between 0.1 and 4.0) in 'Temperature' Slider component
        0.05, // number (numeric value between 0.05 and 1.0) in 'Top-p (nucleus sampling)' Slider component
        1, // number (numeric value between 1 and 1000) in 'Top-k' Slider component
        1, // number (numeric value between 1.0 and 2.0) in 'Repetition penalty' Slider component
    ]);
}

export default function AiBlock({ id, onDataChange }) {
    const [values, setValues] = useState({
        text: "",
    });

    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        setPrompt(values.text);
    }, [values.text]); // Add dependency array

    const handleInputChange = (e) => {
        setValues({ ...values, text: e.target.value });
    };

    return (
        <div>
            <div className="input flex flex-row justify-between">
                <input
                    className="w-full border p-2 rounded-lg mb-2"
                    type="text"
                    value={values.text}
                    onChange={handleInputChange}
                    placeholder="Hur många fjädrar har en anka?"
                />
                <button
                    className="px-3 bg-slate-600 text-white rounded-lg h-10 ml-2 justify-end"
                    type="button"
                    onClick={generateAI}
                >
                    Generera
                </button>
            </div>
            <textarea
                className="w-full border p-2 rounded-lg mb-2"
                name="result"
                rows="10"
                value={values.result}
                readOnly
            ></textarea>
        </div>
    );
}
