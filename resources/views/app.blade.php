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

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="scroll-smooth antialiased">
        @inertia
    </body>
</html>
