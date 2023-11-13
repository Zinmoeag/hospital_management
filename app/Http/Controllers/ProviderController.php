<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use  App\Services\AuthService;

class ProviderController extends Controller
{
    protected $authService;

    function __construct(authService $authService)
    {
        $this->authService = $authService;
    }

    function redirectToProvider ($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    function callback($provider)
    {

        $providerUser = Socialite::driver($provider)->user();
        $this->authService->authenticationStore($providerUser);

        return redirect("/");

    }
}
