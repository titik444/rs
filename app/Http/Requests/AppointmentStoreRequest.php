<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {

        return [
            'patient_id' => 'exists:App\Models\Patient,id',
            'doctor_id' => 'exists:App\Models\Doctor,id',
            'appointment_date' => 'required|date',
            'appointment_time' => 'required',
            'insurance' => 'required',
            'complaint' => 'required',
        ];
    }
}
