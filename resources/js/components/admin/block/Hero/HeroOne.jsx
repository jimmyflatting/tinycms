import React from "react";

export default function HeroOne({ props }) {
    return (
        <section
            className={`aspect-video bg-gray-200 rounded-lg bg-cover bg-center bg-no-repeat flex items-center`}
            style={{ backgroundImage: `url(${props.imageUrl})` }}
        >
            <div className="container px-20 text-white space-y-3">
                <div className="space-y-3">
                    <img
                        className="max-w-48"
                        src="https://www.alekuriren.se/wp-content/uploads/2019/10/alekuriren.svg"
                        alt=""
                    />
                    <h1 className="text-2xl font-bold max-w-48">
                        {props.title}
                    </h1>
                    <p className="text-md">{props.content}</p>
                </div>
                <div className="flex space-x-3">
                    <input
                        className="rounded-lg"
                        type="email"
                        name="signup"
                        placeholder="Email"
                    />
                    <button className="bg-black text-white px-5 rounded-lg py-2">
                        Skicka
                    </button>
                </div>
                <div className="">
                    <button className="bg-gray-800 px-4 py-1 rounded-lg">
                        CTA Button
                    </button>
                </div>
            </div>
        </section>
    );
}
