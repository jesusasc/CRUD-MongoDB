import Task from "../models/Task"; //este es la ruta de los modelos de la tarea

//* Contiene todos los controles de las funciones de las rutas

export const renderTask = async (req, res) => {
  //*mastrar la lista de la base de datos en el index.hbs
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  //valiadar si hay un duplicado de tareas
  try {
    //obtiene el objeto de las cajas de texto
    const task = Task(req.body);
    await task.save();
    //se redirecciona a la pagina html.hbs al oprimir el Add
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  try {
    //consyulta si existe una tarea
    const task = await Task.findById(req.params.id).lean();
    // despues lo renderisa a la pagina de edit
    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};

// ruta de la actualizacion de una tarea
export const editTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect("/");
};

export const taskToggleDone = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  task.done = !task.done;

  await task.save();

  res.redirect("/");
};
