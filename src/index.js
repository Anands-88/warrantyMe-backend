const express = require("express")

const articles = require("./Controller/article")

const app = express()
app.use(express.json())
app.use("/article",articles)


app.listen(3000,()=>{
      console.log("Connected Port number",3000)
})
