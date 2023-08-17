import { Link } from "@inertiajs/react";

export default function Test() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <p className="container">
                Untuk kehalaman utama silahkan ke klik link dibawah ini
                <br />
                <Link className="text-3xl font-bold text-sky-400" href="/">
                    Home
                </Link>
            </p>
        </>
    );
}
