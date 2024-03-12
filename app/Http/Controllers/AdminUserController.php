<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$users = User::all();

		return Inertia::render('admin/users/Index', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
		return Inertia::render('admin/users/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
	public function store(Request $request)
	{
		if (User::where('email', $request->email)->exists()) {
			return response()->json(['success' => false, 'message' => 'Email already in use']);
		}

		$password = Hash::make($request->password);
		$request->merge(['password' => $password]);

		User::create($request->all());
		return Inertia::location(route('admin.users.index'));
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
		$user = User::where('id', $id)->firstOrFail();

		return Inertia::render('admin/users/Edit', ['user' => $user]);
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
		$user = User::where('id', $id)->firstOrFail();

		$user->update($request->all());
		return Inertia::location(route('admin.users.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		$user = User::findOrFail($id);

		if ($user->name == 'Peach') {
			return response()->json(['success' => false, 'message' => 'You cannot delete this user']);
		}

		$user->delete();

		return response()->json(['success' => true, 'message' => 'Post deleted successfully']);
    }
}
