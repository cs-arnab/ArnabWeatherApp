const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const port=3000 || process.env.PORT
//public static path
const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partial_path=path.join(__dirname,"../templates/partials")
//linking
app.set("views engine","hbs")
app.use(express.static(static_path))
app.set("views",template_path)
hbs.registerPartials(partial_path)

//routing

app.get("",(req,res)=>{
    res.render('index.hbs')
})
app.get("/about",(req,res)=>{
    res.render('about.hbs')
})
app.get("/weather",(req,res)=>{
    res.render("weather.hbs")
})
app.get("*",(req,res)=>{
    res.render("404.hbs",{
        errorMsg:'Oops ! Page Not Found'
    })
}) 

app.listen(port,()=>{
    console.log(`server is on at port ${port} in weather app`)
})

