import React from "react";
import logo1 from "@/images/Stethoscope.png";
import logo2 from "@/images/Health checkup.png";
function MenuCheck() {
    return (
        <>
            <h1 className="text-lg font-bold p-2 text-center">About Us</h1>
            <div className="w-full flex justify-evenly h-auto p-5">
                {/* title */}

                {/* logo 1...... */}
                <button className="btn btn-square">
                    <img src={logo1} alt="logo1" />
                </button>

                {/* logo 2..... */}
                <button className="btn btn-square ">
                    <img src={logo2} alt="logo1" />
                </button>
            </div>
        </>
    );
}

export default MenuCheck;
