<?php

use App\Http\Controllers\LogInController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\CustomerLogController;
use App\Http\Controllers\ExcelExamController;
use App\Http\Controllers\ExamController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::resource('expenses', ExpenseController::class);
Route::resource('login', LogInController::class);

Route::resource('actual-expenses', App\Http\Controllers\ActualExpenseController::class);
Route::resource('customer-logs', App\Http\Controllers\CustomerLogController::class);


// This single line handles history (index), saving (store), and joining (update)!
Route::resource('messages', ChatController::class);
Route::resource('excel-exam', App\Http\Controllers\ExcelExamController::class);

Route::resource('exam', App\Http\Controllers\ExamController::class)->only(['show', 'store']);
