<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    public function getUserInfo()
    {
        $user = Auth::user();

        $name = $user->name;
        $email = $user->email;
        $id = $user->id;
        $surname = $user->surname;
        $username = $user->username;
        $pic = $user->pic;
        return view('profile', ['name' => $name,
                                'surname' => $surname,
                                'username' => $username,
                                'pic' => $pic,
                                'email' => $email,
                                'id' => $id,
                                ]);
    }

    public function getAllUsers()
    {
        $users = User::all();
    }

    public function getUserById($idUser)
    {
        $user = User::find($idUser);

        $name = $user->name;
        $email = $user->email;
        $id = $user->id;
        $surname = $user->surname;
        $username = $user->username;
        $pic = $user->pic;
        return view('profile', ['name' => $name,
                                'surname' => $surname,
                                'username' => $username,
                                'pic' => $pic,
                                'email' => $email,
                                'id' => $id,
                                ]);


    }
    public function getUserByUsername($usernameUser)
    {
        $user = User::where('username', $usernameUser)->first();

        $name = $user->name;
        $email = $user->email;
        $id = $user->id;
        $surname = $user->surname;
        $username = $user->username;
        $pic = $user->pic;
        return view('profile', ['name' => $name,
                                'surname' => $surname,
                                'username' => $username,
                                'pic' => $pic,
                                'email' => $email,
                                'id' => $id,
                                ]);

    }
    
}
