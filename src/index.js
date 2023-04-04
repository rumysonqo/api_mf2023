import express from 'express'
import rutas_api from './rutas/rutas_api.js'

const app=express()
app.use(rutas_api)

app.listen(3000);

console.log('servidor ejecutandose en el puerto 3000');