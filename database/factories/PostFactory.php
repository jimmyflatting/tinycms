<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
		$title = fake()->sentence(2);
		$title = str_replace('.', '', $title);
		$slug = str_replace(['å', 'ä', 'ö'], ['a', 'a', 'o'], $title);
		$slug = str_replace(' ', '-', strtolower($slug));

        return [
			'title' => $title,
			'slug' => $slug,
			'content' => fake()->paragraphs(3, true),
			'featured_image' => fake()->imageUrl(),
			'published_at' => fake()->dateTime(),
			'user_id' => 1,
			'status' => fake()->randomElement(['draft', 'published']),
			'category_id' => fake()->numberBetween(1, 10),
		];
    }
}
