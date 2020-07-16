const cron = require("node-cron")
const express = require("express")
const fs = require("fs")

app = express()

cron.schedule("* * * * *", () => {
  console.log("---------------------")
  console.log("Running a Cron Job")
})

app.listen(3128)