<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\PropertyImage;

class UserController extends Controller
{
public function index(Request $request)
    {
        return auth()->user();
    }
    public function favorite(Request $request)
    {
        $property = Property::findOrFail($request->property_id);    
        $property->favorite();
        return response()->json([
            'status' => true,
            'message' => 'Property Favorited'
        ]); 

}

public function showFavorites()
{
    return auth()->user()
        ->favorites()
        ->with('property')
        ->get();
}
public function propertyFavorites($id)
{
    $property = Property::findOrFail($id);
    return $property->favorites()
        ->with('user')
        ->get();    

}
public function appointments(Request $request)
{
    return auth()->user()
        ->appointments()
        ->with('property')
        ->get();
}

public function  reviews(Request $request)
{
    return auth()->user()
        ->reviews()
        ->with('property')
        ->get();
        
}

public function transactions(Request $request)
{
    return auth()->user()
        ->transactions()
        ->with('property')
        ->get();

}

public function notifications(Request $request)
{
    return auth()->user()
        ->notifications()
        ->get();
}
public function settings(Request $request)
{
    return auth()->user()
        ->settings()
        ->get();
}
public function activity(Request $request)
{
    return auth()->user()
        ->activity()
        ->get();
}
public function logs(Request $request)
{
    return auth()->user()
        ->logs()
        ->get();
}
public function profile(Request $request)
{
    return auth()->user()
        ->profile()
        ->get();
}


public function dashboard(Request $request)
{
    return auth()->user()
        ->dashboard()
        ->get();

}

public function analytics(Request $request)
{
    return auth()->user()
        ->analytics()
        ->get();
}
public function reports(Request $request)
{
    return auth()->user()
        ->reports()
        ->get();
}

public function suport(Request $request)
{
    return auth()->user()
        ->support()
        ->get();
}
public function update(Request $request, $id)
{
    $user = auth()->user();
    if ($user->id != $id) {
        return response()->json([
            'status' => false,
            'message' => 'Unauthorized'
        ], 401);
    }

    $user->update([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password)
    ]);

    return response()->json([
        'status' => true,
        'message' => 'Profile Updated',
        'user' => $user
    ]);
}
}
