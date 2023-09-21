import React, { useEffect, useState } from "react";

function ModalRecordUser({ appointments }) {
    const [activeTabs, setActiveTabs] = useState();
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        const findData = appointments.find((el) => el.id === activeTabs);
        if (findData) {
            setShowData([findData]);
        }
    }, [activeTabs]);

    return (
        <>
            <ul>
                <dialog id="record_modal" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="tabs tabs-boxed w-full">
                            {/*  menu record by date ..... */}
                            {appointments.map((tab, index) => (
                                <a
                                    key={tab.id}
                                    className={`tab ${
                                        activeTabs == tab.id
                                            ? "tab-active"
                                            : " "
                                    } w-20 ml-5 hover:bg-primary-content`}
                                    onClick={() => setActiveTabs(tab.id)}
                                >
                                    {index + 1}
                                </a>
                            ))}
                        </div>
                        <div className="bg-base-200 w-full h-auto mt-10">
                            {showData.map((item) => (
                                <div key={item.id}>
                                    {/* tanggal periksa  */}
                                    <label className="p-2">Date Check</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-base-color mt-2 "
                                        value={item.appointment_date}
                                        readOnly
                                    />
                                    {/* nama dokter */}
                                    <label className="p-2">Doctor's name</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-base-color mt-2 "
                                        value={item.doctor.user.name}
                                        readOnly
                                    />
                                    {/*  keterangan  */}
                                    <label className="p-2">information</label>
                                    <textarea
                                        className="textarea textarea-bordered bg-base-color textarea-lg w-full  "
                                        value={item.complaint}
                                        readOnly
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </ul>
        </>
    );
}
export default ModalRecordUser;
