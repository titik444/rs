import React from "react";

function DokterCard({ nama, image, date, time }) {
    return (
        <>
            <div className="w-full rounded-md h-auto flex justify-evenly items-center p-5 mt-3 hover:scale-105 transform transition-transform duration-300 ease-in-out drop-shadow-md bg-base-color">
                {/* foto card */}
                <div className="">
                    <img src={image} alt="dokter" className="ml-5" />
                    <h1 className="text-sm p-2 mr-2 font-bold">{nama}</h1>
                </div>

                {/* text card */}
                <div className="text-center">
                    <h2 className="text-sm font-bold">{date}</h2>
                    <h3 className="text-sm">{time}</h3>
                </div>
            </div>
        </>
    );
}

export default DokterCard;
