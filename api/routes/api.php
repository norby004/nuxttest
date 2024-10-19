<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->prefix('auth')->group(function()
{
    Route::post('login', 'login');
});

Route::middleware('auth:sanctum')->group(function()
{
    Route::get('auth/me', [AuthController::class, 'me']);

    Route::controller(AdminController::class)->prefix('admins')->group(function()
    {
        Route::get('', 'index');
        Route::get('{admin}', 'show');
        Route::post('store', 'store');
        Route::put('{admin}', 'update');
    });
    
});
