<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'items' => Admin::query()->get()
        ]);
    }

    public function show(Admin $admin): JsonResponse
    {
        return response()->json([
            'success' => true,
            'item' => $admin
        ]);
    }
}
