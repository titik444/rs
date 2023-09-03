import { useForm } from "@inertiajs/react";

export default function Create({ patient, schedule }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        appointment_date: "",
        appointment_time: "",
        insurance: "",
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
            <form onSubmit={submit}>
                <input type="text" defaultValue={patient.user.name} disabled />
                <input
                    type="text"
                    defaultValue={schedule.doctor.user.name}
                    disabled
                />
                <input
                    type="date"
                    onChange={(e) =>
                        setData("appointment_date", e.target.value)
                    }
                />
                <input
                    type="time"
                    onChange={(e) =>
                        setData("appointment_time", e.target.value)
                    }
                />

                <input
                    name="insurance"
                    type="radio"
                    value="0"
                    onChange={(e) => setData("insurance", e.target.value)}
                />
                <input
                    name="insurance"
                    type="radio"
                    value="1"
                    onChange={(e) => setData("insurance", e.target.value)}
                />

                <input
                    type="text"
                    onChange={(e) => setData("no_insurance", e.target.value)}
                />
                <textarea
                    onChange={(e) => setData("complaint", e.target.value)}
                ></textarea>
                <button type="submit" disabled={processing}>
                    submit
                </button>
            </form>

            {Object.values(errors).length > 0 && Object.values(errors)[0]}
        </>
    );
}
