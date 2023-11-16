<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function showDoctor(){
        return Inertia::render('Admin/Doctors', [
            'locale' => app()->getLocale(),
        ]);
    }
}
