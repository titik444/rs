import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        phone: "",
        date_of_birth: "",
        address: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <input
                    type="text"
                    value={data.nik}
                    onChange={(e) => setData("nik", e.target.value)}
                />
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />
                <input
                    type="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                />
                <input
                    type="text"
                    value={data.phone}
                    onChange={(e) => setData("phone", e.target.value)}
                />
                <input
                    type="date"
                    value={data.date_of_birth}
                    onChange={(e) => setData("date_of_birth", e.target.value)}
                />
                <textarea
                    value={data.address}
                    onChange={(e) => setData("address", e.target.value)}
                />

                <button type="submit" disabled={processing}>
                    submit
                </button>
            </form>

            {Object.values(errors).length > 0 && Object.values(errors)[0]}
        </>
    );
}
