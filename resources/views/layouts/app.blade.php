<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="icon" href="{{ asset('images/bebe.jpg') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>MJ & LARIZE SYSTEM</title>

    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="MJ & LARIZE">
    <link rel="apple-touch-icon" href="{{ asset('images/bebe.jpg') }}">

    <link rel="manifest" href="{{ asset('manifest.json') }}">
</head>
<body>
    <div id="app"></div>
    <script src="{{asset('js/app.js')}}"></script>

    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register("/firebase-messaging-sw.js")
            .then(reg => console.log('Main PWA & FCM Service Worker Active:', reg.scope))
            .catch(err => console.error('Service Worker registration failed:', err));
    }
    </script>
</body>
</html>