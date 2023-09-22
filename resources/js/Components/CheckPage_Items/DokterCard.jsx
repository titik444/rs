import React from "react";

function DokterCard({ nama, image, date, time }) {
    return (
        <>
            <div className="w-full rounded-md h-auto flex justify-between items-center p-5 mt-3  hover:scale-105 transform transition-transform duration-300 ease-in-out drop-shadow-md bg-base-color">
                {/* foto card */}
                <div className="">
                    <img src={image} alt="dokter" className="ml-7 md:w-15" />
                    <h1 className="text-sm p-2  font-bold w-32 text-center mr-3">
                        {nama}
                    </h1>
                </div>

                {/* text card */}
                <div className="text-center mr-5">
                    <h2 className="text-sm font-bold md:text-lg">{date}</h2>
                    <h3 className="text-sm italic">{time}</h3>
                </div>
            </div>
        </>
    );
}

export default DokterCard;
