<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$posts = Post::with('category')->get();

		foreach ($posts as $post) {
			$post->formatted_updated_at = Carbon::parse($post->updated_at)->format('Y-m-d H:i');
		}

		return Inertia::render('admin/posts/Index', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
		return Inertia::render('admin/posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		$slug = str_replace(['å', 'ä', 'ö'], ['a', 'a', 'o'], $request->title);
		$slug = str_replace(' ', '-', strtolower($slug));
		$request->merge(['slug' => $slug]);

		Post::create($request->all());
		return Inertia::location(route('admin.posts.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
		$page = Post::where('id', $id)->firstOrFail();

		return Inertia::render('admin/posts/Edit', ['page' => $page]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
		$page = Post::where('id', $id)->firstOrFail();

		$slug = str_replace(['å', 'ä', 'ö'], ['a', 'a', 'o'], $request->title);
		$slug = str_replace(' ', '-', strtolower($slug));
		$request->merge(['slug' => $slug]);

		$page->update($request->all());
		return Inertia::location(route('admin.posts.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		$page = Post::findOrFail($id);

		$page->delete();

		return response()->json(['success' => true, 'message' => 'Post deleted successfully']);
    }
}
