<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CustomerLogController extends Controller
{
    public function index()
    {
        try {
            $logs = DB::table('customer_logs')->orderBy('date', 'desc')->get();
            return response()->json($logs, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            DB::table('customer_logs')->insert([
                'customer_name'  => $request->customer_name,
                'price'          => $request->price,
                'date'           => Carbon::now()->toDateTimeString(), // Logs active timestamp
                'created_at'     => Carbon::now(),
                'updated_at'     => Carbon::now(),
            ]);
            return response()->json(['message' => 'Customer log saved successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            DB::table('customer_logs')->where('id', $id)->update([
                'date'           => $request->date,
                'customer_name'  => $request->customer_name,
                'price'          => $request->price,
                'updated_at'     => Carbon::now(),
            ]);
            return response()->json(['message' => 'Customer log updated successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            DB::table('customer_logs')->where('id', $id)->delete();
            return response()->json(['message' => 'Customer log deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}