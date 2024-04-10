<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>
            @if(isset($page['props']['page']['title']))
                {{ $page['props']['page']['title'] }} - {{ $_ENV['APP_NAME'] }}
            @else
                {{ $_ENV['APP_NAME'] }}
            @endif
        </title>

        @if(isset($page['props']['page']['description']))
            <meta name="description" content="{{ $page['props']['page']['description'] }}">
        @endif

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

		<!-- Setting scripts -->
		@if(isset($page['props']['settings']['head_scripts']))
			<script>{{!! $page['props']['settings']['head_scripts'] !!}}</script>
		@endif

    </head>
    <body class="scroll-smooth antialiased">

		@if(isset($page['props']['settings']['body_scripts']))
			<script>{{!! $page['props']['settings']['body_scripts'] !!}}</script>
		@endif

		@php
			$heading = $page['props']['settings']['font_heading'];
			$body = $page['props']['settings']['font_body'];
		@endphp

		<style>
			@import url('https://fonts.googleapis.com/css2?family=<?php echo $heading; ?>:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
			@import url('https://fonts.googleapis.com/css2?family=<?php echo $body; ?>:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

			:root {
				--heading-font: {{ $heading }}, sans-serif;
				--body-font: {{ $body }}, sans-serif;

				--primary: 305, 46%, 30%;
				/* --primary: {{ $page['props']['settings']['primary_color']}}; */
				--secondary: {{ $page['props']['settings']['secondary_color']}};
				--accent: {{ $page['props']['settings']['accent_color']}};

				--background-color: {{ $page['props']['settings']['background_color']}};
				--overlay-color: {{ $page['props']['settings']['overlay_color']}};

				--heading-color: {{ $page['props']['settings']['heading_color']}};
				--text-color: {{ $page['props']['settings']['text_color']}};
				--link-color: {{ $page['props']['settings']['link_color']}};

				--header-color: {{ $page['props']['settings']['header_color']}};
				--header-text-color: {{ $page['props']['settings']['header_text_color']}};
				--footer-color: {{ $page['props']['settings']['footer_color']}};
				--footer-text-color: {{ $page['props']['settings']['footer_text_color']}};

				--button-color: {{ $page['props']['settings']['button_color']}};
				--button-text-color: {{ $page['props']['settings']['button_text_color']}};
				--button-hover-color: {{ $page['props']['settings']['button_hover_color']}};


			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: '<?= $heading ?>', sans-serif;
			}

			p,
			li,
			ul,
			a {
				font-family: '<?= $body ?>', sans-serif;
			}
		</style>

        @inertia

		@if(isset($page['props']['settings']['footer_scripts']))
			<script>{{!! $page['props']['settings']['footer_scripts'] !!}}</script>
		@endif
    </body>
</html>
