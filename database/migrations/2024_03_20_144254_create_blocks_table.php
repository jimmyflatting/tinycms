<?php

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
		Schema::create('blocks', function (Blueprint $table) {
			$table->id();
			$table->string('type');
			$table->timestamps();
		});

		Schema::create('block_data', function (Blueprint $table) {
			$table->id();
			$table->unsignedBigInteger('block_id');
			$table->json('content');
			$table->timestamps();

			$table->foreign('block_id')->references('id')->on('blocks')->onDelete('cascade');
		});

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blocks');
    }
};
