<?php
$tasks = array(
    array("description" => "Hacer la tarea de programación", "completed" => false),
    array("description" => "Comprar víveres", "completed" => true),
    array("description" => "Ir al gimnasio", "completed" => false)
);

foreach ($tasks as $key => $task) {
    echo '<div class="task">';
    echo '<span class="task-description">' . $task["description"] . '</span>';
    if (!$task["completed"]) {
        echo '<a href="edit_task.php?key='.$key.'" class="edit-btn">Editar</a>';
        echo '<a href="complete_task.php?key='.$key.'" class="complete-btn">Completar</a>';
    }
    echo '<a href="delete_task.php?key='.$key.'" class="delete-btn">Eliminar</a>';
    echo '</div>';
}
?>
