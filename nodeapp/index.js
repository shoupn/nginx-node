const app = require("express")();
const appid = process.env.APPID;

app.get("/", (req,res) => 
res.send(`appid: ${appid} home page: says hello!`))

app.get("/app1", (req,res) => 
res.send(`appid: ${appid} app1 page: says hello!`))
 
app.listen(9999, ()=>console.log(`${appid} is listening on 9999`))
