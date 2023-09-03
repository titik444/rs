import { useForm } from "@inertiajs/react";

export default function Home({ flashMessage }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        category: "",
        message: "",
        rating: 1,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("feedback.store"), {
            preserveScroll: true,
            preserveState: false,
        });
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
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />
                <select
                    value={data.category}
                    onChange={(e) => setData("category", e.target.value)}
                >
                    <option value={"Kebersihan"}>Kebersihan</option>
                    <option value={"Waktu Tunggu"}>Waktu Tunggu</option>
                    <option value={"Kualitas Pelayanan"}>
                        Kualitas Pelayanan
                    </option>
                    <option value={"Pendaftaran dan Administrasi"}>
                        Pendaftaran dan Administrasi
                    </option>
                    <option value={"Lainnya"}>Lainnya</option>
                </select>
                <textarea
                    value={data.message}
                    onChange={(e) => setData("message", e.target.value)}
                />

                <input
                    onChange={(e) => setData("rating", e.target.value)}
                    type="radio"
                    value="1"
                    name="rating"
                    defaultChecked={true}
                />
                <input
                    onChange={(e) => setData("rating", e.target.value)}
                    type="radio"
                    value="2"
                    name="rating"
                />
                <input
                    onChange={(e) => setData("rating", e.target.value)}
                    type="radio"
                    value="3"
                    name="rating"
                />
                <input
                    onChange={(e) => setData("rating", e.target.value)}
                    type="radio"
                    value="4"
                    name="rating"
                />
                <input
                    onChange={(e) => setData("rating", e.target.value)}
                    type="radio"
                    value="5"
                    name="rating"
                />

                <button type="submit" disabled={processing}>
                    submit
                </button>
            </form>

            {Object.values(errors).length > 0 && Object.values(errors)[0]}

            {flashMessage?.message && <h1>{flashMessage.message}</h1>}
        </>
    );
}
