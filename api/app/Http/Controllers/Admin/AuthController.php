<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = Admin::query()->where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages(['email' => 'Helytelen bejelentkezési adatok!']);
        }

        return response()->json([
            'success' => true,
            'token' => $user->createToken($user->email)->plainTextToken,
        ]);
    }

    public function me(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'user' => auth()->user()
        ]);
    }
}
