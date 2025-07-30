<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocationController;

Route::middleware('check.api.key')->get('/locations', [LocationController::class, 'index']);
