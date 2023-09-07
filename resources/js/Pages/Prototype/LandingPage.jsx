import { Link, Head } from "@inertiajs/react";
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
import { useEffect } from "react";
export default function LandingPage() {
    useEffect(() => {
        setTimeout(() => {
            window.modal_login.showModal();
        }, 2500);
    }, []);

    return (
        <>
            <Navbar />
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
