import { pool } from "../db.js";

// Log global para errores no capturados
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

// Obtener todas las empresas
export let getempresas = async (req, res) => {
  try {
    let [rows] = await pool.query("SELECT * FROM empresa");
    res.json(rows);
  } catch (error) {
    console.error(error); // Log de error
    return res.status(500).json({
      message: "algo salio mal"
    });
  }
}

// Obtener una empresa por ID
export let getempresa = async (req, res) => {
  try {
    let [rows] = await pool.query("SELECT * FROM empresa WHERE id_empresa = ?", [req.params.id_empresa]);
    if (rows.length <= 0) return res.status(404).json({
      message: "empresa no encontrada"
    });
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "algo salio mal"
    });
  }
}

// Crear una empresa
export let createempresas = async (req, res) => {
  try {
    let { id_empresa, nombre, direcccion, pais, ingrsos_anuales } = req.body;
    let [rows] = await pool.query(
      "INSERT INTO empresa (id_empresa, nombre, direcccion, pais, ingrsos_anuales) VALUES (?, ?, ?, ?, ?)",
      [id_empresa, nombre, direcccion, pais, ingrsos_anuales]
    );
    res.send({
      id: id_empresa,
      nombre,
      direcccion,
      pais,
      ingrsos_anuales,
      rows
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "algo salio mal"
    });
  }
}

// Actualizar una empresa
export let updateempresas = async (req, res) => {
  try {
    let { id_empresa } = req.params;
    let { nombre, direcccion, pais, ingrsos_anuales } = req.body;
    let [result] = await pool.query(
      "UPDATE empresa SET nombre=IFNULL(?,nombre), direcccion=IFNULL(?,direcccion), pais=IFNULL(?,pais), ingrsos_anuales=IFNULL(?,ingrsos_anuales) WHERE id_empresa=?",
      [nombre, direcccion, pais, ingrsos_anuales, id_empresa]
    );
    console.log(result);
    if (result.affectedRows === 0) return res.status(404).json({
      message: "empresa no encontrada"
    });
    let [rows] = await pool.query("SELECT * FROM empresa WHERE id_empresa = ?", [id_empresa]);
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "algo salio mal"
    });
  }
}

// Eliminar una empresa
export let deleteempresas = async (req, res) => {
  try {
    let [result] = await pool.query(
      "DELETE FROM empresa WHERE id_empresa = ?", [req.params.id_empresa]
    );
    if (result.affectedRows <= 0) return res.status(404).json({
      message: "empresa no encontrada"
    });
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "algo salio mal"
    });
  }
}
