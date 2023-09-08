import React from "react";
import NavbarForUser from "@/Components/Specialist_item/NavbarForUser";
import Jumbotron from "@/Components/Jumbotron";
import DasboradImage from "@/images/dasboard.png";
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
        </>
    );
}

export default Check_Page;
