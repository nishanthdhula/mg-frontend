<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PropertyController;
use App\Http\Controllers\API\UserController;
Route::middleware([
    'auth:sanctum',
    'role:admin'
])->group(function () {

    Route::get(
        '/admin/dashboard',
        function () {
            return 'Admin Only';
        }
    );

});
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/properties', [PropertyController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/property/store', [PropertyController::class, 'store']);

});
Route::middleware('auth:sanctum')
    ->post(
        '/property/{id}/upload-images',
        [PropertyController::class, 'uploadImages']
    );

Route::get(
    '/property/{id}',
    [PropertyController::class, 'show']
);
Route::get(
    '/users',
    [UserController::class, 'index']
);
Route::get(
    '/user/{id}',
    [UserController::class, 'show']
);
Route::get(
    '/user/{id}/properties',
    [UserController::class, 'properties']
);
Route::get(
    '/user/{id}/favorites',
    [UserController::class, 'favorites']
);
Route::get(
    '/user/{id}/messages',
    [UserController::class, 'messages']
);
Route::get(
    '/user/{id}/appointments',
    [UserController::class, 'appointments']
);
Route::get(
    '/user/{id}/reviews',
    [UserController::class, 'reviews']
);
Route::get(
    '/user/{id}/transactions',
    [UserController::class, 'transactions']
);
Route::get(
    '/user/{id}/notifications',
    [UserController::class, 'notifications']
);
Route::get(
    '/user/{id}/settings',
    [UserController::class, 'settings']
);
Route::get(
    '/user/{id}/activity',
    [UserController::class, 'activity']
);
Route::get(
    '/user/{id}/logs',
    [UserController::class, 'logs']
);
Route::get(
    '/user/{id}/profile',
    [UserController::class, 'profile']
);
Route::get(
    '/user/{id}/dashboard',
    [UserController::class, 'dashboard']
);
Route::get(
    '/user/{id}/analytics',
    [UserController::class, 'analytics']
);
Route::get(
    '/user/{id}/reports',
    [UserController::class, 'reports']
);
Route::get(
    '/user/{id}/support',
    [UserController::class, 'support']
);
Route::get(
    '/user/{id}/feedback',
    [UserController::class, 'feedback']
);
Route::get(
    '/user/{id}/invoices',
    [UserController::class, 'invoices']
);
Route::get(
    '/user/{id}/subscriptions',
    [UserController::class, 'subscriptions']
);
Route::get(
    '/user/{id}/billing',
    [UserController::class, 'billing']
);
Route::get(
    '/user/{id}/payments',
    [UserController::class, 'payments']
);
Route::get(
    '/user/{id}/transactions',
    [UserController::class, 'transactions']
);
Route::get(
    '/user/{id}/withdrawals',
    [UserController::class, 'withdrawals']
);
Route::get(
    '/user/{id}/deposits',
    [UserController::class, 'deposits']
);
Route::get(
    '/user/{id}/transfers',
    [UserController::class, 'transfers']
);
Route::get(
    '/user/{id}/refunds',
    [UserController::class, 'refunds']
);
Route::get(
    '/user/{id}/chargebacks',
    [UserController::class, 'chargebacks']
);
Route::get(
    '/user/{id}/disputes',
    [UserController::class, 'disputes']
);
Route::get(
    '/user/{id}/resolutions',
    [UserController::class, 'resolutions']
);
Route::get(
    '/user/{id}/escalations',
    [UserController::class, 'escalations']
);
Route::get(
    '/user/{id}/arbitrations',
    [UserController::class, 'arbitrations']
);
Route::get(
    '/user/{id}/mediations',
    [UserController::class, 'mediations']
);
Route::get(
    '/user/{id}/negotiations',
    [UserController::class, 'negotiations']
);
Route::get(
    '/user/{id}/settlements',
    [UserController::class, 'settlements']
);
Route::get(
    '/user/{id}/agreements',
    [UserController::class, 'agreements']
);
Route::get(
    '/user/{id}/contracts',
    [UserController::class, 'contracts']
);
Route::get(
    '/user/{id}/documents',
    [
        UserController::class,
        'documents
'
    ]
);
Route::get(
    '/user/{id}/files',
    [UserController::class, 'files']
);
Route::get(
    '/user/{id}/media',
    [UserController::class, 'media']
);
Route::get(
    '/user/{id}/assets',
    [UserController::class, 'assets']
);
Route::get(
    '/user/{id}/resources',
    [UserController::class, 'resources']
);