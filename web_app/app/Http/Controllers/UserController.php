<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

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

    public function getForEdit()
    {
        $user = Auth::user();

        $name = $user->name;
        $email = $user->email;
        $id = $user->id;
        $surname = $user->surname;
        $username = $user->username;
        $pic = $user->pic;
        
        return view('editProfile', ['name' => $name,
                                'surname' => $surname,
                                'username' => $username,
                                'pic' => $pic,
                                'email' => $email,
                                'id' => $id,
                                ]);
    }

    public function editProfile(Request $request)
    {
        $user = Auth::user();

        $user->name = $request->get('name');
        $user->surname = $request->get('surname');
        $user->username = $request->get('username');
        $user->email = $request->get('email');

        $user->save();

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

    public function editPassword()
    {
        $user = User::find(auth()->id());
        if(Auth::check()) {
            return view('auth.change-password', compact('user'));
        } else {
            return view('home');
        }
        
    }

    public function updatePassword(Request $request)
    {
        if (!(Hash::check($request->get('current-password'), Auth::user()->password))) {
            // The passwords matches
            return redirect()->back()->with("error","Your current password does not matches with the password you provided. Please try again.");
        }

        if(strcmp($request->get('current-password'), $request->get('new-password')) == 0){
            //Current password and new password are same
            return redirect()->back()->with("error","New Password cannot be same as your current password. Please choose a different password.");
        }

        $validatedData = $request->validate([
            'current-password' => 'required',
            'new-password' => 'required|string|min:6|confirmed',
        ]);

        //Change Password
        $user = Auth::user();
        $user->password = bcrypt($request->get('new-password'));
        $user->save();

        return redirect()->back()->with("success","Password changed successfully !");
    }

    
}
