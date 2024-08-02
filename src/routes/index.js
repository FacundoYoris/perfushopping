import { Router } from 'express'
import connection from '../database/db.js'
const router = Router()


router.get('/', (req, res) => { 
    connection.query('SELECT produ FROM producto', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('novedades.ejs', {results: results});
        }

    })
})
router.get('/novedades', (req, res) => { 
    connection.query('SELECT produ FROM producto', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('novedades.ejs', {results: results});
        }

    })
})
router.get('/consultar-producto', (req, res) => {
    res.render('consultar_producto.ejs');

})

//Se importa el archivo login.js de controllers para verificar en su función login si el usuario tiene un usuario y contraseña válido
// import login from '../controllers/login.js'
// router.post('/login', login.login);
//Se ejecuta en login.js la función logout, la cual cierra la sesión actual
// router.get('/cerrarSesion', login.logout);

// import save from '../controllers/gestion_orden_trabajo.js';
// import saveItem from '../controllers/gestion_stock.js';
// import activo from '../controllers/gestion_activo.js';
// import tercero from '../controllers/gestion_tercero.js';
// import actualizarPorFechas from '../controllers/actualizarTabla.js';
// router.post('/actualizarTablaFechas-Gestion', actualizarPorFechas.rangoFechasGestion);//Verificar si esto esta en uso o no


export default router

