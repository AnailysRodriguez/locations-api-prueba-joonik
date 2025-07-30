<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckApiKey
{
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->header('x-api-key') !== env('API_KEY')) {
            return response()->json(['error' => 'Invalid API Key'], 401);
        }

        return $next($request);
    }
}
