<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExpenseController extends Controller
{
    public function index(Request $request)
    {
        try {
            // Updated to order by your lowercase 'date' column
            $larizeLogs = DB::table('larize_expenses')->orderBy('date', 'desc')->get();
            $mjLogs = DB::table('mj_expenses')->orderBy('date', 'desc')->get();

            return response()->json([
                'larize' => $larizeLogs,
                'mj' => $mjLogs
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        // dd( $request);
        $type = $request->input('type');

        try {
            $conn = DB::connection('mysql');
            // dd($conn);

            if ($type === 'larize') {
                // MySQL automatically handles 'id' and 'date'

                $conn->table('larize_expenses')->insert([
                    'deposit'   => $request->deposit,
                    'savings'   => $request->savings,
                    'emergency' => $request->emergency,
                    'df'        => $request->df,
                    'needs'     => $request->needs,
                    'wants'     => $request->wants,
                ]);
            } elseif ($type === 'mj') {
                // MySQL automatically handles 'id' and 'date'
                $conn->table('mj_expenses')->insert([
                    'deposit'   => $request->deposit,
                    'savings'   => $request->savings,
                    'emergency' => $request->emergency,
                    'needs'     => $request->needs,
                    'wants'     => $request->wants,
                ]);
            }

            return response()->json(['message' => 'Expense logged successfully'], 201);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function update(Request $request, $id)
    {
        $type = $request->input('type');
        $table = ($type === 'larize') ? 'larize_expenses' : 'mj_expenses';
    
        try {
            $updateData = [
                'date'      => $request->date,
                'deposit'   => $request->deposit,
                'savings'   => $request->savings,
                'emergency' => $request->emergency,
                'needs'     => $request->needs,
                'wants'     => $request->wants,
            ];
    
            // Only add DF if the type is larize
            if ($type === 'larize') {
                $updateData['df'] = $request->df;
            }
    
            DB::table($table)->where('id', $id)->update($updateData);
    
            return response()->json(['message' => 'Updated successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function destroy(Request $request, $id)
    {
        $type = $request->query('type'); 
        $table = ($type === 'larize') ? 'larize_expenses' : 'mj_expenses';

        try {
            DB::table($table)->where('id', $id)->delete();
            return response()->json(['message' => 'Deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}