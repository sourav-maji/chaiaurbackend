// console.log("Chai aur code");
// import env files
require('dotenv').config()

const express = require("express")
const app = express()
const gitHunData = {
    "login": "sourav-maji",
    "id": 68387255,
    "node_id": "MDQ6VXNlcjY4Mzg3MjU1",
    "avatar_url": "https://avatars.githubusercontent.com/u/68387255?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sourav-maji",
    "html_url": "https://github.com/sourav-maji",
    "followers_url": "https://api.github.com/users/sourav-maji/followers",
    "following_url": "https://api.github.com/users/sourav-maji/following{/other_user}",
    "gists_url": "https://api.github.com/users/sourav-maji/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sourav-maji/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sourav-maji/subscriptions",
    "organizations_url": "https://api.github.com/users/sourav-maji/orgs",
    "repos_url": "https://api.github.com/users/sourav-maji/repos",
    "events_url": "https://api.github.com/users/sourav-maji/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sourav-maji/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sourav Maji",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2020-07-16T14:29:15Z",
    "updated_at": "2023-09-19T08:22:24Z"
  }


app.get("/", (req,res)=>{
    res.send("Hello World!!")
})

app.get("/tweeter", (req,res) =>{
    res.send("hiteshdotcom")
})

app.get("/login" , (req,res) =>{
    res.send("<h1>Please login to Chai aur code </h1>")
})

app.get("/youtube" , (req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.get("/github" , (req,res)=>{
    res.json(gitHunData)
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`,);
})