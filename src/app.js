import express from "express"; //es un modulo para creear un servidor
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from 'morgan';

const app = express();

//sintaxis para el handler
app.set('views', path.join(__dirname, 'views'));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan('dev'));

// se añade un nuevo middlewares
app.use(express.urlencoded({extended: false}));

//Routes
app.use(indexRoutes);

// carpeta publico

app.use(express.static(path.join(__dirname, "public")));

export default app;
