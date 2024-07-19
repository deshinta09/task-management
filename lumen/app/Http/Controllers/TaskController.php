<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Task::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        try{
            $task = new Task();
            $task->title = $request->title;
            $task->description = $request->description;
            $task->status = $request->status;

            if($task->save()){
                return response()->json(['status'=> 'success','message'=>'Task create successfully'],201);
            };
        } catch (\Exception $e) {
            return response()->json(['status'=> 'error','message'=>$e->getMessage()],500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            return Task::findOrFail($id);
        } catch (\Exception $e) {
            return response()->json(['status'=> 'error','message'=>$e->getMessage()],500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $task = Task::findOrFail($id);
            $task->title = $request->title;
            $task->description = $request->description;
            $task->status = $request->status;

            if($task->save()){
                return response()->json(['status'=> 'success','message'=>'Task updated successfully'],200);
            };
        } catch (\Exception $e) {
            return response()->json(['status'=> 'error','message'=>$e->getMessage()],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        try {
            $task = Task::findOrFail($id);

            if($task->delete()){
                return response()->json(['status'=> 'success','message'=>'Task deleted successfully'],200);
            };
        } catch (\Exception $e) {
            return response()->json(['status'=> 'error','message'=>$e->getMessage()],500);
        }
    }
}
