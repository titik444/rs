<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Doctor extends Model
{
    use SoftDeletes;

    protected $table = 'doctor';

    protected $fillable = [
        'specialist_id',
        'user_id',
        'image',
    ];

    public function specialist()
    {
        return $this->belongsTo(Specialist::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function doctor_schedule()
    {
        return $this->hasMany(DoctorSchedule::class);
    }

    public function appointment()
    {
        return $this->hasMany(Appointment::class);
    }
}
