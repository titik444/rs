import Navbar from "@/Components/Navbar";
import Jumbotron from "@/Components/Jumbotron";
import WhyChooseUs from "@/Components/WhyChooseUs";
import About_Us from "@/Components/About_Us";
import DoctorPage from "@/Components/Professional_Doctor";
import RatingPage from "@/Components/RatingPage";
import Form_Guess from "@/Components/Form_Guess";
import Footer from "@/Components/Footer";
import backgroundJumbotron from "@/images/backgroundJumbotron.png";
import Modal from "@/Components/items_LandingPAge/Modal_Login";
import { usePage } from "@inertiajs/react";
import NavbarForUser from "@/Components/Specialist_item/NavbarForUser";

export default function Home() {
    const { auth } = usePage().props;

    return (
        <>
            {!auth.user ? <Navbar /> : <NavbarForUser />}

            <Jumbotron
                text1={"We are ready become"}
                text2={"Health And Care Solution’s"}
                backgroundImage={backgroundJumbotron}
                action={"login"}
            />
            <WhyChooseUs />
            <About_Us />
            <DoctorPage />
            <RatingPage />
            <Form_Guess />
            <Footer />
            <Modal />
        </>
    );
}
