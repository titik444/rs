import React from "react";
import Modal from "@/Components/items_LandingPAge/Modal_Login";
import { usePage } from "@inertiajs/react";
export default function Jumbotron({ backgroundImage }) {
    const { auth } = usePage().props;

    const jumbotronStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div
            className="jumbotron h-[425px] flex justify-start items-center"
            style={jumbotronStyle}
        >
            {/* box text-jumbotron */}
            <div className=" p-3">
                <p className="font-montserrat text-white font-thin text-md italic text-shadow">
                    We are ready become
                </p>
                <div className="w-64 p-2">
                    <h2 className="font-roboto font-semibold text-white text-3xl text-shadow2">
                        Health And Care Solution’s
                    </h2>
                </div>
                {/* jumbotron button  */}
                {auth?.user?.id ? (
                    <h1>WELCOME {auth.user.name}</h1>
                ) : (
                    <button
                        onClick={() => {
                            window.modal_login.showModal();
                        }}
                        className="bg-[#1279FF] hover:active:bg-[#273b55] active:bg-[#273b55] w-24 h-9 mt-3.5 text-white rounded-md border-none font-extrabold drop-shadow-xl "
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
    );
}
