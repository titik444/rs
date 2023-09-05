import SignUp_Form from "@/Components/SIgn_Up_Element/SignUp_Form";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        nik: "",
        password: "",
        password_confirmation: "",
        phone: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    return (
        <>
            <SignUp_Form
                data={data}
                errors={errors}
                submit={submit}
                handleChange={onHandleChange}
                processing={processing}
            />
        </>
    );
}
