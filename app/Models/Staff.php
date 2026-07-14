<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    protected $connection = 'sqlsrv';
    protected $table = 'departments';
    public $timestamps = false;
    use HasFactory;
}
