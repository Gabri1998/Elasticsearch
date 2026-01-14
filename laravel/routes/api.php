<?php

use App\Http\Controllers\LogController;
use Illuminate\Support\Facades\Route;

// API endpoint for fetching logs
Route::get('/logs', [LogController::class, 'index']);
