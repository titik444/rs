import { Link } from "@inertiajs/react";
import React from "react";

function Modal_Login({ form, submit, handleChange }) {
    return (
        <>
            {/* modal login  */}
            <dialog id="modal_login" className="modal">
                <form
                    method="dialog"
                    className="modal-box space-y-4 md:space-y-6"
                    onSubmit={submit}
                >
                    {/* close button modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                    {/* body modal  */}

                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your@email.com..."
                            required=""
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    name="remember"
                                    value={form.remember}
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required=""
                                    onChange={(e) => handleChange(e)}
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
                            disabled={form.processing}
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

                    {/* pesan error */}
                    {Object.values(form.errors).length > 0 &&
                        Object.values(form.errors)[0]}
                </form>
            </dialog>
        </>
    );
}

export default Modal_Login;
