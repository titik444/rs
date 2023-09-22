import React, { useEffect, useRef, useState } from "react";
import logo from "@/images/Rumah Sakit 2.png";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaBriefcaseMedical, FaHospitalUser } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";

import { BiLogOut } from "react-icons/bi";
import { Link, usePage } from "@inertiajs/react";

function NavbarForUser() {
    const { auth } = usePage().props;

    const [sidebarAktif, setSidebarAktif] = useState(false);
    const sidebarRef = useRef(null);

    const handleClick = () => {
        setSidebarAktif(true);
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
                className="w-52 h-auto rounded-md fixed top-5 z-30  bg-white p-3 -right-[250px]  lg:h-0 lg:left-[40%] lg:top-0"
            >
                <ul className="block lg:flex">
                    {/* item komponen ------ LI  */}
                    <li className="group hover:scale-110">
                        <a
                            href="#home"
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <AiFillHome className="lg:hidden" />
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
                                <FaBriefcaseMedical className="lg:hidden" />
                                {/* teks */}
                                <h2 className="pl-5 text-sm">Check</h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}
                    {/* judul container... */}

                    {/* item card specialist.....*/}
                    {/* item komponen ------ LI  */}
                    <li className="group  hover:scale-110 hover:cursor-pointer">
                        <a
                            onClick={() =>
                                document
                                    .getElementById("record_modal")
                                    .showModal()
                            }
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <FaHospitalUser className="lg:hidden" />
                                {/* teks */}
                                <h2 className="pl-5 text-sm">Record</h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}
                    <li className="group  hover:scale-110">
                        <a
                            href="#home"
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <BsTranslate className="lg:hidden" />
                                {/* teks */}
                                <h2 className="pl-5 text-sm">Language</h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}

                    {/* item komponen ------ LI  */}
                    <li className=" group  hover:scale-110">
                        <a className="text-base text-dark py-2 mx-8 flex">
                            <div className="w-full flex justify-start items-center text-xl py-2 text-red-500">
                                {/* logo */}
                                <BiLogOut className="lg:hidden" />
                                {/* teks */}
                                <h2 className="pl-5 text-sm font-semibold lg:w-32 ">
                                    <Link
                                        as="button"
                                        method="POST"
                                        href={"/logout"}
                                    >
                                        Log Out
                                    </Link>
                                </h2>
                            </div>
                        </a>
                    </li>
                    {/* akhir  item komponen ------ LI  */}

                    {/* item komponen ------ LI  */}
                    <li className="group mt-[50px] border border-t-black md:hidden hover:scale-110 ">
                        <a
                            href="#home"
                            className="text-base text-dark py-2 mx-8 flex"
                        >
                            <div className="w-full flex justify-start items-center text-xl py-2">
                                {/* logo */}
                                <BsPersonCircle />
                                {/* teks */}
                                <h2 className="pl-3 text-sm">
                                    {auth?.user?.name}
                                </h2>
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
                <div
                    id="hamburger"
                    onClick={handleClick}
                    className="flex-none lg:hidden"
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
        </>
    );
}

export default NavbarForUser;
