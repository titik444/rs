import React from "react";

function CardInfo({ logo, title, text }) {
    return (
        <div className="card w-80 bg-base-color mt-5 flex items-center shadow-xl p-2 md:w-60 md:p-0">
            {/* Image logo */}
            <div className="w-22 h-20 p-2 md:p-3">
                <img
                    src={logo}
                    alt={title}
                    className="w-full h-full object-cover mt-2 md:mt-4"
                />
            </div>
            <div className="card-body text-center">
                {/* Judul card */}
                <h1 className="font-montserrat font-bold text-lg md:font-semibold">
                    {title}
                </h1>
                {/* Text card */}
                <p className="font-montserrat font-thin md:text-sm ">{text}</p>
            </div>
        </div>
    );
}

export default CardInfo;
