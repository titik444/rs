<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/proto')->group(function () {

    Route::inertia('/', 'LandingPage');
});
