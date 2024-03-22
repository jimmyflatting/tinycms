import React from "react";
import HeroOne from "./Hero/HeroOne";
import HeroTwo from "./Hero/HeroTwo";
import HeroThree from "./Hero/HeroThree";
import HeroFour from "./Hero/HeroFour";

export default function HeroComponent({ props }) {
    console.log(props);

    const renderComponent = (props) => {
        switch (props.variant) {
            case 1:
                return <HeroOne props={props} />;
            case 2:
                return <HeroTwo props={props} />;
            case 3:
                return <HeroThree props={props} />;
            case 4:
                return <HeroFour props={props} />;
            default:
                return null;
        }
    };

    return <div>{renderComponent(props)}</div>;
}
