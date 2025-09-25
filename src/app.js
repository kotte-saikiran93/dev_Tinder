const server=require("express");
const app=server();


app.get("/user",(req,res)=>{
    res.send({firstname:
        "saikiran",
        lastname:"kotte"
    });
});


app.post("/user",(req,res)=>{
    res.send("data posted successfully");
});


app.delete("/user",(req,res)=>{
    res.send("data deleted successfully");
});


// app.use("/hello",(req,res)=>{
//     res.send("hello");
// });


// app.use((req,res)=>{
//     res.send("helloworld this is you");
// });


// app.use("/",(req,res)=>{
//     res.send("saikiran hello how ");
// });


// app.use("/test",(req,res)=>{

//     res.send("test");
// });


app.listen(7777, ()=>{
    console.log("hii saikiran")
});
