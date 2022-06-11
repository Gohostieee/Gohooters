console.log('running')
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.get('/api/accounts', (req,res)=>{
	console.log(res)
	switch(req.query['request']){
		case "login":



		break;
		case "signup":
			console.log('hot it')
			if(!/^[a-zA-Z]{7}$/.exec(req.query['password'])){ 	
				res.send({"error-code":400,"reason":"password too short"})
			}
		break;
	}
	res.send({"error-code":"400","reason":"idek"})

})

app.listen(3001, ()=> console.log('listening....'));

