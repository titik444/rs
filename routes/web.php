<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__ . '/auth.php';

Route::namespace('App\Http\Controllers')->group(function () {

    Route::get('/', 'HomeController@index')->name('home.index');
    Route::post('/', 'HomeController@store')->name('feedback.store');

    Route::middleware('auth')->group(function () {
        Route::get('/schedule', 'ScheduleController@index')->name('schedule.index');
        Route::get('/schedule/{id}', 'ScheduleController@show')->name('schedule.show');

        Route::get('/appointment/create/{id}', 'AppointmentController@create')->name('appointment.create');
        Route::post('/appointment', 'AppointmentController@store')->name('appointment.store');
        Route::get('/appointment/success', 'AppointmentController@success')->name('appointment.success');
    });
});
