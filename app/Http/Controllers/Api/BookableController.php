<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Bookable;

class BookableController extends Controller
{
    //
    public function index(){
        Bookable::all();   
    }
    public function show(){
        Bookable::findorFail($id);
    }
}
