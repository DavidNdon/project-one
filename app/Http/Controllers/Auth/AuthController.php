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
        Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ])->validate();

        $credentials = $request->only('email','password');

        if ($request->has('password')) {
            if (Auth::attempt($credentials)) {
                /** @var \App\Models\User $user */
                $user = Auth::user();
                $token = $user->createToken('auth_token')->plainTextToken;

                return response()->json([
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                ]);
            } else {
                return response()->json(['message' => 'Invalid credentials'], 401);
            }
        } else {
            return response()->json(['message' => 'Password is required'], 400);
        }
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
            Auth::login($user);

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