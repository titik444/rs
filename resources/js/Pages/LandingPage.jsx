import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Jumbotron from "@/Components/Jumbotron";
import WhyChooseUs from "@/Components/WhyChooseUs";
import About_Us from "@/Components/About_Us";
// component image....
import backgroundJumbotron from "@/images/backgroundJumbotron.png";
export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Jumbotron backgroundImage={backgroundJumbotron} />
            <WhyChooseUs />
            <About_Us />
        </>
    );
}
