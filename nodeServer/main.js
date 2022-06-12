console.log('running')
import express from 'express'
const app = express();
import cors from 'cors'
import mysql from 'mysql'
import 'dotenv/config'
import {createAcc} from './mySQLFuncs/genFuncs.js'
const con = mysql.createConnection({  
  host: process.env.host,
  user: 'root',
  password: process.env.password,
  database: process.env.database,
 	
});

con.connect(function(err) {
  if (err) throw err; 
  console.log("Connected!");
});



app.use(cors())
app.get('/api/accounts', (req,res)=>{
	console.log(req.query) 
	switch(req.query['request']){
		case "login":



		break;
		case "signup":
			const response = createAcc(req,con)
			res.send(response)

			break;
			default:
				res.send({"error-code":"400","reason":"idek"})
					
			break;
	}


})

app.listen(3001, ()=> console.log('listening....'));

