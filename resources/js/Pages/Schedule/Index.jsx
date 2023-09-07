import NavbarForUser from "@/Components/DasbordUser_item/NavbarForUser";
import Jumbotron from "@/Components/Jumbotron";
import DasboradImage from "@/images/dasboard.png";
import Specialist_Card from "@/Components/DasbordUser_item/Specialist_Card";
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
