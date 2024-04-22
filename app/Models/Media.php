<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

	protected $fillable = ['title', 'description', 'file_name', 'file_path', 'file_type', 'file_size', 'file_url'];
}
