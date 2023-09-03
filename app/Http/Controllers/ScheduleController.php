<?php

namespace App\Http\Controllers;

use App\Models\DoctorSchedule;
use App\Models\Specialist;

use Inertia\Inertia;

class ScheduleController extends Controller
{
    public function index()
    {
        return Inertia::render('Schedule/Index', [
            'specialists' => Specialist::all(),
        ]);
    }

    public function show($id)
    {
        $schedules = DoctorSchedule::with('doctor')
            ->with('doctor.user')
            ->whereRelation('doctor', 'specialist_id', $id)
            ->get();

        return Inertia::render('Schedule/Show', [
            'schedules' => $schedules,
        ]);
    }
}
