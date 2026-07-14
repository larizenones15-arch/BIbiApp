<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Carbon\Carbon;

class ExcelQuestionExpandedSeeder extends Seeder
{
    public function run()
    {
        // Force drop and completely rebuild the correct structure directly in code execution
        Schema::dropIfExists('excel_questions');
        
        Schema::create('excel_questions', function (Blueprint $table) {
            $table->id();
            $table->integer('question_number');
            $table->text('question_text');
            $table->string('type'); 
            $table->text('options')->nullable(); 
            $table->string('correct_answer');
            $table->text('explanation');
            $table->timestamps();
        });

        $questions = [
            // --- QUESTIONS 1 TO 10 (ORIGINAL STUDY MATERIAL) ---
            [
                'question_number' => 1,
                'question_text' => 'The IFERROR function displays a custom message only when a formula results in #N/A, but it will let other errors like #DIV/0! or #VALUE! pass through normally.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'The IFERROR function catches all types of Excel errors (including #DIV/0!, #VALUE!, #REF!, #NAME?, and #N/A). It does not single out #N/A.'
            ],
            [
                'question_number' => 2,
                'question_text' => 'When using the XLOOKUP function to search for data, the return array (where the results are located) can be positioned to the left of the lookup array.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Unlike the traditional VLOOKUP which can only search from left to right, XLOOKUP uses separate arguments for the lookup array and return array. This allows it to look up data to the left or right seamlessly.'
            ],
            [
                'question_number' => 3,
                'question_text' => "If you apply a Data Validation drop-down list to a cell, typing a value that is not in the list will always be blocked, regardless of Excel's Error Alert settings.",
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'Data Validation only blocks invalid data if the "Error Alert" style is set to Stop. If it is set to Warning or Information, users can bypass the restriction and enter unauthorized data.'
            ],
            [
                'question_number' => 4,
                'question_text' => 'In the Custom AutoFilter dialog box, placing two criteria on the same row means that a record must satisfy both conditions (an AND logical relationship) to be displayed.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'When setting up an Advanced Filter or Custom AutoFilter, criteria placed on the same horizontal row are treated as an AND condition. Criteria placed on separate rows are treated as an OR condition.'
            ],
            [
                'question_number' => 5,
                'question_text' => "Cell A1 contains the text string 'Product-2026'. Which of the following formulas will correctly extract just the 4-digit year '2026' from the right side?",
                'type' => 'MC',
                'options' => json_encode([
                    'A' => '=LEFT(A1, 4)',
                    'B' => '=MID(A1, 4, 9)',
                    'C' => '=RIGHT(A1, 4)',
                    'D' => '=LEN(A1, 4)'
                ]),
                'correct_answer' => 'C',
                'explanation' => "The RIGHT function extracts a specified number of characters starting from the very end (right side) of a text string. Since '2026' is 4 characters long and located at the end, =RIGHT(A1, 4) is the correct choice."
            ],
            [
                'question_number' => 6,
                'question_text' => 'You want to count how many cells in the range B2:B20 contain values that are strictly greater than 100. What is the correct formula?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => '=COUNTIF(B2:B20, >100)',
                    'B' => '=COUNTIF(B2:B20, ">100")',
                    'C' => '=COUNTIFS(B2:B20, >"100")',
                    'D' => '=COUNT(B2:B20, ">100")'
                ]),
                'correct_answer' => 'B',
                'explanation' => 'When using COUNTIF or SUMIF, logical criteria involving comparison operators (like >, <, =) must be enclosed in double quotation marks as a text string. Therefore, ">100" is required.'
            ],
            [
                'question_number' => 7,
                'question_text' => 'If cell A1 contains the formula =B1+C1 and you completely delete Row 1 from the worksheet, what error code will look up in the shifted formula?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => '#VALUE!',
                    'B' => '#NAME?',
                    'C' => '#REF!',
                    'D' => '#DIV/0!'
                ]),
                'correct_answer' => 'C',
                'explanation' => 'The #REF! (Reference) error occurs when a formula refers to a cell coordinate that no longer exists. Deleting the actual row or column that a formula was pointing to triggers this error immediately.'
            ],
            [
                'question_number' => 8,
                'question_text' => 'Which of the following chart elements should you click to quickly add or remove major visual components such as Axis Titles, Data Labels, or a Legend?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'The green plus (+) icon (Chart Elements)',
                    'B' => 'The paintbrush icon (Chart Styles)',
                    'C' => 'The funnel icon (Chart Filters)',
                    'D' => 'The Quick Access Toolbar'
                ]),
                'correct_answer' => 'A',
                'explanation' => 'Clicking a chart reveals three floating buttons on the top right. The green plus (+) icon opens the Chart Elements menu, which is the fastest way to check or uncheck core visual labels.'
            ],
            [
                'question_number' => 9,
                'question_text' => "What is the primary characteristic of an Excel macro-enabled workbook saved with the '.xlsm' file extension?",
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'It automatically compresses the file size to half',
                    'B' => 'It is the only modern format that can store and execute VBA macro code safely',
                    'C' => 'It converts all cell formulas into plain text values',
                    'D' => 'It can only be opened on a web browser'
                ]),
                'correct_answer' => 'B',
                'explanation' => 'Standard .xlsx files strip away and delete all VBA code when saved. To preserve scripts, buttons, and automated macros, the file must be saved as an Excel Macro-Enabled Workbook (.xlsm).'
            ],
            [
                'question_number' => 10,
                'question_text' => 'You need to freeze the first column (Column A) of your spreadsheet so that it stays locked in place when you scroll horizontally to the right. Which feature under the View tab should you select?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'Freeze Panes -> Freeze Top Row',
                    'B' => 'Split Window',
                    'C' => 'Freeze Panes -> Freeze First Column',
                    'D' => 'Arrange All'
                ]),
                'correct_answer' => 'C',
                'explanation' => 'Excel provides a dedicated 1-click command under View > Freeze Panes > Freeze First Column that locks Column A instantly, allowing you to scroll through large tables without losing track of row identifiers.'
            ],

            // --- QUESTIONS 11 TO 100 (NEW EXPANDED POOL) ---
            [
                'question_number' => 11,
                'question_text' => 'Pressing Ctrl + Z undoes the last action performed in Excel, while pressing Ctrl + Y redoes an action that was previously undone.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Ctrl + Z is the universal keyboard shortcut for Undo, and Ctrl + Y handles Redo across all primary Microsoft Office desktop environments.'
            ],
            [
                'question_number' => 12,
                'question_text' => 'Which keyboard shortcut allows a user to instantly toggle cell formula references between relative, absolute, and mixed modes (e.g., changing A1 to $A$1)?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'F2', 'B' => 'F4', 'C' => 'F9', 'D' => 'F11']),
                'correct_answer' => 'B',
                'explanation' => 'While editing a formula, selecting a cell reference and pressing F4 cycles through absolute ($A$1), mixed row ($A1), mixed column (A$1), and relative (A1) structural referencing configurations.'
            ],
            [
                'question_number' => 13,
                'question_text' => 'The Quick Access Toolbar can only display options that are currently active on the Ribbon tabs.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'The Quick Access Toolbar can be customized to include commands not found on the Ribbon by modifying options in Excel Options > Quick Access Toolbar.'
            ],
            [
                'question_number' => 14,
                'question_text' => 'When you type a value into a cell and press Shift + Enter, Excel saves the data and shifts the focus to which neighboring position?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'The cell directly below', 'B' => 'The cell directly above', 'C' => 'The cell to the right', 'D' => 'The cell to the left']),
                'correct_answer' => 'B',
                'explanation' => 'Pressing Enter moves the selection box down, whereas combining it as Shift + Enter reverses the execution path and moves the selection box one cell directly up.'
            ],
            [
                'question_number' => 15,
                'question_text' => 'Excel allows you to add custom tabs and specialized groups to the main Ribbon menu through the Excel Options control panel.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Under Excel Options > Customize Ribbon, users can create custom tabs, add individual command actions, or hide built-in layout collections entirely.'
            ],
            [
                'question_number' => 16,
                'question_text' => 'What happens when you double-click the boundary line separating two column headers (e.g., between Column B and Column C)?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'Both columns are completely deleted from the table sheet',
                    'B' => 'The right-hand column matches the exact width of the left-hand column',
                    'C' => 'The left column automatically adjusts its width to perfectly fit its longest text item',
                    'D' => 'The formula parameters inside both columns are evaluated'
                ]),
                'correct_answer' => 'C',
                'explanation' => 'Double-clicking a header boundary boundary line executes an AutoFit, resizing the left column to match the maximum width demands of its contents.'
            ],
            [
                'question_number' => 17,
                'question_text' => 'To select an entire column in an active worksheet instantly, you can use the keyboard shortcut Ctrl + Spacebar.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Ctrl + Spacebar selects the entire active column, while Shift + Spacebar highlights the entire active horizontal row instead.'
            ],
            [
                'question_number' => 18,
                'question_text' => 'Which of the following functions should be used to display the dynamic current date and local system time inside an updated cell block?',
                'type' => 'MC',
                'options' => json_encode(['A' => '=TODAY()', 'B' => '=NOW()', 'C' => '=DATE()', 'D' => '=TIME()']),
                'correct_answer' => 'B',
                'explanation' => 'The =NOW() function evaluates the current system date and exact clock time. The =TODAY() function returns only the calendar date without time values.'
            ],
            [
                'question_number' => 19,
                'question_text' => 'If you save a workbook as a plain PDF format file, all formulas and interactive behaviors will remain functional when opened on mobile devices.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'Exporting to PDF flattens data into a static print-ready visual layout. All background operational logic, calculations, and formulas are removed.'
            ],
            [
                'question_number' => 20,
                'question_text' => 'What is the correct syntax for referencing cell E5 located on a separate worksheet named "Q3_Data" within the same workbook?',
                'type' => 'MC',
                'options' => json_encode(['A' => '=Q3_Data:E5', 'B' => '=Q3_Data$E5', 'C' => "=Q3_Data!E5", 'D' => '=Q3_Data#E5']),
                'correct_answer' => 'C',
                'explanation' => 'Excel cross-sheet reference paths require an exclamation point (!) separator inserted cleanly between the target sheet tab name string and the designated cell address coordinate.'
            ],
            [
                'question_number' => 21,
                'question_text' => 'When filling data downwards using the AutoFill square handle, holding down the Ctrl key forces Excel to copy the exact values rather than incrementing a standard sequential list series.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Holding Ctrl down flips Excel AutoFill behavior. If it defaults to an incremental sequence (like 1, 2, 3), it will copy the value instead (1, 1, 1), and vice versa.'
            ],
            [
                'question_number' => 22,
                'question_text' => 'Which built-in Paste Special option should you select to convert horizontal data rows smoothly into vertical structural data columns?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Paste Formulas', 'B' => 'Paste Values Only', 'C' => 'Transpose', 'D' => 'Paste Links']),
                'correct_answer' => 'C',
                'explanation' => 'The Transpose feature rearranges data arrays by swapping rows into columns or columns into rows during paste routines.'
            ],
            [
                'question_number' => 23,
                'question_text' => 'The dynamic formula token string =SUM(A1:A3) yields the exact numeric result as writing out =A1+A2+A3 directly.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Both math forms add up the target numbers in the range. However, =SUM() is preferred because it automatically bypasses text values without throwing error logs.'
            ],
            [
                'question_number' => 24,
                'question_text' => 'If a cell displays a sequence of pound signs like "#######", what core issue does this indicate in the spreadsheet workspace?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'The formula contains a major text reference syntax spelling error',
                    'B' => 'The target column width is too narrow to properly display the formatted numeric or date value',
                    'C' => 'The cell is attempting to divide a numeric value by zero',
                    'D' => 'The circular computation engine failed to resolve'
                ]),
                'correct_answer' => 'B',
                'explanation' => 'A "#######" warning means the column is too narrow to fit the number or date value. Widening the column fixes this layout warning.'
            ],
            [
                'question_number' => 25,
                'question_text' => 'Excel evaluates mathematical formulas based on standard arithmetic rules: multiplication and division are calculated before addition and subtraction.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Excel follows standard operational precedence rules (PEMDAS). You can use parentheses () to override this default processing order.'
            ],
            [
                'question_number' => 26,
                'question_text' => 'Which of the following functions will return the highest numeric value found within a selected target cell range B2:B50?',
                'type' => 'MC',
                'options' => json_encode(['A' => '=HIGH(B2:B50)', 'B' => '=MAX(B2:B50)', 'C' => '=LARGE_VAL(B2:B50)', 'D' => '=UPPER(B2:B50)']),
                'correct_answer' => 'B',
                'explanation' => 'The =MAX() function extracts the highest numeric value from a range, while =MIN() extracts the lowest value.'
            ],
            [
                'question_number' => 27,
                'question_text' => 'The formula =COUNTA(C1:C10) counts only cells that contain numeric entries, completely ignoring cells that contain text strings.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'COUNTA counts all non-empty cells, including those with text, numbers, or errors. To count only numeric entries, use the standard =COUNT() function.'
            ],
            [
                'question_number' => 28,
                'question_text' => 'Which formula should you write to calculate the mathematical average of cells D2, D3, D4, and D5 accurately?',
                'type' => 'MC',
                'options' => json_encode(['A' => '=MEDIAN(D2:D5)', 'B' => '=AVERAGE(D2:D5)', 'C' => '=MEAN(D2:D5)', 'D' => '=SUM_AVG(D2:D5)']),
                'correct_answer' => 'B',
                'explanation' => 'Excel uses the specific name =AVERAGE() to compute the arithmetic mean of a designated data range.'
            ],
            [
                'question_number' => 29,
                'question_text' => 'When copying a cell containing the relative formula =A1+1 down into the next row, the formula automatically updates its row reference to =A2+1.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Relative references change dynamically based on their relative position when copied down rows or across columns.'
            ],
            [
                'question_number' => 30,
                'question_text' => 'What specific error code is returned when a formula attempts to divide a number by blank space or an explicit zero cell reference?',
                'type' => 'MC',
                'options' => json_encode(['A' => '#VALUE!', 'B' => '#NAME?', 'C' => '#DIV/0!', 'D' => '#NUM!']),
                'correct_answer' => 'C',
                'explanation' => 'The #DIV/0! error is triggered whenever a formula attempts to divide any number by zero or an empty cell.'
            ],
            [
                'question_number' => 31,
                'question_text' => 'Using an absolute cell reference format like =$B$2 keeps that specific cell coordinate locked in place, preventing it from changing when the formula is copied elsewhere.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The dollar sign prefix locks the row and column coordinate. This ensures the target reference point remains fixed when using AutoFill.'
            ],
            [
                'question_number' => 32,
                'question_text' => 'If cell A1 contains the value 50 and B1 contains 100, what will be the boolean outcome evaluated by the formula =AND(A1>20, B1<150)?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'TRUE', 'B' => 'FALSE', 'C' => '#VALUE!', 'D' => 'NULL']),
                'correct_answer' => 'A',
                'explanation' => 'The AND function returns TRUE if all its individual conditions are true. Since 50 > 20 and 100 < 150 are both true, it evaluates to TRUE.'
            ],
            [
                'question_number' => 33,
                'question_text' => 'The basic OR logical function requires every listed expression argument to evaluate as true before returning a true state result.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'The OR function returns TRUE if at least one condition evaluates to true. It only returns FALSE if all conditions are false.'
            ],
            [
                'question_number' => 34,
                'question_text' => 'Consider the nested logic formula: =IF(A1>=90, "Excellent", IF(A1>=70, "Good", "Fail")). If cell A1 contains exactly 75, what is the returned string text?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Excellent', 'B' => 'Good', 'C' => 'Fail', 'D' => 'Blank']),
                'correct_answer' => 'B',
                'explanation' => 'Excel evaluates nested IF statements from left to right. Since 75 >= 90 is false, it moves to the second condition. 75 >= 70 evaluates to true, so it returns "Good".'
            ],
            [
                'question_number' => 35,
                'question_text' => 'The text manipulation formula =CONCATENATE("Excel", " ", "Easy") will output the combined string phrase "Excel Easy".',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The CONCATENATE function (and its modern counterpart CONCAT) joins multiple text strings together into a single continuous text item.'
            ],
            [
                'question_number' => 36,
                'question_text' => 'Which character serves as the alternative standard text concatenation shorthand operator inside normal formula expressions?',
                'type' => 'MC',
                'options' => json_encode(['A' => '+', 'B' => '&', 'C' => '@', 'D' => '*']),
                'correct_answer' => 'B',
                'explanation' => 'The ampersand (&) symbol can be used instead of a function to join text strings. For example, ="Excel" & " " & "Easy" evaluates to "Excel Easy".'
            ],
            [
                'question_number' => 37,
                'question_text' => 'The =LEFT("Database", 4) text function will successfully return the standalone extracted word element "Data".',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The LEFT function extracts a specified number of characters starting from the far left of a text string. The first four characters of "Database" are "Data".'
            ],
            [
                'question_number' => 38,
                'question_text' => 'If cell A1 contains the raw tracking text string "Level-2-Exam", what value is returned when running the character length tracking function =LEN(A1)?',
                'type' => 'MC',
                'options' => json_encode(['A' => '10', 'B' => '12', 'C' => '5', 'D' => '8']),
                'correct_answer' => 'B',
                'explanation' => 'The LEN function returns the total number of characters in a text string, including alphanumeric characters, spaces, symbols, and hyphens. "Level-2-Exam" contains exactly 12 characters.'
            ],
            [
                'question_number' => 39,
                'question_text' => 'The text function =MID("Standard", 3, 2) starts extracting characters at index positions from the left side and returns the short string block "an".',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The MID function extracts characters from the middle of a text string based on a starting position and a length argument. Starting at the 3rd letter ("a") for a length of 2 characters returns "an".'
            ],
            [
                'question_number' => 40,
                'question_text' => 'Which of the following functions searches for a specific substring within a larger text string and returns its exact numerical starting index position?',
                'type' => 'MC',
                'options' => json_encode(['A' => '=SEARCH()', 'B' => '=LOCATE()', 'C' => '=INDEXOF()', 'D' => '=MATCH_TEXT()']),
                'correct_answer' => 'A',
                'explanation' => '=SEARCH() returns the starting position of a text string within another text string. It is case-insensitive, unlike the =FIND() function.'
            ],
            [
                'question_number' => 41,
                'question_text' => 'By default, the VLOOKUP function performs an exact match evaluation, even if the final lookup range_lookup argument parameter is omitted entirely.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'If the final argument is omitted, VLOOKUP defaults to an approximate match (TRUE). To enforce an exact match, you must explicitly set the last argument to FALSE or 0.'
            ],
            [
                'question_number' => 42,
                'question_text' => 'You are writing a standard VLOOKUP formula. What index tracking element must be specified to pull data out from the 3rd vertical column of a target data block range?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'col_index_num = 3',
                    'B' => 'row_index_num = 3',
                    'C' => 'range_lookup = 3',
                    'D' => 'lookup_value = 3'
                ]),
                'correct_answer' => 'A',
                'explanation' => 'The third argument in a VLOOKUP formula is the column index number (`col_index_num`). This tells Excel which column in the table array contains the return values.'
            ],
            [
                'question_number' => 43,
                'question_text' => 'The traditional MATCH function returns the actual value of a matching item found within an active database column vector segment.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'The MATCH function returns the relative index position of a lookup item within a row or column range, not the actual value itself.'
            ],
            [
                'question_number' => 44,
                'question_text' => 'When combined, which functional index pair can effectively replicate the lookup flexibility of XLOOKUP on older legacy installations of Microsoft Excel?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'VLOOKUP and HLOOKUP',
                    'B' => 'INDEX and MATCH',
                    'C' => 'FIND and SEARCH',
                    'D' => 'IFERROR and CHOOSE'
                ]),
                'correct_answer' => 'B',
                'explanation' => 'Combining INDEX and MATCH allows users to look up values in any column or row direction, bypassing the left-to-right restriction of VLOOKUP.'
            ],
            [
                'question_number' => 45,
                'question_text' => 'The HLOOKUP function works just like VLOOKUP, except it searches horizontally across rows instead of searching vertically down columns.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'HLOOKUP (Horizontal Lookup) searches across the top row of a table array and returns a value from the specified row index below it.'
            ],
            [
                'question_number' => 46,
                'question_text' => 'Which error code is displayed by a VLOOKUP or XLOOKUP formula if the lookup engine cannot find a matching item within the target data range?',
                'type' => 'MC',
                'options' => json_encode(['A' => '#VALUE!', 'B' => '#NAME?', 'C' => '#N/A', 'D' => '#NULL!']),
                'correct_answer' => 'C',
                'explanation' => 'The #N/A (Not Available) error occurs when a lookup function cannot find a match for the specified lookup value.'
            ],
            [
                'question_number' => 47,
                'question_text' => 'The modern XLOOKUP function requires you to select the entire table array grid boundary block as a single consolidated input argument.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'XLOOKUP uses separate arguments for the lookup vector range and the return vector range. This makes formulas more robust when adding or removing columns.'
            ],
            [
                'question_number' => 48,
                'question_text' => 'If you want to add up values in the range G2:G20, but only for records where the corresponding region text column entry in F2:F20 matches "West", which function is required?',
                'type' => 'MC',
                'options' => json_encode(['A' => '=SUM(G2:G20)', 'B' => '=SUMIF(F2:F20, "West", G2:G20)', 'C' => '=COUNTIF(F2:F20, "West")', 'D' => '=TOTALIF(G2:G20, "West")']),
                'correct_answer' => 'B',
                'explanation' => 'The SUMIF function conditionalizes calculations. It evaluates a criteria range (F2:F20) against a specific value ("West") before adding matching rows from a target range (G2:G20).'
            ],
            [
                'question_number' => 49,
                'question_text' => 'The specialized COUNTIFS function allows users to apply multiple criteria across different validation ranges simultaneously.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Functions ending in "IFS" (such as COUNTIFS, SUMIFS, and AVERAGEIFS) support multiple independent range and criteria pairs in a single formula.'
            ],
            [
                'question_number' => 50,
                'question_text' => 'What type of structural error is generated if you accidentally write a formula in cell C1 that references cell C1 itself (e.g., =C1+10)?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'Syntax Spelling Error',
                    'B' => 'Circular Reference Warning',
                    'C' => 'Data Formatting Typo',
                    'D' => 'Iterative Logic Overflow'
                ]),
                'correct_answer' => 'B',
                'explanation' => 'A circular reference occurs when a formula refers to its own cell address, either directly or indirectly. This creates an infinite loop that stalls the calculation engine.'
            ],
            [
                'question_number' => 51,
                'question_text' => 'To force all text characters inside cell A1 to convert cleanly into uppercase styling, you should use the formula =UPPER(A1).',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The UPPER function converts all lowercase letters in a text string to uppercase. Non-letter characters remain unchanged.'
            ],
            [
                'question_number' => 52,
                'question_text' => 'Which function removes all leading, trailing, and duplicate spaces from a text string, leaving only single spaces between words?',
                'type' => 'MC',
                'options' => json_encode(['A' => '=CLEAN()', 'B' => '=TRIM()', 'C' => '=REMOVE_SPACE()', 'D' => '=REPLACE()']),
                'correct_answer' => 'B',
                'explanation' => 'The TRIM function cleans up text formatting by removing extra spaces, which is useful when preparing data imported from external systems.'
            ],
            [
                'question_number' => 53,
                'question_text' => 'The formula =PROPER("john smith") outputs the reformatted text name string "John Smith".',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The PROPER function capitalizes the first letter of each word in a text string while converting all other letters to lowercase.'
            ],
            [
                'question_number' => 54,
                'question_text' => 'If a formula contains a misspelled function name (e.g., =SUUM(B1:B5)), which error code will Excel return?',
                'type' => 'MC',
                'options' => json_encode(['A' => '#REF!', 'B' => '#VALUE!', 'C' => '#NAME?', 'D' => '#NUM!']),
                'correct_answer' => 'C',
                'explanation' => 'The #NAME? error occurs when Excel does not recognize a text string in a formula, usually caused by a misspelled function name or an unquoted text string.'
            ],
            [
                'question_number' => 55,
                'question_text' => 'When using the standard Sort feature in Excel, you can sort records by cell fill color or font color, not just by alphanumeric values.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The Advanced Sort dialog box allows users to sort data by values, cell color, font color, or conditional formatting icons.'
            ],
            [
                'question_number' => 56,
                'question_text' => 'Which visual filtering tool provides a clickable, touch-friendly interface to filter data sets instantly within PivotTables and Excel Tables?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Timeline', 'B' => 'Slicer', 'C' => 'AutoFilter dropdown', 'D' => 'Data Validation list']),
                'correct_answer' => 'B',
                'explanation' => 'Slicers are visual filtering buttons that display the current filtering state, making it easy to filter data in a table or PivotTable with a single click.'
            ],
            [
                'question_number' => 57,
                'question_text' => 'When you apply a standard filter to an Excel sheet data table, rows that do not match the filter criteria are permanently deleted from the workbook.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'Filtering data sets only hides rows that do not meet the specified criteria. Removing the filter reveals the original data records unchanged.'
            ],
            [
                'question_number' => 58,
                'question_text' => 'Which of the following wildcard symbols should you use in a filter or search field to represent any number of characters?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Question mark (?)', 'B' => 'Asterisk (*)', 'C' => 'Tilde (~)', 'D' => 'Exclamation point (!)']),
                'correct_answer' => 'B',
                'explanation' => 'The asterisk (*) wildcard matches any sequence of characters, while the question mark (?) matches only a single character position.'
            ],
            [
                'question_number' => 59,
                'question_text' => 'The Flash Fill feature automatically detects patterns in your data entry and fills the remaining column cells without requiring any formulas.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Flash Fill recognizes data patterns (like splitting first and last names) and fills out data down a column automatically.'
            ],
            [
                'question_number' => 60,
                'question_text' => 'Where should you navigate on the main Ribbon menu to manually activate or remove the interactive AutoFilter dropdown arrows from your header row data?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Home tab -> Styles group', 'B' => 'Data tab -> Sort & Filter group', 'C' => 'Insert tab -> Tables group', 'D' => 'Review tab -> Protect group']),
                'correct_answer' => 'B',
                'explanation' => 'The Filter toggle button is located under Data > Sort & Filter. It can also be activated using the keyboard shortcut Ctrl + Shift + L.'
            ],
            [
                'question_number' => 61,
                'question_text' => 'When conditional formatting rules conflict, Excel evaluates them in order from top to bottom based on their position in the Conditional Formatting Rules Manager list.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Excel processes conditional formatting rules sequentially from top to bottom. You can change this execution order using the up and down arrow buttons in the Rules Manager.'
            ],
            [
                'question_number' => 62,
                'question_text' => 'Which conditional formatting option should you select to display small, horizontal bars inside a cell to visualize its numeric value relative to other cells in the range?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Color Scales', 'B' => 'Icon Sets', 'C' => 'Data Bars', 'D' => 'Sparklines']),
                'correct_answer' => 'C',
                'explanation' => 'Data Bars apply a colored horizontal fill bar inside a cell, helping users visualize numbers in a range at a glance.'
            ],
            [
                'question_number' => 63,
                'question_text' => 'PivotTables permanently modify the layout of the source data table from which they are built.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'PivotTables summarize data in a separate, isolated grid layout. The underlying source data records remain untouched.'
            ],
            [
                'question_number' => 64,
                'question_text' => 'When you update values in your source data table, an associated PivotTable updates its summarized metrics instantly and automatically.',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'Yes, it updates values in real-time as you type',
                    'B' => 'No, you must right-click the PivotTable and select "Refresh" to update the data summaries',
                    'C' => 'No, you must rebuild the PivotTable from scratch',
                    'D' => 'Yes, but only if you close and save the workbook first'
                ]),
                'correct_answer' => 'B',
                'explanation' => 'PivotTables do not refresh automatically when source data changes. Users must manually refresh the PivotTable cache by clicking the Refresh button or right-clicking inside the grid.'
            ],
            [
                'question_number' => 65,
                'question_text' => 'A PivotTable can group raw date records into larger, consolidated summary groups like months, quarters, or years.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Right-clicking a date field in a PivotTable and selecting "Group" allows users to aggregate raw timestamps into cleaner summary buckets like Months or Years.'
            ],
            [
                'question_number' => 66,
                'question_text' => 'Which quadrant box area inside the PivotTable Fields pane should you drag a text column header to split data summaries across vertical grid columns?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Filters', 'B' => 'Rows', 'C' => 'Columns', 'D' => 'Values']),
                'correct_answer' => 'C',
                'explanation' => 'Dragging fields into the Columns area displays those data categories as horizontal column headers across the top of the PivotTable layout.'
            ],
            [
                'question_number' => 67,
                'question_text' => 'By default, dragging a text-based column field into the Values area of a PivotTable summary field summaries data using the SUM function.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'Excel defaults to the COUNT function when processing text fields in the Values area. It defaults to the SUM function for numeric fields.'
            ],
            [
                'question_number' => 68,
                'question_text' => 'Which feature should you use to calculate summary totals for nested subcategories within a data table that has been sorted by those same categories?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Data Validation', 'B' => 'Subtotal', 'C' => 'Consolidate', 'D' => 'Text to Columns']),
                'correct_answer' => 'B',
                'explanation' => 'The Subtotal command automatically inserts summary rows (using functions like SUM or COUNT) for nested groups within a sorted data range.'
            ],
            [
                'question_number' => 69,
                'question_text' => 'A standard chart layout linked to an Excel data table updates its visual bars or lines automatically when the source values are changed.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Excel charts are dynamically linked to their underlying data points. Any modifications to the source values update the chart visualization immediately.'
            ],
            [
                'question_number' => 70,
                'question_text' => 'What type of specialized chart should you create to display data trends over equal intervals, such as tracking stock price changes across months or years?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Pie Chart', 'B' => 'Line Chart', 'C' => 'Scatter Chart', 'D' => 'Radar Chart']),
                'correct_answer' => 'B',
                'explanation' => 'Line charts are ideal for showing data trends over time, using continuous lines to connect data points.'
            ],
            [
                'question_number' => 71,
                'question_text' => 'Pie charts are designed to plot and compare multiple independent data series columns simultaneously.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'Pie charts are limited to displaying a single data series, showing how parts contribute to a whole percentage total.'
            ],
            [
                'question_number' => 72,
                'question_text' => 'What are the tiny, single-cell charts called that can be embedded directly alongside text rows to show trends within a compact space?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'MicroCharts', 'B' => 'TrendLines', 'C' => 'Sparklines', 'D' => 'CellGraphs']),
                'correct_answer' => 'C',
                'explanation' => 'Sparklines are compact, single-cell charts located under the Insert tab, perfect for showing trends alongside individual rows of data.'
            ],
            [
                'question_number' => 73,
                'question_text' => 'When creating an XY Scatter Chart, both the horizontal (X) and vertical (Y) axes plot numeric data values.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Scatter charts combine X and Y values into single data points, making them ideal for showing relationships between numeric variables.'
            ],
            [
                'question_number' => 74,
                'question_text' => 'Which analytical tool should you use if you know the target result of a formula but need to find the specific input value required to achieve that result?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Scenario Manager', 'B' => 'Goal Seek', 'C' => 'Data Table', 'D' => 'Solver']),
                'correct_answer' => 'B',
                'explanation' => 'Goal Seek is a What-If Analysis tool that works backward from a target outcome to determine the exact input value required.'
            ],
            [
                'question_number' => 75,
                'question_text' => 'The advanced Solver add-in can optimize a target formula outcome by adjusting multiple independent variable cells while adhering to specific constraints.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Solver expands on Goal Seek by managing multiple variables and constraints to find an optimal solution for linear or non-linear models.'
            ],
            [
                'question_number' => 76,
                'question_text' => 'Which What-If Analysis tool allows users to define, save, and switch between completely different sets of input values within the same worksheet layout?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Goal Seek', 'B' => 'Data Validation', 'C' => 'Scenario Manager', 'D' => 'Consolidate']),
                'correct_answer' => 'C',
                'explanation' => 'Scenario Manager allows users to store and swap between different sets of input variables, which is helpful for forecasting best-case and worst-case scenarios.'
            ],
            [
                'question_number' => 77,
                'question_text' => 'To make the Developer tab visible on the main Ribbon menu, you must modify your settings in the Excel Options control panel.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The Developer tab is hidden by default. It can be enabled under Excel Options > Customize Ribbon by checking the Developer checkbox.'
            ],
            [
                'question_number' => 78,
                'question_text' => 'What is the standard integrated keyboard shortcut used to open the Microsoft Visual Basic for Applications (VBA) macro development window layout?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Alt + F8', 'B' => 'Alt + F11', 'C' => 'Ctrl + F11', 'D' => 'Shift + F8']),
                'correct_answer' => 'B',
                'explanation' => 'Alt + F11 opens the VBA Editor interface. Alt + F8 displays the standard macro dialog box to run or manage existing macros.'
            ],
            [
                'question_number' => 79,
                'question_text' => 'When recording a macro using the built-in Macro Recorder, Excel tracks all mouse clicks and keystrokes and translates them into functional VBA code scripts.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The Macro Recorder captures user actions in the interface and generates the corresponding VBA code automatically.'
            ],
            [
                'question_number' => 80,
                'question_text' => 'Where should you write your custom VBA macro procedures so they can be executed from any worksheet tab in the workbook project?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'ThisWorkbook object', 'B' => 'Sheet1 code panel', 'C' => 'A standard Module sheet', 'D' => 'Immediate Window']),
                'correct_answer' => 'C',
                'explanation' => 'Custom macro procedures should be stored in standard Modules to ensure they can be accessed and run across all worksheets in the project.'
            ],
            [
                'question_number' => 81,
                'question_text' => 'In VBA coding structure syntax, writing a single quote character (\') at the start of a line transforms that entire row line text into an unexecuted code comment.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Single quotes indicate comments in VBA code, changing the line color to green and telling the compiler to ignore it during execution.'
            ],
            [
                'question_number' => 82,
                'question_text' => 'Which VBA code command statement correctly displays a pop-up alert dialog box containing a custom message string to the user?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'AlertBox("Hello")', 'B' => 'MsgBox "Hello"', 'C' => 'Print.Screen("Hello")', 'D' => 'Console.Log("Hello")']),
                'correct_answer' => 'B',
                'explanation' => 'The `MsgBox` command generates a standard modal pop-up dialog window with a specified message string and response buttons.'
            ],
            [
                'question_number' => 83,
                'question_text' => 'In VBA coding, a Sub procedure performs actions but does not return a specific value, whereas a Function procedure calculates and returns a value.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Sub routines execute blocks of action code. Functions are designed to perform calculations and return a specific value directly to the calling script or worksheet cell.'
            ],
            [
                'question_number' => 84,
                'question_text' => 'Which keyword command statement must you use to declare a variable type cleanly within a VBA script macro procedure?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Var', 'B' => 'Dim', 'C' => 'Define', 'D' => 'Set']),
                'correct_answer' => 'B',
                'explanation' => 'The `Dim` (Dimension) statement is used to allocate memory storage and specify the data type for a variable in VBA.'
            ],
            [
                'question_number' => 85,
                'question_text' => 'The VBA code expression line Range("A1").Value = 100 will write the numeric value 100 into cell A1 on the active worksheet.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The `Range("A1")` object references cell A1, and assigning a value to its `.Value` property updates the cell content accordingly.'
            ],
            [
                'question_number' => 86,
                'question_text' => 'Which variable data type is best suited for storing text strings like names or addresses within a custom VBA script procedure?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Integer', 'B' => 'Double', 'C' => 'String', 'D' => 'Boolean']),
                'correct_answer' => 'C',
                'explanation' => 'The String data type stores text sequences, while Integer and Double are used for numeric values.'
            ],
            [
                'question_number' => 87,
                'question_text' => 'The VBA expression cells(2, 1) refers to cell B1 on the active worksheet.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'The `Cells(row, column)` property uses index numbers. Therefore, `Cells(2, 1)` references Row 2, Column 1, which corresponds to cell A2.'
            ],
            [
                'question_number' => 88,
                'question_text' => 'Which conditional control structure statement block should you implement to run specific lines of VBA code only if a designated expression condition evaluates as true?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'For...Next', 'B' => 'If...Then...End If', 'C' => 'Do...While', 'D' => 'Select Case']),
                'correct_answer' => 'B',
                'explanation' => '`If...Then` structures handle conditional branching, executing code blocks only when the specified condition is met.'
            ],
            [
                'question_number' => 89,
                'question_text' => 'A For...Next loop structure repeats a block of VBA code statements a fixed number of times based on a counter variable limit parameters.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'A `For...Next` loop increments a counter variable through a defined range, making it ideal for iterating a set number of times.'
            ],
            [
                'question_number' => 90,
                'question_text' => 'What is the correct VBA code statement to completely clear out all text, formatting values, and formula contents from cell A1 instantly?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'Range("A1").Clear',
                    'B' => 'Range("A1").DeleteContent',
                    'C' => 'Range("A1").Reset',
                    'D' => 'Range("A1").Empty'
                ]),
                'correct_answer' => 'A',
                'explanation' => 'The `.Clear` method removes everything from a range, including formulas, text values, styles, and conditional formatting rules.'
            ],
            [
                'question_number' => 91,
                'question_text' => 'In VBA, you can use the Worksheets("Data").Activate statement to change the active tab focus to a sheet named "Data".',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'The `.Activate` method switches the active focus to the specified sheet object, bringing it to the foreground.'
            ],
            [
                'question_number' => 92,
                'question_text' => 'Which of the following properties should you append to an Excel Range object to modify the background fill color of a cell using VBA code?',
                'type' => 'MC',
                'options' => json_encode(['A' => '.Font.Color', 'B' => '.Interior.Color', 'C' => '.Background.Style', 'D' => '.CellColor']),
                'correct_answer' => 'B',
                'explanation' => 'The `.Interior.Color` property controls the background fill color of a range, often set using RGB colors or color constants.'
            ],
            [
                'question_number' => 93,
                'question_text' => 'The VBA looping block Do While...Loop continues executing its nested code statements as long as the specified condition expression evaluates to false.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'A `Do While` loop runs as long as its condition remains TRUE. To loop until a condition becomes true, use a `Do Until` loop structure.'
            ],
            [
                'question_number' => 94,
                'question_text' => 'If you want to display an input field pop-up box to collect text data or numeric answers from a user, which VBA function should you call?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'MsgBox()', 'B' => 'InputBox()', 'C' => 'TextBox()', 'D' => 'UserField()']),
                'correct_answer' => 'B',
                'explanation' => 'The `InputBox()` function displays a prompt dialog window with a text field, returning the string entered by the user.'
            ],
            [
                'question_number' => 95,
                'question_text' => 'The worksheet formula function =UPPER() can be written directly inside VBA code expressions without using any additional object prefix paths.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'To use standard worksheet functions in VBA, you must prefix them with `Application.WorksheetFunction` (e.g., `Application.WorksheetFunction.VLookup`).'
            ],
            [
                'question_number' => 96,
                'question_text' => 'Which debugging command key shortcut allows you to execute your VBA macro code one row line at a time to monitor changes while debugging?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'F5', 'B' => 'F8', 'C' => 'F9', 'D' => 'F2']),
                'correct_answer' => 'B',
                'explanation' => 'Pressing F8 executes code line-by-line (Step Into), allowing developers to debug scripts and monitor variable changes sequentially.'
            ],
            [
                'question_number' => 97,
                'question_text' => 'To hide an entire row from view using VBA code, you can set the Hidden property of that row range to True.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'T',
                'explanation' => 'Setting `EntireRow.Hidden = True` on a range object hides the corresponding horizontal row from the worksheet layout.'
            ],
            [
                'question_number' => 98,
                'question_text' => 'What type of structural macro procedure triggers automatically when a user performs an action like opening a workbook or clicking a worksheet tab?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Standard Module Sub', 'B' => 'Event Procedure', 'C' => 'User Defined Function', 'D' => 'Global Command']),
                'correct_answer' => 'B',
                'explanation' => 'Event Procedures are specialized subroutines tied to specific workbook objects (like Workbook_Open) that trigger automatically when actions occur.'
            ],
            [
                'question_number' => 99,
                'question_text' => 'VBA variable names can start with a number and contain space characters between words.',
                'type' => 'TF',
                'options' => json_encode(['T' => 'True', 'F' => 'False']),
                'correct_answer' => 'F',
                'explanation' => 'Variable names must begin with a letter, cannot contain spaces, and cannot include punctuation characters.'
            ],
            [
                'question_number' => 100,
                'question_text' => 'Which of the following statements should you add at the very top of your VBA module sheet to force explicit declaration of all variables before execution?',
                'type' => 'MC',
                'options' => json_encode([
                    'A' => 'Option Explicit',
                    'B' => 'Declare All',
                    'C' => 'Strict On',
                    'D' => 'Dim Required'
                ]),
                'correct_answer' => 'A',
                'explanation' => 'Adding `Option Explicit` at the top of a module forces developers to declare every variable with a Dim statement, helping catch spelling errors during compilation.'
            ]
        ];

        foreach ($questions as $q) {
            $q['created_at'] = Carbon::now();
            $q['updated_at'] = Carbon::now();
            DB::table('excel_questions')->insert($q);
        }
    }
}