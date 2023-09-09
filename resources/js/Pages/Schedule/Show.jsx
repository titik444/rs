import NavbarForUser from "@/Components/Specialist_item/NavbarForUser";
import Jumbotron from "@/Components/Jumbotron";
import DasboradImage from "@/images/dasboard.png";
import MenuCheck from "@/Components/CheckPage_Items/MenuCheck";
import Dokter from "@/Components/CheckPage_Items/Dokter";
import Footer from "@/Components/Footer";
import { Link } from "@inertiajs/react";

export default function Show({ schedules }) {
    // return schedules.map((schedule) => (
    //     <div key={schedule.id}>
    //         <Link href={`/appointment/create/${schedule.id}`}>
    //             {schedule.doctor.user.name} - {schedule.day} -{" "}
    //             {schedule.start_time} - {schedule.end_time}
    //         </Link>
    //     </div>
    // ));

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
            <Dokter schedules={schedules} />
            <Footer />
        </>
    );
}
