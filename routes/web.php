
<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProviderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect("/en");
});


 
Route::get('/auth/redirect/{provider}', [ProviderController::class, 'redirectToProvider']);
 
Route::get('/auth/callback/{provider}', [ProviderController::class,'callback']);

Route::prefix("{locale}")->group(function() {
    Route::get('/', function () {
        return Inertia::render('Home/Home', [
            'locale' => app()->getLocale(),
            'heroTranslationFile' => __("hero"),
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    })->name('home');
});

Route::get('locale/{locale}', function (string $locale) {
    Session()->put('locale', $locale);
    return redirect()->back();
})->name('locale');


Route::get("/test", function () {
    return Inertia::render("test", [
        "data" => "this is data"
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
