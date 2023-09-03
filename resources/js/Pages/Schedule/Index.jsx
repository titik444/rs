import { Link } from "@inertiajs/react";

export default function Index({ specialists }) {
    return specialists.map((specialist) => (
        <div key={specialist.id}>
            <Link href={`/schedule/${specialist.id}`}>
                {specialist.name}
            </Link>
        </div>
    ));
}
