<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    public function authenticationStore($providerUser)
    {
       $user = $this->store($providerUser);
       $this->authentication($user);

        
    }

    private function store($providerUser)
    {
        return User::updateOrCreate([
            'email' => $providerUser->user['email'],
        ],[
            'email' => $providerUser->user['email'],
            'name' => $providerUser->user['name'],
            'provider' => 'dd',
            'provider_id' => $providerUser->id,
        ]);
    }

    private function authentication($user)
    {
        Auth::login($user);
    }

}