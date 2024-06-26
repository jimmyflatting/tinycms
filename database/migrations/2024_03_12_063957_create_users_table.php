<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('users', function (Blueprint $table) {
			$table->id();
			$table->string('name');
			$table->string('email')->unique();
			$table->timestamp('email_verified_at')->nullable();
			$table->string('password');
			$table->string('role')->default('user');
			$table->string('avatar')->nullable();
			$table->string('title')->nullable();
			$table->rememberToken();
			$table->timestamps();
		});

		User::create([
			'name' => env('ADMIN_NAME', 'Peach'),
			'email' => env('ADMIN_EMAIL', 'webb@gopeach.se'),
			'password' => Hash::make(env('ADMIN_PASSWORD', 'password')),
			'role' => 'superadmin',
			'avatar' => 'https://placehold.co/1080x1920',
			'title' => 'Super Admin',
		]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};