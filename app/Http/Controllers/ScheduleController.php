<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\DoctorSchedule;
use App\Models\Specialist;

use Illuminate\Support\Facades\Auth;
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

        $appointments = Appointment::with('doctor', 'doctor.user')->where('patient_id', Auth::user()->patient->id)->orderBy('created_at', 'desc')->get();

        return Inertia::render('Schedule/Show', [
            'schedules' => $schedules,
            'appointments' => $appointments,
        ]);
    }
}
