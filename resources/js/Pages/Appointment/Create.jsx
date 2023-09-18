import NavbarForUser from "@/Components/Specialist_item/NavbarForUser";
import Footer from "@/Components/Footer";
import { useForm } from "@inertiajs/react";

export default function Create({ patient, schedule }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        appointment_date: "",
        appointment_time: "",
        insurance: 0,
        no_insurance: "",
        complaint: "",
        patient_id: patient.id,
        doctor_id: schedule.doctor.id,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("appointment.store"));
    };

    return (
        <>
            <NavbarForUser />
            {/* judul  */}
            <h1 className="text-lg font-bold  text-center mt-20">
                Checking Form
            </h1>
            <form onSubmit={submit} className="w-[90%] m-auto mt-5">
                {/* masukan alamat  */}
                <label htmlFor="">
                    <span className="label-text ">Patient Name</span>
                </label>
                <input
                    type="text"
                    placeholder="address...."
                    value={patient.user.name}
                    className="input w-full bg-base-color mt-3"
                    disabled
                />

                <label htmlFor="">
                    <span className="label-text ">Doctor Name</span>
                </label>
                <input
                    type="text"
                    placeholder="address...."
                    value={schedule.doctor.user.name}
                    className="input w-full bg-base-color mt-3"
                    disabled
                />
                {/* tanggal periksa  */}
                {/* otomatis disi oleh database */}
                <label htmlFor="">
                    <span className="label-text ">Check Date</span>
                </label>
                <input
                    type="date"
                    className="input w-full bg-base-color mt-3"
                    onChange={(e) =>
                        setData("appointment_date", e.target.value)
                    }
                />
                {/* waktu ..... */}
                <label htmlFor="">
                    <span className="label-text ">Check Time</span>
                </label>
                <input
                    type="time"
                    className="input w-full bg-base-color mt-3"
                    onChange={(e) =>
                        setData("appointment_time", e.target.value)
                    }
                />
                <p class="mt-2 visible text-pink-600 text-sm">
                    adjust your attendance to the doctor's operational
                </p>

                {/* status BPJS  */}
                <div className=" w-full mt-3 flex justify-evenly">
                    <div>
                        <div className="flex justify-between  w-32 ">
                            <label className="cursor-pointer label text-sm">
                                Health Insurance
                            </label>
                            <input
                                type="radio"
                                name="insurance"
                                value="1"
                                className="checkbox checkbox-info mt-5"
                                onChange={(e) =>
                                    setData("insurance", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex justify-between w-32 ">
                        <label className="cursor-pointer label">Normal</label>
                        <input
                            type="radio"
                            name="insurance"
                            value="0"
                            className="checkbox checkbox-info mt-5"
                            onChange={(e) =>
                                setData("insurance", e.target.value)
                            }
                        />
                    </div>
                </div>
                {/* jika mengunakan BPJS , masukan nomor BPJS */}

                <input
                    type="text"
                    placeholder="number of Insurence......"
                    className="input w-full bg-base-color mt-5"
                    onChange={(e) => setData("no_insurance", e.target.value)}
                />
                {/* masukan ket keluahan  */}
                {/* md */}
                <textarea
                    placeholder="complaint ..."
                    className="textarea textarea-bordered textarea-md h-52 w-full  bg-base-color mt-3 "
                    onChange={(e) => setData("complaint", e.target.value)}
                />
                {/* button */}
                <div className="w-full  b mt-5 flex ">
                    <button
                        type="submit"
                        className="btn mx-auto text-white bg-[#1279FF]"
                        disabled={processing}
                    >
                        Submit
                    </button>
                </div>
                {/* footer  */}
            </form>
            {Object.values(errors).length > 0 && Object.values(errors)[0]}
            <Footer />
        </>
    );
}
