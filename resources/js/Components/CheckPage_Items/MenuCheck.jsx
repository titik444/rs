import React from "react";
import logo1 from "@/images/Stethoscope.png";
import logo2 from "@/images/Health checkup.png";
import ModalRecordUser from "./ModalRecordUser";
function MenuCheck({ appointments }) {
    const scrollToTarget = () => {
        const targetElement = document.getElementById("targetElementId");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <ModalRecordUser appointments={appointments} />
            <h1 className="text-lg font-bold p-2 text-center md:text-xl">
                Our Service
            </h1>
            <div className="w-full flex justify-evenly h-auto p-5 md:mt-5">
                {/* title */}

                {/* logo 1...... */}
                <button
                    className="btn btn-square lg:w-16 lg:h-auto lg:p-3"
                    onClick={scrollToTarget}
                >
                    <img src={logo1} alt="logo1" className="lg:w-10" />
                </button>

                {/* logo 2..... */}
                <button
                    className="btn btn-square lg:w-16 lg:h-auto lg:p-3"
                    onClick={() =>
                        document.getElementById("record_modal").showModal()
                    }
                >
                    <img src={logo2} alt="logo2" />
                </button>
            </div>
        </>
    );
}

export default MenuCheck;
