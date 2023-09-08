import React from "react";
import logo1 from "@/images/Stethoscope.png";
import logo2 from "@/images/Health checkup.png";
function MenuCheck() {
    const scrollToTarget = () => {
        const targetElement = document.getElementById("targetElementId");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <h1 className="text-lg font-bold p-2 text-center">About Us</h1>
            <div className="w-full flex justify-evenly h-auto p-5">
                {/* title */}

                {/* logo 1...... */}
                <button className="btn btn-square" onClick={scrollToTarget}>
                    <img src={logo1} alt="logo1" />
                </button>

                {/* logo 2..... */}
                <button
                    className="btn btn-square"
                    onClick={() =>
                        document.getElementById("recordModal").showModal()
                    }
                >
                    <img src={logo2} alt="logo2" />
                </button>
            </div>
        </>
    );
}

export default MenuCheck;
