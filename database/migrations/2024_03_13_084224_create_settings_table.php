<?php

use App\Models\Settings;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use function Ramsey\Uuid\v1;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
			$table->string('primary_color');
			$table->string('secondary_color');
			$table->string('accent_color');
			$table->string('header_color');
			$table->string('background_color');
			$table->string('overlay_color');
			$table->string('footer_color');
			$table->string('heading_color');
			$table->string('text_color');
			$table->string('link_color');
			$table->string('header_text_color');
			$table->string('footer_text_color');
			$table->string('button_color');
			$table->string('button_text_color');
			$table->string('button_hover_color');
			$table->string('font_heading');
			$table->string('font_body');
			$table->string('head_scripts');
			$table->string('body_scripts');
			$table->string('footer_scripts');
			$table->string('facebook');
			$table->string('twitter');
			$table->string('instagram');
			$table->string('linkedin');
			$table->string('google_analytics');
			$table->string('facebook_pixel');
			$table->string('phone');
			$table->string('email');
			$table->string('address');
			$table->string('city');
			$table->string('state');
			$table->string('zip');
			$table->string('country');
        });

		Settings::create([
			'primary_color' => '#1DA1F2',
			'secondary_color' => '#00FF00',
			'accent_color' => '#0000FF',
			'header_color' => '#F5F8FA',
			'footer_color' => '#F5F8FA',
			'background_color' => '#F5F8FA',
			'overlay_color' => '#E1E8ED',
			'heading_color' => '#14171A',
			'text_color' => '#14171A',
			'link_color' => '#1DA1F2',
			'header_text_color' => '#14171A',
			'footer_text_color' => '#14171A',
			'button_color' => '#1DA1F2',
			'button_text_color' => '#F5F8FA',
			'button_hover_color' => '#1DA1F2',
			'font_heading' => 'Roboto',
			'font_body' => 'Roboto',
			'head_scripts' => 'console.log("head scripts")',
			'body_scripts' => 'console.log("body scripts")',
			'footer_scripts' => 'console.log("footer scripts")',
			'facebook' => 'facebook',
			'twitter' => 'twitter',
			'instagram' => 'instagram',
			'linkedin' => 'linkedin',
			'google_analytics' => '123456789',
			'facebook_pixel' => '987654321',
			'phone' => '0700000000',
			'email' => 'example@example.com',
			'address' => 'Imagination Street 123',
			'city' => 'Imagination City',
			'state' => 'Imagination State',
			'zip' => '12345',
			'country' => 'Sweden',
		]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
};
