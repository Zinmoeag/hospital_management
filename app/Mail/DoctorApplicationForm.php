<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Support\Facades\Storage;

class DoctorApplicationForm extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Doctor Application Form',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.doctorApplicationForm',
            with: [
                'data' => "blah bloah",
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {

        // $file = Storage::url('/form/doctor_application.pdf');
        // dd($file);
        // $attachment = Attachment::fromStorage('/form/doctor_application.pdf')
        //         ->as('doctor application form.pdf')
        //         ->withMime('application/pdf');
        // dd($attachment);
        return [
            // Attachment::fromStorage('form/doctor_application.pdf')
            //     ->as('doctor application form.pdf')
            //     ->withMime('application/pdf')
        ];
    }
}
