<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/proto')->group(function () {

    Route::inertia('/', 'LandingPage');
});


Route::prefix('/')->group(function () {

    Route::inertia('/SignUp', 'SignUpPage');
});

Route::prefix('/')->group(function () {

    Route::inertia('/Dasboard_Page', 'Dasboard_Page');
});