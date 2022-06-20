console.log('running')
import express from 'express' 
const app = express();
import cors from 'cors'
import mysql from 'mysql'
import 'dotenv/config'
import {createAcc,login} from './mySQLFuncs/genFuncs.js'

console.log({
	host: process.env.host,
  user: 'root',
  password: process.env.password,
  database: process.env.database,
})

const con = mysql.createConnection({  
  host: process.env.host,
  user: 'root',
  password: process.env.password,
  database: process.env.database,
 	
});

await con.connect(function(err) {
  if (err) throw err; 
  console.log("Connected!");
});



app.use(cors()) 
app.get('/api/accounts', (req,res)=>{
	console.log(req.query) 
	switch(req.query['request']){
		case "login":
			login(req.query['username'],req.query['password'],con,function(result){
				console.log(result,"mom")
				if(!result){res.send({"error-code":200,"status":"approved"})}
				else{res.send({"error-code":400,"status":"disapproved"})}
			})

		break;
		case "signup":
			const response = createAcc(req,con,function(result){
			console.log(result[0],"huh")  
			res.send(result[0])


			})

			break;
			default:
				res.send({"error-code":"400","reason":"idek"})
					
			break; 
	}
 

})

app.listen(3001, ()=> console.log('listening....'));

