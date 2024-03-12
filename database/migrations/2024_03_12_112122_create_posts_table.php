<?php

use App\Models\Post;
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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
			$table->string('title');
			$table->string('slug')->unique();
			$table->text('content');
			$table->string('featured_image')->nullable();
			$table->timestamp('published_at')->nullable();
			$table->foreignId('user_id')->constrained();
			$table->enum('status', ['draft', 'published', 'archived'])->default('draft');
			$table->foreignId('category_id')->constrained();
            $table->timestamps();
        });

		Post::factory(10)->create();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
