import Guest from "@/layouts/Guest";
import React from "react";
import SliderComponent from "@/components/block/SliderComponent";
import TextComponent from "@/components/block/TextComponent";

export default function Page({ ...props }) {
    let content = JSON.parse(props.page.content);
    console.log(content);

    const renderBlockComponent = (block) => {
        switch (block.type) {
            case "slider":
                return (
                    <SliderComponent key={block.id} props={block.data.images} />
                );
            case "text":
                return <TextComponent key={block.id} props={block.data} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Guest>
                <h1 className="font-bold">{props.page.title}</h1>
                <div>
                    {content.map((block, index) => (
                        <div key={index}>{renderBlockComponent(block)}</div>
                    ))}
                </div>
            </Guest>
        </>
    );
}
