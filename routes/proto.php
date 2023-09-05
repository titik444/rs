<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/proto')->group(function () {

    // http://127.0.0.1:8000/proto/
    Route::inertia('/', 'Prototype/LandingPage');

    // http://127.0.0.1:8000/proto/SignUp
    Route::inertia('/SignUp', 'Prototype/SignUpPage');

    // http://127.0.0.1:8000/proto/Dasboard_Page
    Route::inertia('/Dasboard_Page', 'Prototype/Dasboard_Page');
});
