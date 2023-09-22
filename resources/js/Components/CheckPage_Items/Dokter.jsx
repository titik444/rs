import React from "react";
import DokterCard from "./DokterCard";
import dokter1 from "@/images/Man.png";
import dokter2 from "@/images/Woman.png";
import { Link } from "@inertiajs/react";
import moment from "moment/moment";
function Dokter({ schedules }) {
    return (
        <>
            <div
                className="flex flex-col m-auto w-[90%] p-2 mt-20 "
                id="targetElementId"
            >
                <h1 className="text-lg font-bold p-2 text-center mt-5">
                    Our Docter
                </h1>

                {schedules.map((schedule) => (
                    <div key={schedule.id}>
                        <Link href={`/appointment/create/${schedule.id}`}>
                            <DokterCard
                                image={dokter1}
                                nama={schedule.doctor.user.name}
                                date={schedule.day}
                                time={`${moment(
                                    schedule.start_time,
                                    "HH:mm:ss"
                                ).format("hh:mm")} - ${moment(
                                    schedule.end_time,
                                    "HH:mm:ss"
                                ).format("hh:mm")} WIB`}
                            />
                        </Link>
                    </div>
                ))}

                <div className="w-full mt-5 flex ">
                    <button className="btn bg-base-color btn-sm mx-auto">
                        See More ..
                    </button>
                </div>
            </div>
        </>
    );
}

export default Dokter;
