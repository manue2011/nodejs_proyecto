import express from"express"
import empresaRoutes from "./routes/empresa_routes.js"
import indexroutes from "./routes/index_routers.js"


let app=express()

app.use(express.json())
app.use(indexroutes)
app.use("/api",empresaRoutes)
app.use((req,res,next)=>{
    res.status(404).json({
        message:"endpoint not found"
    })
})
  
export default app;