import Jumbotron from "@/Components/Jumbotron";
import NavbarForUser from "@/Components/Specialist_item/NavbarForUser";
import Specialist_Card from "@/Components/Specialist_item/Specialist_Card";
import DasboradImage from "@/images/dasboard.png";
import { Link, usePage } from "@inertiajs/react";

export default function Index({ specialists }) {
    const { auth } = usePage().props;

    return (
        <>
            {/* navbar */}
            <NavbarForUser />
            {/* jumbotron */}
            <Jumbotron
                text1={`Welcome ${auth.user.name}`}
                text2={"We are your Health Solution"}
                backgroundImage={DasboradImage}
            />
            {/* card specialist */}
            <Specialist_Card specialists={specialists} />
            {/* footer */}
        </>
    );
}
