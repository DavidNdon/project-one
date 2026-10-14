<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Http\Controllers\Auth\AuthController;


Route::middleware('guest')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Login');
    })->name('login');

    Route::post('/login', [AuthController::class, 'login']);

    Route::get('/signup', function () {
        return Inertia::render('Signup');
    });

    Route::post('/register', [AuthController::class, 'register']);
});

Route::inertia('/', 'welcome')->name('home');


Route::post('/logout', function (Request $request) {
    Auth::logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/login')->with('success', 'Logged out successfully.');
})->name('logout');
