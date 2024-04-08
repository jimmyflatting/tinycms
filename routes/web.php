<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminPagesController;
use App\Http\Controllers\AdminPostController;
use App\Http\Controllers\AdminSettingsController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\StaffController;
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

Route::get('/admin', [AdminController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.index');

Route::get('/{id}', [PageController::class, 'show']);

require __DIR__ . '/auth.php';

Route::prefix('admin/pages')->middleware(['auth', 'verified'])->group(function () {
	Route::get('/', [AdminPagesController::class, 'index'])->name('admin.pages.index');
	Route::get('/create', [AdminPagesController::class, 'create'])->name('admin.pages.create');
	Route::post('/create', [AdminPagesController::class, 'store'])->name('admin.pages.store');
	Route::get('/{id}', [AdminPagesController::class, 'edit'])->name('admin.pages.edit');
	Route::put('/{id}', [AdminPagesController::class, 'update'])->name('admin.pages.update');
	Route::delete('/{id}', [AdminPagesController::class, 'destroy'])->name('admin.pages.destroy');
});

Route::prefix('admin/posts')->middleware(['auth', 'verified'])->group(function () {
	Route::get('/', [AdminPostController::class, 'index'])->name('admin.posts.index');
	Route::get('/create', [AdminPostController::class, 'create'])->name('admin.posts.create');
	Route::post('/create', [AdminPostController::class, 'store'])->name('admin.posts.store');
	Route::get('/{id}', [AdminPostController::class, 'edit'])->name('admin.posts.edit');
	Route::put('/{id}', [AdminPostController::class, 'update'])->name('admin.posts.update');
	Route::delete('/{id}', [AdminPostController::class, 'destroy'])->name('admin.posts.destroy');
});

Route::prefix('admin/users')->middleware(['auth', 'verified'])->group(function () {
	Route::get('/', [AdminUserController::class, 'index'])->name('admin.users.index');
	Route::get('/create', [AdminUserController::class, 'create'])->name('admin.users.create');
	Route::post('/create', [AdminUserController::class, 'store'])->name('admin.users.store');
	Route::get('/{id}', [AdminUserController::class, 'edit'])->name('admin.users.edit');
	Route::put('/{id}', [AdminUserController::class, 'update'])->name('admin.users.update');
	Route::delete('/{id}', [AdminUserController::class, 'destroy'])->name('admin.users.destroy');
});

Route::prefix('admin/staff')->middleware(['auth', 'verified'])->group(function () {
	Route::get('/', [StaffController::class, 'index'])->name('admin.staff.index');
	Route::get('/create', [StaffController::class, 'create'])->name('admin.staff.create');
	Route::post('/create', [StaffController::class, 'store'])->name('admin.staff.store');
	Route::get('/{id}', [StaffController::class, 'edit'])->name('admin.staff.edit');
	Route::put('/{id}', [StaffController::class, 'update'])->name('admin.staff.update');
	Route::delete('/{id}', [StaffController::class, 'destroy'])->name('admin.staff.destroy');
});

Route::prefix('admin/settings')->middleware(['auth', 'verified'])->group(function () {
	Route::get('/', [AdminSettingsController::class, 'index'])->name('admin.settings.index');
	Route::put('/', [AdminSettingsController::class, 'update'])->name('admin.settings.update');
});

Route::get('/{category}/{slug}', [PostController::class, 'show'])->name('post.show');