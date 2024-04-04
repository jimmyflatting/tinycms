<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Post;
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

	public function getPosts($cat_id) {
		$posts = Post::where('category_id', $cat_id)->get();
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
