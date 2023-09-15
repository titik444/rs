import React, { useEffect, useState } from "react";

function ModalRecordUser() {
    const [activeTabs, setActiveTabs] = useState("1");

    useEffect(() => {
        console.log(activeTabs);
    }, [activeTabs]);

    const recordSample = [
        {
            id: 1,
            dokterName: "budi",
            tnggl: "09/23/2023",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores asperiores perspiciatis mollitia iste eligendi iure reprehenderit? Mollitia est impedit incidunt minima unde illo tenetur magnam sequi amet fuga nesciunt earum a, quis voluptatem quos nostrum dolores nobis ipsam rem?",
        },
        {
            id: 2,
            dokterName: "rudi",
            tnggl: "09/19/2023",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores asperiores perspiciatis mollitia iste eligendi iure reprehenderit? Mollitia est impedit incidunt minima unde illo tenetur magnam sequi amet fuga nesciunt earum a, quis voluptatem quos nostrum dolores nobis ipsam rem?",
        },
        {
            id: 3,
            dokterName: "rudi",
            tnggl: "09/10/2023",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores asperiores perspiciatis mollitia iste eligendi iure reprehenderit? Mollitia est impedit incidunt minima unde illo tenetur magnam sequi amet fuga nesciunt earum a, quis voluptatem quos nostrum dolores nobis ipsam rem?",
        },
    ];
    return (
        <>
            {}
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
                                    {tab.id}
                                </a>
                            ))}
                        </div>
                        <div>
                            {/* content */}
                            {recordSample.map((item) => {
                                if (item.id == activeTabs) {
                                    <h1 key={item.id}>asaas</h1>;
                                }
                            })}
                            {/* akhir content */}
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
