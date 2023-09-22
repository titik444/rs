<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use SoftDeletes;

    protected $table = 'appointment';

    protected $fillable = [
        'doctor_id',
        'patient_id',
        'appointment_date',
        'appointment_time',
        'insurance',
        'no_insurance',
        'complaint',
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
