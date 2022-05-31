import { Router } from "express";

//*Todo: Se importan las rutas del render
import {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/task.controller";

const router = Router();
router.get("/", renderTask); // se renderisa a la pagina principal

//Se crea una ruta para Post
router.post("/tasks/add", createTask);

//Se agrega una nueva ruta de la pagina editar
router.get("/tasks/:id/edit", renderTaskEdit);

//ruta para el update
router.post("/tasks/:id/edit", editTask);

// Ruta para el delete
router.get("/tasks/:id/delete", deleteTask);

//rutra del toggleDone
router.get("/tasks/:id/toggleDone", taskToggleDone);

export default router;
