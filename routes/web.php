<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PageController::class, 'index']);

Route::get('/admin', [AdminController::class, 'index'])->middleware(['auth', 'verified']);
Route::get('/admin/login', function () {
    return Inertia::render('auth/Login');
})->name('loginwp');
Route::get('/admin/pages', [PageController::class, 'index'])->middleware(['auth', 'verified']);
Route::get('/admin/{id}', [AdminController::class, 'show'])->middleware(['auth', 'verified']);

Route::get('/{id}', [PageController::class, 'show']);

// Route::get('/{category}/{id}', [PostController::class, 'show']);

Route::fallback(function () {
    return Inertia::render('public/NotFound');
});

require __DIR__ . '/auth.php';
