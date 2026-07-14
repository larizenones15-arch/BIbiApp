<?php

namespace App\Http\Controllers;

use App\Models\LoginModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class LogInController extends Controller
{
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $employeelogin;
    public function __construct()
    {
            $this->employeelogin = new LoginModel();

    }
    public function index(Request $req)
    {
        // return 'kupal';
        $data = $this->employeelogin->EmployeeName($req);
        // dd($data);
        return response()->json($data['result'], $data['status_code']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        try {
            $systemId = $req->input('SystemID');
            $systemName = $req->input('SystemName');
            $existing = DB::table('Systems')->where('SystemID', $systemId)->first();

            if (!$existing) {
                return response()->json(['error' => 'System not found'], 404);
            }

            $updateData = [
                'SystemName'  => $systemName,
                'UpdatedDate' => now(),
                'UpdatedBy'   => $req->input('employeecode'), 
            ];

            if ($req->hasFile('Logo')) {
                $file = $req->file('Logo');
                $logoName = time() . '_' . $file->getClientOriginalName();

                $file->move(public_path('images/'), $logoName);
                
                $updateData['Logo'] = $logoName;

                if ($existing->Logo && file_exists(public_path('images/' . $existing->Logo))) {
                    @unlink(public_path('images/' . $existing->Logo));
                }
            }

            DB::table('Systems')
                ->where('SystemID', $systemId)
                ->update($updateData);

            return response()->json([
                'message' => 'Updated successfully',
                'logo' => $updateData['Logo'] ?? $existing->Logo
            ], 200);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

/**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $req
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $req, $id)
    {
        if ($id === 'signin') {
            $data = $this->employeelogin->loginValidator($req);
            return response()->json($data['result'], $data['status_code']);
        }

        if ($id === 'staff') {
            $data = $this->employeelogin->EmployeeName();
            return response()->json($data['result'], $data['status_code']);
        }
        
        return response()->json(['error' => 'Endpoint not found'], 404);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return dd($request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }
}
