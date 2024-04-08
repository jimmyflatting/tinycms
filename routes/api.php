<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\GoogleAnalyticsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PersonalController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/api/scripts', function () {

	$scripts = \App\Models\Settings::first();

	return json_encode($scripts);
});

Route::get('/analytics', [GoogleAnalyticsController::class, 'index']);
Route::get('/posts/categories', [CategoryController::class, 'index']);
Route::get('/posts/category/{cat_id}', [CategoryController::class, 'getPosts']);
Route::get('/posts/category/name/{cat_name}', [CategoryController::class, 'getPostsByCategoryName']);

Route::get('/staff', [PersonalController::class, 'index']);
Route::get('/staff/{id}', [PersonalController::class, 'show']);


Route::post('/upload', [UploadController::class, 'upload']);
Route::post('/remove-image', [UploadController::class, 'removeImage']);
