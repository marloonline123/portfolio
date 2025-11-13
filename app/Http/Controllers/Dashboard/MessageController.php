<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['messages'] = Message::search(request('search'), ['name', 'email', 'subject'])
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('dashboard/messages/index', $data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Message $message)
    {
        return inertia('dashboard/messages/show', [
            'message' => $message,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        $message->delete();

        return to_route('dashboard.messages.index')
            ->with('success', 'Message deleted successfully.');
    }
}
