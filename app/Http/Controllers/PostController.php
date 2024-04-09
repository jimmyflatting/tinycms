<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Google\Rpc\Context\AttributeContext\Request;
use Inertia\Inertia;

class PostController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$post = Post::where('slug', '/')->firstOrFail();

		if (!$post) {
			return Inertia::render('public/NotFound');
		}

		return Inertia::render('public/Post', ['Post' => $post]);
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Models\Post  $Post
	 * @return \Illuminate\Http\Response
	 */
	public function show($category, $slug)
	{
		$catId = Category::where('category_name', $category)->firstOrFail();
		$post = Post::where('category_id', $catId->id)->where('slug', $slug)->firstOrFail();

		if (!$post) {
			return Inertia::render('public/NotFound');
		}

		return Inertia::render('public/Post', ['post' => $post]);
	}
}
