<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        DB::table('users')->insert([
            'name' => 'Peach',
            'email' => 'webb@gopeach.se',
			'password' => Hash::make('kebabrulle'),
			'created_at' => now(),
			'updated_at' => now(),
			'email_verified_at' => now(),
        ]);


        DB::table('pages')->insert([
            'title' => 'Contact',
            'slug' => 'contact',
            'content' => '<h1>contact</h1>',
        ]);
    }
}
