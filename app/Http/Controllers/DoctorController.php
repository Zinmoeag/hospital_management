<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Mail\DoctorApplicationForm;
use App\Action\MailSender;


class DoctorController extends Controller
{
    public function requestForm()
    {
        // $user = auth()->user();
        // $mail = new MailSender($user,new DoctorApplicationForm());
        // if($mail->isSent()){
        return Inertia::render('Profile/DoctorApplicationForm', [
            'locale' => app()->getLocale(),
        ]);
    }

    public function submitRequestForm()
    {

    }
}
