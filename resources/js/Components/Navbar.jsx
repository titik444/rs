import React from "react";
import logo from "../images/Rumah Sakit 2.png";
export function Navbar() {
    return (
        <>
            <div className="navbar bg-navbar-color fixed top-0 left-0 w-full bg-white drop-shadow-md z-10">
                {/* container logo..... */}
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="logo navbar" />
                        <div className="text-[15px]">
                            BEHOS<span className="text-[#1279FF]">PITAL</span>
                        </div>
                    </a>
                </div>
                <div class="flex-none">
                    <button class="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block w-12 h-7 stroke-current"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
