<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>National Charters - Plane Charter Services</title>
    <script src="styles.js"></script>
    <link rel="stylesheet" href="process_form.css">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
</head>
<body>
    <header>
        
        <div>
            <h1>National Charters</h1>
            <p>All Needs  Aircraft Chartering</p>    
        </div>
        <div>
            <img class="logo" src="national.png" alt="logo">
        </div>
    </header>
    
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li class="services"><a href="#">Services</a></li>
            <li class="fleet"><a href="#">Fleet</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><button id="theme-button">THEME</button></li>
        </ul>
    </nav>

    <!-- Inside the .container div, replace the "About Me" section with the contact form -->
<div class="container">
    <h1>Your Message to Us</h1>
    <br>
<?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Retrieve form data
        $name = $_POST["name"];
        $email = $_POST["email"];
        $aircraft = $_POST["aircraft"];
        $services = isset($_POST["services"]) ? implode(', ', $_POST["services"]) : "None selected";
        $passengers = $_POST["passengers"];

        // Display submitted data
        echo "<p><strong>Name:</strong> $name</p>";
        echo "<p><strong>Email Address:</strong> $email</p>";
        echo "<p><strong>Type of Aircraft:</strong> $aircraft</p>";
        echo "<p><strong>Types of Services:</strong> $services</p>";
        echo "<p><strong>Number of Passengers:</strong> $passengers</p>";
    } else {
        echo "<p>No data submitted.</p>";
    }
    ?>
    <br>
    <p>Our team will reach out to you by with aircraft and scheduling options as soon as possible.</p>
</div>

    <footer>
    &copy; 2023 National Charters | All Rights Reserved
</footer>
</body>
