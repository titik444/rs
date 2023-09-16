import React, { useEffect, useState } from "react";

function ModalRecordUser() {
    const [activeTabs, setActiveTabs] = useState();
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        const findData = recordSample.find((el) => el.id === activeTabs);
        if (findData) {
            setShowData([findData]);
        }
    }, [activeTabs]);

    const recordSample = [
        {
            id: 0,
            dokterName: "mamang",
            tnggl: "09/23/2023",
            content: "sakit hati pak",
        },
        {
            id: 1,
            dokterName: "justin",
            tnggl: "09/19/2023",
            content: "sakit kepala",
        },
        {
            id: 2,
            dokterName: "rudi",
            tnggl: "09/10/2023",
            content: "sakit gigi pak",
        },
        {
            id: 3,
            dokterName: "rudi",
            tnggl: "09/10/2023",
            content: "kesurupan pak",
        },
        {
            id: 4,
            dokterName: "rudi",
            tnggl: "09/10/2023",
            content: "lagi gx punya uang pak",
        },
    ];
    return (
        <>
            <ul>
                <dialog id="record_modal" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="tabs tabs-boxed w-full">
                            {/*  menu record by date ..... */}
                            {recordSample.map((tab) => (
                                <a
                                    key={tab.id}
                                    className={`tab ${
                                        activeTabs == tab.id
                                            ? "tab-active"
                                            : " "
                                    } w-20 ml-5 hover:bg-primary-content`}
                                    onClick={() => setActiveTabs(tab.id)}
                                >
                                    {tab.id + 1}
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
                                        value={item.tnggl}
                                        readOnly
                                    />
                                    {/* nama dokter */}
                                    <label className="p-2">Dokter Name</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-base-color mt-2 "
                                        value={item.dokterName}
                                        readOnly
                                    />
                                    {/*  keterangan  */}
                                    <label className="p-2">Keterangan</label>
                                    <textarea
                                        className="textarea textarea-bordered bg-base-color textarea-lg w-full  "
                                        value={item.content}
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
