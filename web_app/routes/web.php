<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () {
    return view('home');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/profile', [App\Http\Controllers\UserController::class, 'getUserInfo'])->name('profile');

Route::get('/profile/edit', [App\Http\Controllers\UserController::class, 'getForEdit'])->name('profileEdit');

Route::post('/profile/edit', [App\Http\Controllers\UserController::class, 'editProfile'])->name('profileEdited');

Route::get('/profile/{id}', [App\Http\Controllers\UserController::class, 'getUserById'])->name('profileId')->whereNumber('id');

Route::get('/profile/{username}', [App\Http\Controllers\UserController::class, 'getUserByUsername'])->name('profileUsername')->whereAlpha('name');

Route::get('/change-password', [App\Http\Controllers\UserController::class,'editPassword'])->name('change.password');

Route::post('/change-password', [App\Http\Controllers\UserController::class,'updatePassword'])->name('update.password');