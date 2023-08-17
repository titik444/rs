<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('/proto')->group(function () {
    Route::get('/test', function () {
        return Inertia::render('Test');
    });
});
