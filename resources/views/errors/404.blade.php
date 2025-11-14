<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Page Not Found - {{ config('app.name', 'Laravel') }}</title>
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        html { background-color: oklch(0.145 0 0); }
        body { font-family: 'Instrument Sans', sans-serif; }
    </style>
</head>
<body class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <div class="max-w-md w-full text-center">
            <div class="mb-8">
                <h1 class="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                    404
                </h1>
                <h2 class="text-3xl font-bold mb-4">
                    Page Not Found
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ url('/') }}" class="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
                    Go Home
                </a>
                <button onclick="window.history.back()" class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Go Back
                </button>
            </div>
        </div>
    </div>
</body>
</html>