<?php

use App\Models\Media;
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
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
			$table->string('title');
			$table->string('description');
			$table->string('file_name');
			$table->string('file_path');
			$table->string('file_type');
			$table->string('file_size');
			$table->string('file_url');
        });

		Media::create([
			'title' => 'Sample Image',
			'description' => 'This is a sample image',
			'file_name' => 'sample.jpg',
			'file_path' => 'images/sample.jpg',
			'file_type' => 'image/jpeg',
			'file_size' => '1024',
			'file_url' => 'https://placehold.co/1920x1080/jpg',
		]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media');
    }
};
