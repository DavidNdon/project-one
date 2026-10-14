<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //login functioanlity
    public function login(Request $request) 
{
    // 1. Validate the incoming request
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required', 'string'],
    ]);

    // Optional "remember" boolean if you have it in your form state
    $remember = $request->boolean('remember');

    // 2. Attempt to authenticate using web session guard
    if (Auth::attempt($credentials, $remember)) {
        // Prevent session fixation attacks
        $request->session()->regenerate();

        // 3. Redirect to home page or dashboard with success message for your toast
        return redirect()->intended('/')->with('success', 'Welcome back!');
    }

    // 4. Handle failed login attempt by returning back with validation error
    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
    ])->onlyInput('email');
}
    //register functionality
    public function register(Request $request)
    {
        // 1. Validate the incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'phone' => 'nullable|string|max:20',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        try {
            // 2. Create the user
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'phone' => $request->phone,
            ]);

            // 3. Automatically log the user in for web session cookies
            // Auth::login($user);

            // 4. Redirect to home page with a success flash message for your toast
            return redirect('/login')->with('success', 'Account created successfully! Welcome aboard.');
        } catch (\Exception $e) {
            // Fallback for unexpected failures
            return back()->with('error', 'Failed to create account. Please try again.');
        }
    }
    //logout functionality
    public function logout(Request $request)
    {
        $user = $request->user();

        if (!$user || !$user->currentAccessToken()) {
            return response()->json([
                'message' => 'Unauthenticated or token not found.'
            ], 401);
        }

        $user->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}