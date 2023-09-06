import NavbarForUser from "@/Components/DasbordUser_item/NavbarForUser";
import Jumbotron from "@/Components/Jumbotron";
import DasboradImage from "@/images/dasboard.png";
function Dasboard_Page() {
    return (
        <>
            {/* navbar */}
            <NavbarForUser />
            {/* jumbotron */}
            <Jumbotron
                text1={"Welcome mr.Smith"}
                text2={"We are your Health Solution"}
                backgroundImage={DasboradImage}
            />
            {/* card specialist */}
            {/* footer */}
        </>
    );
}

export default Dasboard_Page;