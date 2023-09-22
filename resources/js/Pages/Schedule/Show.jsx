import NavbarForUser from "@/Components/Specialist_item/NavbarForUser";
import Jumbotron from "@/Components/Jumbotron";
import DasboradImage from "@/images/dasboard.png";
import MenuCheck from "@/Components/CheckPage_Items/MenuCheck";
import Dokter from "@/Components/CheckPage_Items/Dokter";
import Footer from "@/Components/Footer";
import { usePage } from "@inertiajs/react";

export default function Show({ schedules, appointments }) {
    const { auth } = usePage().props;

    return (
        <>
            {/* Navbar ...... */}
            <NavbarForUser />
            {/* jumbotron ....... */}
            <Jumbotron
                text1={`Welcome ${auth.user.name}`}
                text2={"We are your Health Solution"}
                backgroundImage={DasboradImage}
            />
            {/* menu  */}
            <MenuCheck appointments={appointments} />
            {/* dokter card.... */}
            <Dokter schedules={schedules} />
            <Footer />
        </>
    );
}
