<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\settings;
class SettingsController extends Controller
{
    public function settings()
    {   
        $tasks = settings::all();
        return view('main', ['tasks'=> $tasks]);
    }
}
