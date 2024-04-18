<?php

use App\Models\Menu;
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
		Schema::create('menus', function (Blueprint $table) {
			$table->id();
			$table->timestamps();
			$table->string('menu_name');
			$table->json('menu_items');
		});

		$headerMenu = [
			'menu_name' => 'Header Menu',
			'menu_items' => json_encode([
				[
					'label' => 'Om oss',
					'url' => '/om-oss',
					'children' => [
						['label' => 'Vårt team', 'url' => '/om-oss/team'],
						['label' => 'Vår historia', 'url' => '/om-oss/historia'],
					]
				],
				['label' => 'Tjänster', 'url' => '/tjanster'],
				['label' => 'Kontakt', 'url' => '/kontakt'],
			]),
		];

		$footerMenu = [
			'menu_name' => 'Footer Menu',
			'menu_items' => json_encode([
				['label' => 'Om oss', 'url' => '/om-oss'],
				['label' => 'Tjänster', 'url' => '/tjanster'],
				['label' => 'Kontakt', 'url' => '/kontakt'],
				['label' => 'Integritetspolicy', 'url' => '/integritetspolicy'],
			]),
		];

		Menu::create($headerMenu);
		Menu::create($footerMenu);

	}

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menus');
    }

};
