<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Specialist extends Model
{
    use SoftDeletes;

    protected $table = 'specialist';

    protected $fillable = [
        'name',
        'description',
        'image',
    ];

    public function doctor()
    {
        return $this->hasMany(Doctor::class);
    }
}
