<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista de Tareas</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header class="header">
      <h1 class="title">Lista de Tareas</h1>
    </header>

    <main class="container">
      <div class="task-list" id="taskList"></div>

      <form
        class="task-form"
        id="taskForm"
        method="POST"
        action="<?php echo $_SERVER['PHP_SELF']; ?>"
      >
        <input
          type="text"
          name="task_description"
          id="taskDescription"
          placeholder="Descripción de la tarea"
          required
        />
        <button type="submit">Agregar Tarea</button>
      </form>
    </main>

  </body>
</html>
