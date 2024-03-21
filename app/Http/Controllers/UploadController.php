<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $image = $request->file('image');

            // Generate a unique filename
            $filename = uniqid('image_') . '.' . $image->getClientOriginalExtension();

            // Move the uploaded file to the uploads directory
            $image->move(public_path('uploads'), $filename);

            // Return the URL of the uploaded image
            $imageUrl = url('uploads/' . $filename);

            return response()->json(['url' => $imageUrl]);
        }

        return response()->json(['error' => 'Invalid file'], 400);
    }

    public function removeImage(Request $request)
    {
        $imageUrl = $request->json('imageUrl');

        // Extract the filename from the URL
        $filename = basename($imageUrl);

        // Remove the file from storage
        if (Storage::disk('public')->exists('uploads/' . $filename)) {
            Storage::disk('public')->delete('uploads/' . $filename);
            return response()->json(['message' => 'Image removed successfully']);
        }

        return response()->json(['error' => 'Image not found'], 404);
    }
}
