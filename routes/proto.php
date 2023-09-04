<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function () {

    Route::inertia('/', 'LandingPage');
});


Route::prefix('/')->group(function () {

    Route::inertia('/SignUp', 'SignUpPage');
});
