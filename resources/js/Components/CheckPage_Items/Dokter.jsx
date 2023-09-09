import React from "react";
import DokterCard from "./DokterCard";
import dokter1 from "@/images/Man.png";
import dokter2 from "@/images/Woman.png";
function Dokter() {
    return (
        <>
            <div
                className="flex flex-col m-auto w-96 p-2 "
                id="targetElementId"
            >
                <h1 className="text-lg font-bold p-2 text-center mt-5">
                    Our Dokter
                </h1>
                {/* // ketika gambar dokter laki laki ..... */}
                <DokterCard
                    image={dokter1}
                    nama={"Dr. Michael Smith"}
                    date={"Monday & Thuesday"}
                    time={"12.00 -  15.00 WIB"}
                />
                {/* // ketika gambar dokter perempuan ...... */}
                <DokterCard
                    image={dokter2}
                    nama={"Dr. Jessica Martinez"}
                    date={"Monday & Thuesday"}
                    time={"12.00 -  15.00 WIB"}
                />
                <DokterCard
                    image={dokter1}
                    nama={"Dr. Daniel Martin"}
                    date={"Monday & Thuesday"}
                    time={"12.00 -  15.00 WIB"}
                />
                <div className="w-full mt-5 flex ">
                    <button className="btn bg-base-color btn-sm mx-auto">
                        See More ..
                    </button>
                </div>
            </div>
        </>
    );
}

export default Dokter;
