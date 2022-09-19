@extends('layouts.app')

@section('content')




<div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
    <div class="card p-4"> 
        <div class=" image d-flex flex-column justify-content-center align-items-center"> 
            <button class="btn btn-secondary"> 
                <img src="{{'pic'}}" alt=""> 
            </button> 
            <span class="name mt-3">{{$name}} {{$surname}}</span> <span class="idd">@ {{$username}}</span> 
            <div class="d-flex flex-row justify-content-center align-items-center gap-2"> 
                <span class="idd1">{{$email}}</span> <span><i class="fa fa-copy"></i></span> 
            </div> 
            
            @auth
                @if ($username == Auth::user()->username)
                    <div class=" d-flex mt-2"> 
                        <button class="btn1 btn-dark" onclick="window.location='{{ route("profileEdit") }}'">Edit Profile</button> 
                    </div>
                @endif
            @endauth
            
            <div class="text mt-3"> 
                <span> Profile of {{$username}} </span> 
            </div> 
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> 
        </div> 
        <div class=" px-2 rounded mt-4 date "> <span class="join">{{$id}}</span> 
    </div> 
</div> 
</div>
</div>

@endsection