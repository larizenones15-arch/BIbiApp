<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ActualExpenseController extends Controller
{
    public function index()
    {
        try {
            // Force connection setup explicitly
            $conn = DB::connection('mysql');
            
            $larizeGastos = $conn->table('actual_expenses')->where('spender', 'larize')->orderBy('date', 'desc')->get();
            $mjGastos = $conn->table('actual_expenses')->where('spender', 'mj')->orderBy('date', 'desc')->get();

            return response()->json([
                'larize' => $larizeGastos,
                'mj' => $mjGastos
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $conn = DB::connection('mysql');
            
            $conn->table('actual_expenses')->insert([
                'spender'   => $request->spender,
                'item_name' => $request->item_name,
                'amount'    => $request->amount,
                'category'  => $request->category,
            ]);
            return response()->json(['message' => 'Gastos logged successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $conn = DB::connection('mysql');
            
            $conn->table('actual_expenses')->where('id', $id)->update([
                'date'      => $request->date,
                'item_name' => $request->item_name,
                'amount'    => $request->amount,
                'category'  => $request->category,
            ]);
            return response()->json(['message' => 'Gastos updated successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $conn = DB::connection('mysql');
            
            $conn->table('actual_expenses')->where('id', $id)->delete();
            return response()->json(['message' => 'Gastos deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}