
import dotenv from 'dotenv';
dotenv.config({path: './env/.env'});
import express from 'express'
import session from 'express-session'
import ejs from 'ejs'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import indexRoutes from './routes/index.js'
import mysql2 from 'mysql2';

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url)) //Forma de obtener la ruta absoluta. Por mas que movamos views de carpeta en carpeta siempre va a estar de la forma correcta.

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(join(__dirname,'public')))

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(
	session({
		secret: 'secret',
		resave: true,
		saveUninitializad: true,
		cookie: {
			expires: new Date(Date.now() +  518400000),
			maxAge: 518400000
		}
	})
)
// const checkSessionMiddleware = (req, res, next) => {
//     // Verifica si esta logueado existe en la sesión (o donde lo almacenes)
//     if (req.session.logueado) {
//         next(); // Si existe, continúa con la siguiente función de middleware o ruta
//     } else {
//         // Si no existe, redirige a la ruta '/login'
// 		if(req.path == '/login' || req.path == '/cerrarSesion'){
// 			next();
// 		}else{
// 			res.render('inicio_sesion.ejs', {"x": false });

// 		}
// 	}
// };
// // Usa el middleware en todas las rutas
// app.use(checkSessionMiddleware);

app.use(indexRoutes)
const puerto = process.env.PORT || 3000;
app.listen(puerto, ()=>{
    console.log('Server is listening on port: '+puerto);
}) //Que la aplicación esté escuchando en el puerto asignado



import connection from './database/db.js'

import Quagga from 'quagga';




// function mifuncion(){
//     connection.query('SELECT * FROM usuarios', (error,usuarios) =>{
//         if(error){
//             console.log(error);
//         }else{
//             console.log("Base de datos conectada");
//         }
//     });
// };
// mifuncion();



//NO SE POR QUE ESTA TODO ESTO ACÁ. CREO QUE ES EL MISMO CÓDIGO DE ARRIBA. HAY QUE VERIFICAR Y BORRAR !!!!!!


// //INDEX.JS SE HACE TODA LA COMUNICACIÓN ENTRE PAGINAS
// import dotenv from 'dotenv';
// dotenv.config({path: './env/.env'});
// import express from 'express'
// import session from 'express-session'
// import ejs from 'ejs'
// import {dirname, join} from 'path'
// import {fileURLToPath} from 'url'
// import indexRoutes from './routes/index.js'
// import mysql2 from 'mysql2';


// const app = express()
// const __dirname = dirname(fileURLToPath(import.meta.url)) //Forma de obtener la ruta absoluta. Por mas que movamos views de carpeta en carpeta siempre va a estar de la forma correcta.

// app.set('views', join(__dirname, 'views'))
// app.set('view engine', 'ejs')

// app.use(express.static(join(__dirname,'public')))

// app.use(express.urlencoded({extended:false}));
// app.use(express.json());


// app.use(
// 	session({
// 		secret: 'secret',
// 		resave: true,
// 		saveUninitializad: true,
// 		cookie: {
// 			expires: new Date(Date.now() +  518400000),
// 			maxAge: 518400000
// 		}
// 	})
// )
// import connection from './database/db.js'

// app.use(indexRoutes)

// const puerto = process.env.PORT || 3000;
// app.listen(puerto, ()=>{
//     console.log('Server is listening on port: '+puerto);
// }) //Que la aplicación esté escuchando en el puerto asignado





// // PARA VER SI ESTÁ CONECTADA LA BASE DE DATOS
// // function mifuncion(){
// //     connection.query('SELECT * FROM usuarios', (error,usuarios) =>{
// //         if(error){
// //             console.log(error);
// //         }else{
// //             console.log("Base de datos conectada");
// //         }
// //     });
// // };
// // mifuncion();

// import login from './controllers/login.js'
// app.post('/login', login);

///////////////////////////////////////////////////////////////////////
