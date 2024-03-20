<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlockData extends Model
{
	protected $fillable = ['content'];

	public function block()
	{
		return $this->belongsTo(Block::class);
	}
}
