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

    // nanti dihapus
    Route::get('logout', 'Auth\AuthenticatedSessionController@destroy')->name('logout');

    Route::get('/', 'HomeController@index')->name('home');
    Route::post('/', 'HomeController@store')->name('feedback.store');
});
