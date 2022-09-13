<!DOCTYPE html>
<html lang="">
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        @if ($title)
                <title>{{ $title }}</title>
        @else
                <title>App</title>
        @endif
    
        
        
        <link href="{{ asset('css/navbar.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
       
    </head>
        
    <body>

    <nav>
  <ul class="menu">
    <li class="logo"><img src="{{ asset('images/logo_ace.png') }}" alt=""></li>

    <li class="item has-submenu">
      <a tabindex="0" href="#">Admitere</a>
      <ul class="submenu">
        <li class="subitem"><a href="#">Design</a></li>
        <li class="subitem"><a href="#">Development</a></li>
        <li class="subitem"><a href="#">SEO</a></li>
        <li class="subitem"><a href="#">Copywriting</a></li>
      </ul>
    </li>

    <li class="item has-submenu">
      <a tabindex="0" href="#">Despre noi</a>
      <ul class="submenu">
        <li class="subitem"><a href="#">Design</a></li>
        <li class="subitem"><a href="#">Development</a></li>
        <li class="subitem"><a href="#">SEO</a></li>
        <li class="subitem"><a href="#">Copywriting</a></li>
      </ul>
    </li>

    <li class="item has-submenu">
      <a tabindex="0" href="#">Învățământ</a>
      <ul class="submenu">
        <li class="subitem"><a href="#">Design</a></li>
        <li class="subitem"><a href="#">Development</a></li>
        <li class="subitem"><a href="#">SEO</a></li>
        <li class="subitem"><a href="#">Copywriting</a></li>
      </ul>
    </li>

    <li class="item has-submenu">
      <a tabindex="0" href="#">Cercetare</a>
      <ul class="submenu">
        <li class="subitem"><a href="#">Design</a></li>
        <li class="subitem"><a href="#">Development</a></li>
        <li class="subitem"><a href="#">SEO</a></li>
        <li class="subitem"><a href="#">Copywriting</a></li>
      </ul>
    </li>

    <li class="item has-submenu">
      <a tabindex="0" href="#">Comunitate</a>
      <ul class="submenu">
        <li class="subitem"><a href="#">Design</a></li>
        <li class="subitem"><a href="#">Development</a></li>
        <li class="subitem"><a href="#">SEO</a></li>
        <li class="subitem"><a href="#">Copywriting</a></li>
      </ul>
    </li>

    <li class="item has-submenu">
      <a tabindex="0" href="#">Media</a>
      <ul class="submenu">
        <li class="subitem"><a href="#">Design</a></li>
        <li class="subitem"><a href="#">Development</a></li>
        <li class="subitem"><a href="#">SEO</a></li>
        <li class="subitem"><a href="#">Copywriting</a></li>
      </ul>
    </li>

    <li class="item has-submenu">
      <a tabindex="0" href="#">Servicii</a>
      <ul class="submenu">
        <li class="subitem"><a href="#">Design</a></li>
        <li class="subitem"><a href="#">Development</a></li>
        <li class="subitem"><a href="#">SEO</a></li>
        <li class="subitem"><a href="#">Copywriting</a></li>
      </ul>
    </li>

    <li class="item has-submenu">
      <a tabindex="0" href="#">Manifestări</a>
      <ul class="submenu">
        <li class="subitem"><a href="#">Design</a></li>
        <li class="subitem"><a href="#">Development</a></li>
        <li class="subitem"><a href="#">SEO</a></li>
        <li class="subitem"><a href="#">Copywriting</a></li>
      </ul>
    </li>

    </li>
    <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
  </ul>
</nav>

        <div class="container">
            @yield('content')
        </div>

        <script src="{{ asset('js/navbar.js') }}"></script>

    </body>
</html>