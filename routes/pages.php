<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/pages/create', [PageController::class, 'create'])->middleware(['auth', 'verified']);
Route::post('/admin/pages/create', [PageController::class, 'store'])->middleware(['auth', 'verified']);