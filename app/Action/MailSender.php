<?php

namespace App\Action;

use Illuminate\Support\Facades\Mail;

class MailSender {

	private $sendStatus = false;

	public function __construct(private $user, private $mailableObj){
		try{
			Mail::to($user)->send($mailableObj);
			$this->sendStatus = true;
		}catch(Exception $e){
			$this->sendStatus = false;
		}

	}

	public function isSent()
	{
		return $this->sendStatus;
	}
}