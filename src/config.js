import { config} from "dotenv";

config()

export let PORT=process.env.PORT||3000
export let DB_USER=process.env.DB_USER||"root"
export let DB_HOST=process.env.DB_HOST||"localhost"
export let DB_DATABASE=process.env.DB_DATABASE||"railway"   
export let DB_PASSWORD=process.env.DB_PASSWORD||"root"
export let DB_PORT=process.env.DB_PORT||3306


