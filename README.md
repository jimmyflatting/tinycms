## Tinycms

Tinycms is a modifed Laravel/Breeze kit for quickly developing a CMS.

## Installation

Requires PHP@8.1.2, Laravel@8, Node@20.11.1 (LTS), SQLite recommended for local development.

Installation with brew:
```bash
brew install php@8.1
brew install sqlite
brew install node@20
```

## Setup

Run in Root folder:
```bash
composer update
composer install
npm install
```

## Development

Start backend:
```bash
php artisan serve
```

Start frontend:
```bash
npm run dev
```

## License

The Tinycms is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
