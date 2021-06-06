<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use App\Models\menu;
class MenuController extends Controller
{
    public function main(){
    	$menu=DB::table('menus')->get();
    	return view('main',compact('menu'));
    }
    
    public function abouts(){
    	$abouts=DB::table('menus')->get();
    	return view('abouts',compact('abouts'));
    }
    
}
