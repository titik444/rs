import { Link } from "@inertiajs/react";

export default function Show({ schedules }) {
    return schedules.map((schedule) => (
        <div key={schedule.id}>
            <Link href={`/appointment/create/${schedule.id}`}>
                {schedule.doctor.user.name} - {schedule.day} -{" "}
                {schedule.start_time} - {schedule.end_time}
            </Link>
        </div>
    ));
}
