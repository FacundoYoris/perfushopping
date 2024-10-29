
import mysql2 from 'mysql2';
const connection = mysql2.createPool({
	host: 'perfushopping.sytes.net',
	user: 'Javiery',
	password: 'Jry73Ngf75',
	database: 'perfushopping'
});
export default connection;


