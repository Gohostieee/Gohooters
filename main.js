// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage,ref,getDownloadURL } from "firebase/storage";
import { doc, getDoc,getDocs,getFirestore, collection, query, where,updateDoc,setDoc } from "firebase/firestore";
import {hash256} from "./genFuncs.js"
import express from 'express' 
import cors from 'cors'
import bodyParser from "body-parser"
import 'dotenv/config'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp); 
const db = getFirestore(firebaseApp)
const userRef = collection(db, "users");
const app = express();
app.use(cors())  
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/api/accounts/login', async (req,res)=>{
  let docSnap = query(userRef,where("name","==",req.query['username'], "and", "pass", "==", hash256(req.query['password'])))

  docSnap = await getDocs(docSnap)   
  docSnap.forEach((doc)=>{
  	if(doc.exists()){
  		res.send(true)
  	}else{
  		res.send(false)

  	}
  	return;  
  })
})
app.get('/api/accounts/signup', async (req,res)=>{
  let docSnap = query(userRef,where("name","==",req.query['username']))
  docSnap = await getDocs(docSnap)   
  let userCount = await getDoc(doc(db,"users","userData"))
  userCount = userCount.data()['count']+1
  console.log(userCount)
  const userCountRef = doc(db, "users", "userData");
  console.log({name:req.query['username'],pass:hash256(req.query['password']),type:"client",pfp:"gawd.jpg",email:req.query['email']})
  if(docSnap.empty){
  	await setDoc(doc(db,"users",userCount.toString()),{name:req.query['username'],pass:hash256(req.query['password']),type:"client",pfp:"gawd.jpg",email:req.query['email']})
  	await updateDoc(userCountRef,{
  		count:userCount
  	})
  	res.send(true)
  }else{
  	res.send("userTaken")
  }
  
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
