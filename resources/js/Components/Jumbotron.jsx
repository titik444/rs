import React from "react";
import background from "../images/backgroundJumbotron.png";

export default function Jumbotron() {
    const jumbotronStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Atur sesuai kebutuhan
        backgroundPosition: "center", // Atur sesuai kebutuhan
    };

    return <div className="jumbotron h-[425px]" style={jumbotronStyle}></div>;
}
