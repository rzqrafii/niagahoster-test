<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    {{-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> --}}
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">


</head>

<body>
    <div id="app">
        <div class="container">
            <navbar></navbar>
            <hero></hero>
            <tools></tools>
            <paket></paket>
            <limit></limit>
            <include-package></include-package>
            <support></support>
            <modul></modul>
            <support-footer></support-footer>
            <like></like>
            <help></help>
            <footer-content></footer-content>

        </div>


    </div>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>