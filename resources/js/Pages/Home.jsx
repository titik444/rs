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
import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function Home({ flashMessage }) {
    const { auth } = usePage().props;

    useEffect(() => {
        // show modal if not login
        auth.user ||
            setTimeout(() => {
                window.modal_login.showModal();
            }, 2500);
    }, []);

    // FORM LOGIN
    const formLogin = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            formLogin.reset("password");
        };
    }, []);

    const onHandleSubmitLogin = (e) => {
        e.preventDefault();

        formLogin.post(route("login"));
    };

    const onHandleChangeLogin = (event) => {
        formLogin.setData(event.target.name, event.target.value);
    };

    // FORM FEEDBACK
    const formFeedback = useForm({
        name: "",
        email: "",
        category: "",
        message: "",
        rating: 5,
    });

    const onHandleSubmitFeedback = (e) => {
        e.preventDefault();

        formFeedback.post(route("feedback.store"), {
            preserveScroll: true,
            onSuccess: () => formFeedback.reset("name", "email", "category", "message"),
        });
    };

    const onHandleChangeFeedback = (event) => {
        formFeedback.setData(event.target.name, event.target.value);
    };

    return (
        <>
            <Navbar />
            <Jumbotron backgroundImage={backgroundJumbotron} />
            <WhyChooseUs />
            <About_Us />
            <DoctorPage />
            <RatingPage />
            <Form_Guess
                form={formFeedback}
                submit={onHandleSubmitFeedback}
                handleChange={onHandleChangeFeedback}
                flashMessage={flashMessage}
            />
            <Footer />
            <Modal
                form={formLogin}
                submit={onHandleSubmitLogin}
                handleChange={onHandleChangeLogin}
            />
        </>
    );
}
