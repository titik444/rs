import React from "react";
import NavbarForUser from "@/Components/Specialist_item/NavbarForUser";
import Jumbotron from "@/Components/Jumbotron";
import DasboradImage from "@/images/dasboard.png";
import MenuCheck from "@/Components/CheckPage_Items/MenuCheck";
import Dokter from "@/Components/CheckPage_Items/Dokter";
import Footer from "@/Components/Footer";
function Check_Page() {
    return (
        <>
            {/* Navbar ...... */}
            <NavbarForUser />
            {/* jumbotron ....... */}
            <Jumbotron
                text1={"Welcome mr.Ilham"}
                text2={"We are your Health Solution"}
                backgroundImage={DasboradImage}
            />
            {/* menu  */}
            <MenuCheck />
            {/* dokter card.... */}
            <Dokter />
            <Footer />
        </>
    );
}

export default Check_Page;
