
import mysql2 from 'mysql2';
const connection = mysql2.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'perfushopping'
});
export default connection;


