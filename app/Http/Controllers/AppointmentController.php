<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Patient;
use App\Models\DoctorSchedule;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function create($id)
    {
        $patient = Patient::with('user')->where('user_id', Auth::id())->first();

        $schedule = DoctorSchedule::with('doctor')->with('doctor.user')->where('id', $id)->first();

        return Inertia::render('Appointment/Create', [
            'patient' => $patient,
            'schedule' => $schedule,
        ]);
    }

    public function store(Request $request)
    {
        $appointment = Appointment::create([
            'patient_id' => $request->patient_id,
            'doctor_id' => $request->doctor_id,
            'appointment_date' => $request->appointment_date,
            'appointment_time' => $request->appointment_time,
            'insurance' => $request->insurance,
            'no_insurance' => $request->no_insurance,
            'complaint' => $request->complaint,
        ]);

        if ($appointment) {
            return redirect()->route('appointment.success')->with('success', 'Appointment created successfully');
        }

        return abort(500);
    }

    public function success()
    {
        return Inertia::render('Appointment/Success');
    }
}
