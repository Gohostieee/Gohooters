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
function emailCheck(email){
	if( !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
		return 1;
	}
	return 0;
}
async function accValCheck(y,con,creds){
	for(let x = 0;x<y.length;x++){
		if(y[x]['error-code']===400){
			return 1;
		}


				
	}
	const query = con.format("SELECT * FROM userLogins WHERE name = ? or email = ?",creds)
	console.log(query)
	await con.query(query, function(err,results){
		if(results.length>0){
			return 2
		}else{
			return 0;
		}
	});



}


export function createAcc(req,con){
	let response = []
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
					console.log("hm?")
					response[1]={"error-code":400,"reason":"userAlphaNum"}
				break
				case 1:
					response[1]={"error-code":400,"reason":"userLong"}
				break;
				case 3:
					response[1]={"error-code":400,"reason":"userShort"}

				break;
				case 0:
					response[1]={"error-code":200,"reason":"userSuccess"}


				break;

			}
			switch(emailCheck((req.query['email']))){
				case 1:
					response[2]={"error-code":400,"reason":"emailError"}
				break;
				case 0:
					response[2]={"error-code":200,"reason":"emailSuccess"}
				break;

 
			}
			/*
			switch(accValCheck(response,con,[req.query['username'],req.query['email']])){
			}
			if (!){
				con.query("INSERT INTO userLogins (name, pass, email) VALUES ?",req.query['username'],req.query['password'],req.query['email'])
			}
			*/
			return response
}