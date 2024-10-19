<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminStoreRequest;
use App\Http\Requests\Admin\AdminUpdateRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'success'   => true,
            'data'      => Admin::query()->get()
        ]);
    }

    public function show(Admin $admin): JsonResponse
    {
        return response()->json([
            'success'   => true,
            'data'      => $admin
        ]);
    }

    public function store(AdminStoreRequest $request)
    {
        Admin::query()->create($request->validated());
        return response()->json([
            'success' => true,
        ]);
    }

    public function update(AdminUpdateRequest $request, Admin $admin)
    {
        $admin->update($request->validated());
        return response()->json([
            'success' => true,
        ]);
    }
}
