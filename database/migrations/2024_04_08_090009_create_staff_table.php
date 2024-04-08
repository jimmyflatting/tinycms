<?php

use App\Models\Staff;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
		Schema::create('staff', function (Blueprint $table) {
			$table->id();
			$table->string('name');
			$table->string('email');
			$table->string('phone');
			$table->string('avatar')->nullable();
			$table->string('title')->nullable();
			$table->timestamps();
		});

		Staff::create([
			'name' => 'John Doe',
			'email' => 'johndoe@example.com',
			'phone' => '123456789',
			'avatar' => 'https://placehold.co/1080x1920',
			'title' => 'CEO',
		]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('staff');
    }
};
