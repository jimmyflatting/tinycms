<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class CheckAndCreateUser extends Command
{
    protected $signature = 'user:check-and-create';
    protected $description = 'Check if a specific user exists and create the user if not.';

    public function handle()
    {
        $email = 'webb@gopeach.se';

        // Check if the 'users' table exists
        if (!Schema::hasTable('users')) {
            // If the table doesn't exist, create it
            $this->info('Creating users table...');
            $this->createUsersTable();
            $this->info('Users table created successfully.');
        }

        // Now check and create the user
        $this->checkAndCreateUser($email);
    }

    private function createUsersTable()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    private function checkAndCreateUser($email)
    {
        $user = User::where('email', $email)->first();

        if (!$user) {
            // User doesn't exist, create the user
            User::create([
                'name' => 'Peach',
                'email' => $email,
                'password' => Hash::make('kebabrulle'),
            ]);

            $this->info('User created successfully.');
        } else {
            $this->info('User already exists.');
        }
    }
}
