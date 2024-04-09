<?php

namespace App\Http\Controllers;
use App\Models\Category;
use App\Models\Post;
use Carbon\Carbon;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::all();
    }

	public function getPosts($cat_id)
	{
		if ($cat_id === "0") {
			$posts = Post::with('category')->get();
		} else {
			$posts = Post::where('category_id', $cat_id)->with('category')->get();
		}

		foreach ($posts as $post) {
			$post->formatted_updated_at = Carbon::parse($post->updated_at)->format('Y-m-d H:i');
		}

		return $posts;
	}

	public function getPostsByCategoryName($cat_name) {
		$cat = Category::where('category_name', $cat_name)->first();

		if(!$cat) {
			return response()->json(['error' => 'Category not found'], 404);
		}

		$posts = Post::where('category_id', $cat->id)->get();

		if (!$posts) {
			return response()->json(['error' => 'No posts found for this category'], 404);
		}

		return $posts;
	}
}
