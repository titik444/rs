import Jumbotron from "@/Components/Jumbotron";
import NavbarForUser from "@/Components/Specialist_item/NavbarForUser";
import Specialist_Card from "@/Components/Specialist_item/Specialist_Card";
import DasboradImage from "@/images/dasboard.png";
import { Link } from "@inertiajs/react";

export default function Index({ specialists }) {
    return (
        <>
            {/* navbar */}
            <NavbarForUser />
            {/* jumbotron */}
            <Jumbotron
                text1={"Welcome mr.Ilham"}
                text2={"We are your Health Solution"}
                backgroundImage={DasboradImage}
            />
            {/* card specialist */}
            <Specialist_Card specialists={specialists} />
            {/* footer */}
        </>
    );
}
