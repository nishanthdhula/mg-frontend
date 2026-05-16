<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\PropertyImage;

class PropertyController extends Controller
{
    public function index()
    {
        return Property::latest()->get();
    }

  public function uploadImages(
    Request $request,
    $id
)
{
    $property = Property::findOrFail($id);

    if ($request->hasFile('images')) {

        foreach ($request->file('images') as $key => $image) {

            $path = $image->store(
                'properties',
                'public'
            );

            PropertyImage::create([
                'property_id' => $property->id,
                'image' => $path,
                'is_cover' => $key == 0
            ]);
        }
    }

    return response()->json([
        'status' => true,
        'message' => 'Images Uploaded'
    ]);
}
public function show($id)
{
    return Property::with('images')
        ->findOrFail($id);
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