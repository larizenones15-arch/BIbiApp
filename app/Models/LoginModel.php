<?php

namespace App\Models;

use App\DAO\DAOLogin;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Model;

class LoginModel extends Model
{
    public $dao_login;

    public function __construct()
    {
        $this->dao_login = new DAOLogin();
    }

    public function loginValidator($req)
    {
        $user = $this->dao_login::EmployeesLogin($req);
        
        $validator = Validator::make($req->all(), [
            'email' => [
                'required',
                'email',
                function ($attribute, $value, $fail) use ($user) {
                    if (count($user) === 0) {
                        $fail('This email address is not registered.');
                        return;
                    }
                },
            ],
            'password' => [
                'required',
                function ($attribute, $value, $fail) use ($req, $user) {
                    if (count($user) === 0) {
                        return;
                    }
                    
                    $pass = $this->dao_login::Password($req);
                    if ($pass->isEmpty()) {
                        $fail('The password you entered is incorrect.');
                    }
                },
            ],
        ]);

        if ($validator->fails()) {
            return ['result' => $validator->errors(), 'status_code' => 404];
        }
        
        // Ibabalik ang unang array row ng user para i-save sa Vuex Store/Commit ng frontend
        return ['result' => $user[0] ?? $user, 'status_code' => 200];
    }
}