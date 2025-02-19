<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

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
// routes/web.php

Route::post('/contact-submit', [ContactController::class, 'submit'])->name('contact.submit');

Route::get('/', function () {
    return view('home');
});

Route::get('/services', function () {
    return view('services');
});

Route::get('/payroll', function () {
    return view('payroll');
});

Route::get('/support', function () {
    return view('support');
});
Route::get('/quickbooks', function () {
    return view('quickbooks');
});
Route::get('/financial', function () {
    return view('financial');
});

