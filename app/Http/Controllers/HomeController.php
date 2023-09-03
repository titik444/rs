<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeedbackStoreRequest;

use App\Models\Feedback;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function store(FeedbackStoreRequest $request)
    {
        $feedback = Feedback::create([
            'name' => $request->name,
            'email' => $request->email,
            'category' => $request->category,
            'message' => $request->message,
            'rating' => $request->rating,
        ]);

        if ($feedback) {
            return redirect()->route('home.index')->with(
                [
                    'message' => 'Thank you for your feedback!',
                    'type' => 'success'
                ]
            );
        }

        return abort(500);
    }
}
