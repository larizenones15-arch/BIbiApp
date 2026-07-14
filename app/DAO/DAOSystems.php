<?php
 
namespace App\DAO;
use Illuminate\Support\Facades\DB;
 
class DAOSystems{
 
public static function SystemList($req) {
          $data = DB::connection('mysql')
            ->select(DB::raw("SELECT * FROM systems Where TeamID = '$req->TeamID'"));
        return $data;
}
public static function CatList() {
          $data = DB::connection('mysql')
            ->select(DB::raw("SELECT TypeID as value,ContentType as title FROM contents"));
        return $data;
}
 
}
