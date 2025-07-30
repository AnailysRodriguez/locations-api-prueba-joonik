<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\JsonResponse;

class LocationController extends Controller
{
    public function index(): JsonResponse
    {
        $locations = Location::all()->map(function ($location) {
            return [
                'code' => (int) $location->code,
                'name' => $location->name,
                'image' => $location->image,
                'creationDate' => date('Y-m-d', strtotime($location->creation_date)),
            ];
        });

        return response()->json($locations);
    }
}
