<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
	public function index()
	{
		$pages = Page::all();

		foreach ($pages as $page) {
			$page->formatted_updated_at = Carbon::parse($page->updated_at)->format('Y-m-d H:i');
			$page->content = json_decode($page->content, true);
		}

		return Inertia::render('admin/pages/Index', ['pages' => $pages]);
	}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('admin/pages/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
	public function store(Request $request)
	{

		// convert block data to json
		$request->merge(['content' => json_encode($request->content)]);

		// validate the request
		$validatedData = $request->validate([
			'title' => 'required|string|max:255',
			'slug' => 'required|string|unique:pages,slug|max:255',
			'content' => 'required|json',
			'status' => 'required|string|max:255',
		]);

		// create a new page with validated data
		Page::create($validatedData);

		// redirect to the index page
		return Inertia::location(route('admin.pages.index'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{
		$page = Page::where('id', $id)->firstOrFail();

		return Inertia::render('admin/pages/Edit', ['page' => $page]);
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
        $page = Page::where('id', $id)->firstOrFail();

		if ($page->slug == '/') {
			$page->update($request->except('slug'));
			return Inertia::location(route('admin.pages.index'));
		}

		$slug = str_replace(['å', 'ä', 'ö'], ['a', 'a', 'o'], $request->title);
		$slug = str_replace(' ', '-', strtolower($slug));
		$request->merge(['slug' => $slug]);

		$page->update($request->all());
		return Inertia::location(route('admin.pages.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
	public function destroy($id)
	{
		$page = Page::findOrFail($id);

		if ($page->slug == '/') {
			return response()->json(['success' => false, 'message' => 'You cannot delete the front page']);
		}

		$page->delete();

		return Inertia::location(route('admin.pages.index'));
	}

}
