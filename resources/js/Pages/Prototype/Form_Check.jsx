import React from "react";
import NavbarForUser from "@/Components/Specialist_item/NavbarForUser";
import Footer from "@/Components/Footer";
function Form_Check() {
    return (
        <>
            <NavbarForUser />
            {/* judul  */}
            <h1 className="text-lg font-bold  text-center mt-20">
                Checking Form
            </h1>
            <form action="" className="p-3">
                {/* masukan calon pasien */}
                <label htmlFor="">
                    <span className="label-text ">patient's name</span>
                </label>
                <input
                    type="text"
                    placeholder="name of patient's...."
                    className="input w-full bg-base-color mt-3"
                />
                {/* masukan alamat  */}
                <label htmlFor="">
                    <span className="label-text ">patient address</span>
                </label>
                <input
                    type="text"
                    placeholder="address...."
                    className="input w-full bg-base-color mt-3"
                />
                {/* tanggal periksa  */}
                {/* otomatis disi oleh database */}
                <label htmlFor="">
                    <span className="label-text ">Check_Date</span>
                </label>
                <input
                    type="date"
                    className="input w-full bg-base-color mt-3"
                />
                {/* waktu ..... */}
                <label htmlFor="">
                    <span className="label-text ">time of check</span>
                </label>
                <input
                    type="time"
                    className="input w-full bg-base-color mt-3"
                />
                {/* nama dokter  */}
                {/* otomatis diisi oleh database  */}
                <label htmlFor="">
                    <span className="label-text ">name of Docter</span>
                </label>
                <input
                    type="text"
                    placeholder="Dokter Name ...."
                    className="input w-full bg-base-color mt-3"
                />
                {/* status BPJS  */}
                <div className=" w-full mt-3 flex justify-evenly">
                    <div>
                        <div className="flex justify-between  w-32 ">
                            <label className="cursor-pointer label text-sm">
                                Health Insurance
                            </label>
                            <input
                                type="checkbox"
                                className="checkbox checkbox-info mt-5"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between w-32 ">
                        <label className="cursor-pointer label">Normal</label>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-info mt-5"
                        />
                    </div>
                </div>
                {/* jika mengunakan BPJS , masukan nomor BPJS */}

                <input
                    type="text"
                    placeholder="number of Insurence......"
                    className="input w-full bg-base-color mt-5"
                />
                {/* masukan ket keluahan  */}
                {/* md */}
                <textarea
                    placeholder="complaint ..."
                    className="textarea textarea-bordered textarea-md w-full  bg-base-color mt-3 "
                ></textarea>
                {/* button */}
                <div className="w-full  b mt-5 flex ">
                    <button
                        type="submit"
                        className="btn mx-auto text-white bg-[#1279FF]"
                    >
                        Submit
                    </button>
                </div>
                {/* footer  */}
            </form>
            <Footer />
        </>
    );
}

export default Form_Check;
