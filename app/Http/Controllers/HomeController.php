<?php

namespace App\Http\Controllers;

use App\Models\Feedback;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function store(Request $request)
    {
        $feedback = Feedback::create([
            'name' => $request->name,
            'email' => $request->email,
            'category' => $request->category,
            'message' => $request->message,
            'rating' => $request->rating,
        ]);

        if ($feedback) {
            return redirect()->route('home.index')->with('success', 'Thank you for your feedback!');
        }

        return abort(500);
    }
}
