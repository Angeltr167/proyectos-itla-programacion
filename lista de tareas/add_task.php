<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["task_description"])) {
    
    header("Location: index.php");
    exit();
}
?>
