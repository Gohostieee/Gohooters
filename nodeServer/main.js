console.log('running')
const express = require('express');
const app = express();
const cors = require('cors')
const mysql = require('mysql');
require('dotenv').config()

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


function passCheck(pass) {
    console.log(pass.length)

    if(!/^\w{6,}$/.test(pass)){
        return 1;
    }else if (!/\d/.test(pass)){
        return 2;
    }else if (!/[A-Z]/.test(pass)){
        return 3;
    }else if (!/[a-z]/.test(pass)) {
        return 4;
    }else{
        return 0;
    }
}
function userCheck(user){
	if(!/^\w{1,}$/.test(user)){
		console.log("huh")
		return 3;
	
	}
	
	else if(!/^\w+[a-zA-Z0-9_]$/.test(user)){
		
		return 2;

	}
	
	else if(!/^\w{1,10}$/.test(user)){
		
		return 1;
	
	}
	
	return 0;	
}

app.use(cors())
app.get('/api/accounts', (req,res)=>{
	let response=[]
	console.log(req.query) 
	switch(req.query['request']){
		case "login":



		break;
		case "signup":
			switch(passCheck(req.query['password'])){
				case 1:
					response[0]={"error-code":400,"reason":"passShort"}


				break;
				case 2:
					response[0]={"error-code":400,"reason":"passNumbers"}


				break;

				case 3:
					response[0]={"error-code":400,"reason":"passCapital"}

				break;
				case 4: 
					response[0]={"error-code":400,"reason":"passLowercase"}
				break;
				case 0:
					response[0]={"error-code":200,"reason":"passSuccess"}

				break;
				
			}
			switch(userCheck((req.query['username']))){
				case 2:

					response[1]={"error-code":400,"reason":"userAlphaNum"}
				break
				case 1:
					response[1]={"error-code":400,"reason":"userLong"}
				break;
				case 3:
					response[1]={"error-code":400,"reason":"userShort"}

				break;
				case 0:
					response[1]={"error-code":400,"reason":"userSuccess"}


				break;

			}
			res.send(response)
			break;
			default:
				res.send({"error-code":"400","reason":"idek"})
					
			break;
	}


})

app.listen(3001, ()=> console.log('listening....'));

