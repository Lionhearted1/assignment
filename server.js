const express=require("express")
const app=express()
const authourRouter=require('./router/author')
const blogRouter=require('./router/blog')

app.use(express.json())

app.use('/author',authourRouter)
app.use('/blog',blogRouter)

app.listen(3000,()=>{
    console.log("Running at port 3000");
})