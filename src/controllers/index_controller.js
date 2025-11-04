import {pool} from "../db.js"

export let ping= async(req,res)=> {
let [result]=await pool.query('select "Pong" as result')
res.json(result[0])
}