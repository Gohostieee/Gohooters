console.log('running')
import express from 'express' 
const app = express();
import cors from 'cors'
import mysql from 'mysql'
import 'dotenv/config'
import accPost,{hash256,utf8Enc,utf8Dec} from './genFuncs.js'
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


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors()) 
app.get('/api/accounts', (req,res)=>{
	
 		accPost(con,req.query,(x)=>{
 			res.send(x)
 		})

})

app.post('/user/update', (req,res)=>{
  const query = con.format("update userLogins set about = ? where name = ? and pass = ?",[utf8Enc(req.body.newInfo),req.body.username,hash256(req.body.password)])
  con.query(query,(error,response)=>{
        console.log(error,response,query)
        console.log(response['changedRows'])
        if(response['affectedRows'] && response['changedRows']){
          res.send({"update":"passed"});
          return;
        }
        if(response['affectedRows'] && !response['changedRows']){
          res.send({"update":"unchanged"}) 
          return;
        }
        if(!response['affectedRows']){
          res.send({"update":"userNotFound"})
          return;
        }
  })

})
//Yada Yada Yada, I have written this a million times(Fucking up the database  I gotta rewrite this😔, I'm the creator/ ONLY ENGINEER.
app.get('/user/getInfo/Master', (req,res)=>{
    const query = con.format("select * from userLogins where name = ? and pass = ?",[req.query['user'],hash256(req.query['pass'])])
    con.query(query, (error,response)=>{  
      response[0]['about']=utf8Dec(response[0]['about']);
      res.send(response[0]); 
    })
}) 
app.get('/user/folders/get',(req,res)=>{
  const query = con.format("select * from userFolders where owner = ?",req.query['owner'])
  con.query(query,(error, response)=>{
    res.send(response)
  })
})

app.listen(3001, ()=> console.log('listening....'));

