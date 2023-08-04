#!/usr/bin/node
const headerElement = document.querySelector('header');
<html>
    <head>
        <title>Change Header Text Color</title>
    </head>
    <body>
        <header>This is the header</header>

        <script>
            document.addEventListener('DomContentLoaded', function() {
            headerElement = document.querySelector('header');
            headerElement.style.color = '#FF0000';
        </script>
    </body>
</html>