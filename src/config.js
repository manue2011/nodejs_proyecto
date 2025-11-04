export let PORT = process.env.PORT || 3000;

// --- AQUI ESTÁ LA MAGIA (El "Traductor") ---
export let DB_USER = process.env.MYSQLUSER || "root";
export let DB_HOST = process.env.MYSQLHOST || "localhost";
export let DB_PASSWORD = process.env.MYSQLPASSWORD || "root";
export let DB_PORT = process.env.MYSQLPORT || 3306;

// --- ¡¡ESTA ES LA LÍNEA MÁS IMPORTANTE!! ---
// Forzamos a la app a usar la base de datos que TÚ creaste en DBeaver,
// ignorando la que da Railway por defecto ("railway").
// (Asumo que el nombre no tiene espacios).
export let DB_DATABASE = "empresas_telefonia";