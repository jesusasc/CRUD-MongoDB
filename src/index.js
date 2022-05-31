import app from "./app";
import "./database";
import {PORT} from "./config"

//es el arranque de la aplicacion y la difinición en que puerto va abrir
app.listen(PORT);
console.log("Server on port", PORT);
