<?php

use App\Models\Page;
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
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->json('content');
			$table->string('status');
            $table->timestamps();
        });

		Page::create([
			'title' => 'Startsida',
			'slug' => '/',
			'status' => 'published',
			'content' => json_encode([
				'blocks' => [
					[
						'type' => 'header',
						'data' => [
							'text' => 'Välkommen till startsidan'
						]
					],
					[
						'type' => 'paragraph',
						'data' => [
							'text' => 'Det här är startsidan.'
						]
					]
				]
			])
		]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
};
