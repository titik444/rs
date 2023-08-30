import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <form onSubmit={submit}>
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
                <button type="submit" disabled={processing}>
                    login
                </button>
            </form>

            {Object.values(errors).length > 0 && Object.values(errors)[0]}
        </>
    );
}
