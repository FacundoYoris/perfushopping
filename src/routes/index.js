import { Router } from 'express'
import connection from '../database/db.js'
const router = Router()


router.get('/', (req, res) => { 
    connection.query('SELECT * FROM producto', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('consultar_producto.ejs', {results: results});
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
    const barcode = req.query.barcode || '';

    const sqlQuery = `
        SELECT 
            gustos.codscan AS codigo,            
            producto.produ AS descripcion,       
            gustos.fecha AS fecha,               
            gustos.nomgusto AS variedad,         
            ROUND(producto.precio + (producto.precio * ivaprodu.tiva / 100), 2) AS precio 
        FROM 
            producto
        LEFT JOIN 
            gustos ON producto.idprodu = gustos.idprodu 
        INNER JOIN 
            ivaprodu ON producto.iva = ivaprodu.codivaprodu 
        ${barcode ? `WHERE gustos.codscan LIKE ?` : ''}  -- Coincidencia parcial con LIKE
    `;

    const queryValues = barcode ? [`%${barcode}%`] : [];

    connection.query(sqlQuery, queryValues, (error, results) => {
        if (error) {
            console.error("Error en la consulta:", error);
            res.status(500).json({ error: "Error en la consulta de la base de datos" });
        } else {
            res.json(results); // Envía los resultados como JSON
        }
    });
});

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

