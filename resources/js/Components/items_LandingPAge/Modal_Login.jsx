import { Link, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

function Modal_Login(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const { flashMessage } = usePage().props;

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            preserveScroll: true,
            onSuccess: () => {
                setTimeout(redirect, 1500);
                function redirect() {
                    window.location = "/schedule";
                }
            },
        });
    };

    const HandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    return (
        <>
            {/* modal login  */}
            <dialog open={props.show} id="modal_login" className="modal">
                <form
                    method="dialog"
                    className="modal-box space-y-4 md:space-y-6"
                    onSubmit={submit}
                >
                    {/* ALERT SUCESS  ....................................*/}
                    {flashMessage?.message && (
                        <div className="alert alert-success w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{flashMessage.message}</span>
                        </div>
                    )}
                    {/* AKHIR ALERT SUCESS ........... */}

                    {/*  AKHIR ALERT GAGAL   */}
                    {Object.values(errors).length > 0 && (
                        <div className="alert alert-error">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{Object.values(errors)[0]}</span>
                        </div>
                    )}
                    {/*  AKHIR ALERT GAGAL   */}

                    {/* close button modal */}
                    <Link className="btn btn-sm btn-circle btn-ghost absolute right-6 top-2">
                        ✕
                    </Link>
                    {/* body modal  */}

                    <div>
                        {/* login email................. */}
                        <label
                            htmlFor="email"
                            className="block mb-2 text-md font-bold text-gray-900 dark:text-white after:content-['*']
                            after:text-pink-500 after:ml-0.5"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="your@email.com..."
                            required
                            onChange={(e) => HandleChange(e)}
                        />
                    </div>
                    {/* login password  */}
                    <div className="mb-10">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-bold text-gray-900   after:content-['*']
                            after:text-pink-500 after:ml-0.5"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            required
                            minLength={5}
                            onChange={(e) => HandleChange(e)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    name="remember"
                                    value={data.remember}
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-500 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required=""
                                    onChange={(e) => HandleChange(e)}
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="remember"
                                    className="text-gray-500 dark:text-gray-300"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Forgot password?
                        </a>
                    </div>
                    {/* button Log In */}
                    <div className="w-full h-10 flex">
                        <button
                            type="submit"
                            className="btn text-white bg-[#1279FF] mx-auto btn-active "
                            disabled={processing}
                        >
                            Log In
                        </button>
                    </div>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?{" "}
                        <Link
                            href={"/register"}
                            className="font-medium text-primary-600 hover:underline hover:text-red-400 dark:text-primary-500"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </dialog>
        </>
    );
}

export default Modal_Login;
