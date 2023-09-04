import React, { useEffect, useRef, useState } from "react";
import logo from "../images/Rumah Sakit 2.png";
import { FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { FaBriefcaseMedical } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsTranslate, BsFillChatSquareDotsFill } from "react-icons/bs";

export function Navbar() {
    // logic sidebar effect :
    // baut varable boolean , sidebarAktif
    const [sidebarAktif, setSidebarAktif] = useState(false);
    const sidebarRef = useRef(null);
    const handleClick = () => {
        setSidebarAktif(true);
    };
    useEffect(() => {
        console.log(sidebarAktif);
        if (sidebarAktif) {
            // ambil element DOM dengan useRef
            const sidebar = sidebarRef.current;
            // tambhkan class "sidebar-active" didalam sidebar ref
            sidebar.classList.add("sidebar-active");
            // ketika sidebarAktif true maka add classlist efect
        }
    }, [sidebarAktif]);
    //  mengembalikan sidebarActif menjadi false ;
    // ketika menyentuh selain sidebararea , dan humberge
    return (
        <>
            <nav
                ref={sidebarRef}
                id="sidebar"
                className="w-52 h-auto rounded-md fixed top-5  bg-white z-20 p-3 -right-[250px]"
            >
                <ul className="block">
                    {/* item komponen ------ LI  */}
                    <li className="group hover:scale-110">
                        <a
                            href="#home"
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <AiFillHome />
                                {/* teks */}
                                <h2 className="pl-5 text-sm">Home</h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}
                    {/* item komponen ------ LI  */}
                    <li className="group  hover:scale-110">
                        <a
                            href="#home"
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <AiFillInfoCircle />
                                {/* teks */}
                                <h2 className="pl-5 text-sm">About Us</h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}
                    {/* item komponen ------ LI  */}
                    <li className="group  hover:scale-110">
                        <a
                            href="#home"
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <FaBriefcaseMedical />
                                {/* teks */}
                                <h2 className="pl-5 text-sm">Check</h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}
                    {/* item komponen ------ LI  */}
                    <li className="group  hover:scale-110">
                        <a
                            href="#home"
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <BsFillChatSquareDotsFill />
                                {/* teks */}
                                <h2 className="pl-5 text-sm">Testimony</h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}
                    {/* item komponen ------ LI  */}
                    <li className="group  hover:scale-110">
                        <a
                            href="#home"
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <BsTranslate />
                                {/* teks */}
                                <h2 className="pl-5 text-sm">Language</h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}
                </ul>
            </nav>
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
                <div id="hamburger" onClick={handleClick} className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-12 h-7 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
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
