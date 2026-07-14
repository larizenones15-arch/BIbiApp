<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAccounts extends Model
{
    protected $connection = 'sqlsrv';
    protected $table = 'useraccounts';
    public $timestamps = false;
    use HasFactory;
}
