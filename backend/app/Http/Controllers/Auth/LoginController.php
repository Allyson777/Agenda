<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request){

        $credentials = $request->only('email', 'password');
        
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $redirectUrl = $user->is_admin ? '/admin' : '/main';
            
            return response()->json([
                'redirectUrl' => $redirectUrl,
                'user' => $user
            ], 200);
        }
        return response()->json(['error' => 'Credenciais inválidas'], 401);
    }
}
