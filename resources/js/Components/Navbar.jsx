import React, { useEffect, useRef, useState } from "react";
import logo from "../images/Rumah Sakit 2.png";
import { FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { FaBriefcaseMedical } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsTranslate, BsFillChatSquareDotsFill } from "react-icons/bs";

export function Navbar() {
    const [sidebarAktif, setSidebarAktif] = useState(false);
    const sidebarRef = useRef(null);

    const handleClick = () => {
        setSidebarAktif(true);
    };

    const handleScroll = (id) => {
        const target = document.getElementById(id);
        if (target) {
            const yOffset = -50; // Sesuaikan dengan jumlah piksel yang ingin Anda kurangkan dari posisi akhir target
            const y =
                target.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const sidebar = sidebarRef.current;
        const items_Sidebar = sidebar.querySelectorAll("*");
        items_Sidebar.forEach((element) => {
            element.id = "sidebar";
        });
    }, []);

    const targetCursor = (e) => {
        if (e.target.id !== "hamburger" && e.target.id !== "sidebar") {
            setSidebarAktif(false);
        }
    };

    useEffect(() => {
        const sidebar = sidebarRef.current;

        if (sidebarAktif) {
            sidebar.classList.add("sidebar-active");
        } else {
            sidebar.classList.remove("sidebar-active");
        }

        // Tambahkan event listener untuk setiap klik di dokumen
        document.addEventListener("click", targetCursor);

        // Cleanup event listener saat komponen di-unmount
        return () => {
            document.removeEventListener("click", targetCursor);
        };
    }, [sidebarAktif]);

    return (
        <>
            <nav
                ref={sidebarRef}
                id="sidebar"
                className="w-52 h-auto rounded-md fixed top-5  bg-white z-20 p-3 -right-[250px] lg:h-0 lg:left-[40%] lg:top-0"
            >
                <ul className="block lg:flex">
                    {/* item komponen ------ LI  */}
                    <li className="group hover:scale-110">
                        <a
                            href="#Home"
                            className="text-base text-dark py-2 mx-8 flex"
                            onClick={() => handleScroll("Home")}
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <AiFillHome className="lg:hidden" />
                                {/* teks */}
                                <h2 className="pl-5 text-sm lg:font-semibold ">
                                    Home
                                </h2>
                            </div>
                        </a>
                    </li>

                    {/* akhir  item komponen ------ LI  */}
                    {/* item komponen ------ LI  */}
                    <li className="group  hover:scale-110">
                        <a
                            href="#About_us"
                            onClick={() => handleScroll("About_us")}
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <AiFillInfoCircle className="lg:hidden" />
                                {/* teks */}
                                <h2 className="pl-5 text-sm lg:font-semibold lg:w-20">
                                    About Us
                                </h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}
                    {/* item komponen ------ LI  */}
                    <li className="group  hover:scale-110">
                        <a
                            onClick={() => handleScroll("Check")}
                            href="#Check"
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <FaBriefcaseMedical className="lg:hidden" />
                                {/* teks */}
                                <h2 className="pl-5 text-sm lg:font-semibold ">
                                    Check
                                </h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}
                    {/* item komponen ------ LI  */}
                    <li className="group  hover:scale-110">
                        <a
                            href="#Testimony"
                            className="text-base text-dark py-2 mx-8 flex"
                            onClick={() => handleScroll("Testimony")}
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <BsFillChatSquareDotsFill className="lg:hidden" />
                                {/* teks */}
                                <h2 className="pl-5 text-sm lg:font-semibold ">
                                    Testimony
                                </h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}
                    {/* item komponen ------ LI  */}

                    {/* akhir  item komponen ------ LI  */}
                    <li
                        className="group  hover:scale-110 lg:mt-0 mt-20"
                        onClick={() =>
                            document.getElementById("modal_login").showModal()
                        }
                    >
                        <a className="text-base text-dark py-2 mx-8 flex">
                            {/* teks */}
                            <h2 className="pl-5 font-bold text-lg text-blue-500 ">
                                Login
                            </h2>
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
                <div
                    id="hamburger"
                    onClick={handleClick}
                    className="flex-none lg:hidden "
                >
                    <button id="hamburger" className="btn btn-square btn-ghost">
                        <svg
                            id="hamburger"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-12 h-7 stroke-current"
                        >
                            <path
                                id="hamburger"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mne  */}
        </>
    );
}

export default Navbar;
