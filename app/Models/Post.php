<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

	protected $fillable = ['title', 'slug', 'content', 'featured_image', 'published_at', 'user_id', 'status', 'category_id', 'category_name'];

	public function category()
	{
		return $this->belongsTo(Category::class);
	}
}
