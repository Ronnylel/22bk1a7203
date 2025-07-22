const express= require("express")
const cors= require("cors")

app=express()
app.use(express.json())
app.use(cors())

app.listen(3000,()=>{
    console.log("Server is running");
})

const shortened="";
const origurl="";

await app.post('/',(req,res)=>{
    const {url,validity,shortcode}=req.body;
    origurl=url;
    if(shortcode != null){
        shortened=shortcode;
    }
    else{
        const randomString = Math.random().toString(36).substring(2, 7);
        shortened=randomString;
    }
    shortened="http://localhost:3000/"+shortened;
    res.json("Success")
})


app.post('/out',(req,res)=>{
    const [msg]=req.body;
    res.json(url,shortened)
})