<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="Styles/Login.css">
</head>
<body>
<div class="login-container">
    <h2>Login</h2>
    <form action="Backend/process_login.php" method="POST">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
        <?php
        if (isset($_GET['error'])) {
            echo '<p class="error-message">Invalid username or password.</p>';
        }
        ?>
    </form>
</div>
</body>
</html>
