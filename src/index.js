import app from "./app.js"
import { PORT } from "./config.js"
import { pool } from "./db.js" // importa tu pool

// Test de conexión MySQL al iniciar el servidor
(async () => {
  try {
    await pool.query("SELECT 1");
    console.log("Conexión exitosa a MySQL 🚀");
  } catch (error) {
    console.error("Error al conectar a MySQL:", error);
  }
})();

app.listen(PORT)
console.log("server is running on port ", PORT)
