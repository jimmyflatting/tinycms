<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Block extends Model
{

	protected $fillable = ['type'];

	public function blockData()
	{
		return $this->hasOne(BlockData::class);
	}
}
