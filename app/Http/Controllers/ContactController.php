<?php
// app/Http/Controllers/ContactController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
                'regex:/^[A-Za-z\s]+$/u', // Only Latin letters and spaces
                function ($attribute, $value, $fail) {
                    if (preg_match('/[\p{Han}\p{Hiragana}\p{Katakana}\p{Cyrillic}]/u', $value)) {
                        $fail('The name must not contain Chinese, Japanese, or Russian characters.');
                    }
                },
            ],
            'email' => 'required|email|max:255',
            'phone' => [
                'required',
                'string',
                'regex:/^\+?[0-9]{10}$/u', // Exactly 10 digits, optional leading +
            ],
            'message' => [
                'required',
                'string',
                'max:1000',
                'regex:/^[A-Za-z0-9\s.,!?]+$/u', // Only Latin letters, numbers, and basic punctuation
                function ($attribute, $value, $fail) {
                    if (preg_match('/[\p{Han}\p{Hiragana}\p{Katakana}\p{Cyrillic}]/u', $value)) {
                        $fail('The message must not contain Chinese, Japanese, or Russian characters.');
                    }
                },
            ]
        ], [
            'name.regex' => 'The name must only contain English letters and spaces.',
            'phone.regex' => 'The phone number format is invalid.',
            'message.regex' => 'The message must only contain English letters, numbers, and basic punctuation.'
        ]);

        // Send email
        Mail::to('your-email@example.com')->send(new ContactMail($request->all()));

        return response()->json([
            'success' => true,
            'message' => 'Thank you for contacting us! We will get back to you soon.'
        ]);
    }
}