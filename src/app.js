const server=require("express");
const app=server();



// app.use((req,res)=>{
//     res.send("helloworld this is you");
// });
app.use("/",(req,res)=>{
    res.send("saikiran hello how are");
});
app.use("/test",(req,res)=>{
    res.send("test");
});
app.use("/hello",(req,res)=>{
    res.send("hello");
});

app.listen(7777, ()=>{
    console.log("hii saikiran")
});
