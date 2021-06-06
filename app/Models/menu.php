<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class menu extends Model
{
    use HasFactory;
    protected $table = 'menus';
    public $timestamps = true;
    // protected $fillable = [
    //     'name',
    //     'description',
    //     'created_at'
    // ];
}
