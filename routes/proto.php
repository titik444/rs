<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function () {

    Route::inertia('/', 'LandingPage');
});
Route::prefix('/sign_up')->group(function () {

    Route::inertia('/', 'SignUp_page');
});
