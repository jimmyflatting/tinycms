<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$page = Page::where('slug', '/')->firstOrFail();

		if (!$page) {
			return Inertia::render('public/NotFound');
		}

		return Inertia::render('public/Page', ['page' => $page]);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $page = Page::where('slug', $slug)->firstOrFail();

        if (!$page) {
            return Inertia::render('public/NotFound');
        }

        return Inertia::render('public/Page', ['page' => $page]);
    }
}
