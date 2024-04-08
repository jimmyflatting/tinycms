<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$staff = Staff::all();

		return Inertia::render('admin/staff/Index', ['staff' => $staff]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
		return Inertia::render('admin/staff/Create');
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

		Staff::create($request->all());
		return Inertia::location(route('admin.staff.index'));
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
		$staff = Staff::where('id', $id)->firstOrFail();

		return Inertia::render('admin/staff/Edit', ['staff' => $staff]);
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
		$staff = Staff::where('id', $id)->firstOrFail();

		$slug = str_replace(['å', 'ä', 'ö'], ['a', 'a', 'o'], $request->title);
		$slug = str_replace(' ', '-', strtolower($slug));
		$request->merge(['slug' => $slug]);

		$staff->update($request->all());
		return Inertia::location(route('admin.staff.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		$staff = Staff::findOrFail($id);

		$staff->delete();

		return Inertia::location(route('admin.staff.index'));
    }
}
