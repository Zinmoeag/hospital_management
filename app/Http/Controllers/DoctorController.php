<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DoctorController extends Controller
{
    public function requestForm()
    {
        return Inertia::render('Profile/DoctorApplicationForm', [
            'locale' => app()->getLocale(),
        ]);
    }
}
