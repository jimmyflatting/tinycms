<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
	use HasFactory;

	protected $fillable = [
		// Colors
		'primary_color',
		'secondary_color',
		'accent_color',

		'header_color',
		'background_color',
		'overlay_color',
		'footer_color',

		'heading_color',
		'text_color',
		'link_color',
		'header_text_color',
		'footer_text_color',

		'button_color', // default to primary_color
		'button_text_color', // default to text_color
		'button_hover_color',

		// Typography
		'font_heading',
		'font_body',

		// Extra scripts
		'head_scripts',
		'body_scripts',
		'footer_scripts',

		// Social media
		'facebook',
		'twitter',
		'instagram',
		'linkedin',

		// Analytics
		'google_analytics',
		'facebook_pixel',

		// Contact
		'phone',
		'email',
		'address',
		'city',
		'state',
		'zip',
		'country',
	];
}
