import React from "react";
import DokterCard from "./DokterCard";
function Dokter() {
    return (
        <>
            <div className="flex flex-col m-auto w-96">
                <h1 className="text-lg font-bold p-2 text-center mt-5">
                    Our Dokter
                </h1>
                <DokterCard />
                <DokterCard />
                <DokterCard />
            </div>
        </>
    );
}

export default Dokter;
