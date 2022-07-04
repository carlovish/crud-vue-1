import { startConnection } from './database';
import app from "./app";

startConnection();

app.listen(3000);
console.log("Servidor en el puerto 3000");