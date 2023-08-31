import React from "react";

function CardInfo({ logo, title, text }) {
    return (
        <div className="card w-80 bg-base-color mt-5 flex items-center shadow-xl p-2">
            {/* Image logo */}
            <div className="w-22 h-20 p-2">
                <img
                    src={logo}
                    alt={title}
                    className="w-full h-full object-cover mt-2"
                />
            </div>
            <div className="card-body text-center">
                {/* Judul card */}
                <h1 className="font-montserrat font-bold text-lg">{title}</h1>
                {/* Text card */}
                <p className="font-montserrat font-thin ">{text}</p>
            </div>
        </div>
    );
}

export default CardInfo;
