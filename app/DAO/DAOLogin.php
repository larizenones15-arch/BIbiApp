<?php

namespace App\DAO;
use Illuminate\Support\Facades\DB;

class DAOLogin {
    
    // Kukunan ang user profile gamit ang email field mula sa bagong table
    public static function EmployeesLogin($req) {
        if (is_null($req->email)) {
            return [];
        }
    
        // Binago para mag-select sa 'users' table na nakikita sa Railway panel mo
        $data = DB::connection('mysql')
            ->select(DB::raw("SELECT id, name, email 
                              FROM users 
                              WHERE email = :email"), ['email' => $req->email]);
    
        return $data;
    }

    // Ito ang gagamitin para sa inline validation ng password match
    public static function Password($req) {
        // Paalala: Kung naka-Bcrypt/Hash ang password mo, mas ligtas gamitin ang Hash::check sa Model layer.
        // Pero kung plain text pa ang nakalagay sa backend, gagamitin nito ang query na ito:
        return DB::table('users')
            ->where('email', $req->email)
            ->where('password', $req->password)
            ->get();
    }
}