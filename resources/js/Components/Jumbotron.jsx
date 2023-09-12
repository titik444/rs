import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import Modal_Login from "@/Components/items_LandingPAge/Modal_Login";

export default function Jumbotron({ backgroundImage, text1, text2, action }) {
    const { auth } = usePage().props;
    const [showModal, setShowModal] = useState(false);

    const jumbotronStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <>
            <Modal_Login show={showModal} />
            <div
                className="jumbotron h-[425px] lg:h-[450px] flex justify-start items-center lg:bg-fixed"
                style={jumbotronStyle}
            >
                {/* box text-jumbotron */}
                <div className=" p-3 lg:p-7">
                    <p className="font-montserrat text-white font-thin text-md italic text-shadow md:text-lg md:ml-3">
                        {text1}
                    </p>
                    <div className="w-64 p-2 md:w-72 lg:w-96  ">
                        <h2 className="font-roboto font-semibold text-white text-3xl text-shadow2 md:text-4xl lg:text-5xl">
                            {text2}
                        </h2>
                    </div>
                    {/* jumbotron button  */}
                    {action === "login" && !auth.user ? (
                        <button
                            onClick={() =>
                                document
                                    .getElementById("modal_login")
                                    .showModal()
                            }
                            className="bg-[#1279FF]  hover:active:bg-[#273b55] active:bg-[#273b55] w-24 h-9 mt-3.5 text-white rounded-md border-none font-extrabold drop-shadow-xl md:ml-3 lg:w-28 lg:h-10 lg:mt-5"
                        >
                            Login
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}
