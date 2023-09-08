import React from "react";
import dokter1 from "@/images/Man.png";

function DokterCard() {
    return (
        <>
            <div className="w-full rounded-md h-auto flex justify-evenly items-center p-5 mt-1 drop-shadow-md bg-base-color">
                {/* foto card */}
                <img src={dokter1} alt="dokter" />
                {/* text card */}
                <div>
                    <h1>Dr. Michael Smith</h1>
                    <h2>Monday & Thuesday</h2>
                    <h3>07.00 - 11.00 WIB</h3>
                </div>
            </div>
        </>
    );
}

export default DokterCard;
