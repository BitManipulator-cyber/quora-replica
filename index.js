const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'))
app.use(express.json());

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));

app.use(express.static(path.join(__dirname , "/public")));

let posts = [
    {
        id : uuidv4(),
        username : "coderflow",
        content : "I love coding",
    },
    {
        id : uuidv4(),
        username : "Aaditya Jagtap",
        content :"Eat. Sleep. Code. Repeat.",
    },
    {
        id : uuidv4(),
        username : "Sam Altman",
        content :"ChatGPT is my flex",
    }
]

app.get('/posts/new' , (req , res)=>{
    res.render("new.ejs");
})

app.post('/posts' , (req,res)=>{
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({id , username , content});
    res.redirect("/posts");
})

app.get('/posts/:id' , (req , res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    console.log(post);
    //res.send(`ID exists :${id}`);
    res.render("show.ejs" , {post});
})

app.get('/posts' , (req , res)=>{
    console.log("GET request successfull");
    res.render("index.ejs" , { posts });
})

app.patch('/posts/:id' , (req , res)=>{
    let {id} = req.params;
    //console.log(id);
    let newContent = req.body.content;
    let post = posts.find((p)=>id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts"); 
})

app.get('/posts/:id/edit' ,(req , res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    console.log(post);
    res.render("edit.ejs" , {post});
})

app.delete('/posts/:id' , (req , res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts"); 
})

app.listen(port , ()=>{
    console.log(`App is listening at port :${port}`);
})