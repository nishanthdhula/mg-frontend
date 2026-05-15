<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PropertyController extends Controller
{
    public function index()
    {
        return Property::latest()->get();
    }

    public function store(Request $request)
    {
        $property = Property::create([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'property_type' => $request->property_type,
            'listing_type' => $request->listing_type,
            'price' => $request->price,
            'location' => $request->location
        ]);

        return response()->json([
            'status' => true,
            'property' => $property
        ]);
    }
}