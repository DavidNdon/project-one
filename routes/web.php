<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Auth\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::inertia('/', 'welcome')->name('home');

//add route for signup page
Route::get('/signup', function () {
    return Inertia::render('Signup'); 
});

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');
