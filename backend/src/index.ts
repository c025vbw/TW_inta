import express, { query } from "express"
import { DBHandler } from "./infrastructure/database"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})
app.listen(80, () => {
  console.log("Start on port 80.")
})
app.post("/Articles", async (req, res) => {//投稿 post
  console.log("new")
  var queryList = req.url.slice(11, req.url.length).split('&')
  var id = queryList[0].split('=')[1]
  var type = queryList[1].split('=')[1]
  var body
  var send = []
  for(var i = 2; i < queryList.length; i++){
    var splited = queryList[i].split('=')
    switch(type){
      case "swim":
        switch(splited[0]){
          case "genre": send[0] = splited[1]; break;
          case "distance": send[1] = splited[1]; break;
          case "time": send[2] = splited[1]; break;
          case "camera": send[3] = splited[1]; break;
          case "water": send[4] = splited[1]; break;
          case "scene": send[5] = splited[1]; break;
        }
        break;
      case "goods":
        switch(splited[0]){
          case "goggle": send[0] = splited[1]; break;
          case "kickBoard": send[1] = splited[1]; break;
          case "practiceWear": send[2] = splited[1]; break;
          case "fastWear": send[3] = splited[1]; break;
          case "tracksuit": send[4] = splited[1]; break;
          case "pullBuoy": send[5] = splited[1]; break;
          case "paddle": send[6] = splited[1]; break;
          case "tube": send[7] = splited[1]; break;
          case "medicineBall": send[8] = splited[1]; break;
          case "mat": send[9] = splited[1]; break;

        }
        break;
      case "training":
        switch(splited[0]){
          case "genre": send[0] = splited[1]; break;
        }
        break;
    }
    if(splited[0] = 'body') body = queryList[queryList.length - 1].split('=')[1]
  }
  const handler = await DBHandler.init()
  var data = await handler.collection('user').findOne({user: id}) /*検索し、投稿者のarcicleCountを獲得する*/
  var count = data?.articleCount + 1
  handler.collection('user').updateOne({user: id}, {$set:{articleCount: count}})
  switch(type){
    case "swim": handler.collection('article').insertOne({user: id, number: count, types: type, genres: send[0], distances: send[1], times: send[2], cameras: send[3], waters: send[4], scenes: send[5], bodies: body}); break;
    case "goods": handler.collection('article').insertOne({user: id, number: count, types: type, goggles: send[0], kickBoards: send[1], practiceWears: send[2], fastWears: send[3], tracksuits: send[4], pulllBuoies: send[5], paddles: send[6], tubes: send[7], medicineBalls: send[8], mats: send[9], bodies: body}); break;
    case "training": handler.collection('article').insertOne({user: id, number: count, types: type, genres: send[0], bodies: body}); break;
  }
  res.send(JSON.stringify(true))
})
app.put("/Articles", async (req, res) => {//更新 put
  console.log("update")
  var queryList = req.url.slice(11, req.url.length).split('&')
  var userId = queryList[0].split('=')[1]
  var articleId = Number(queryList[1].split('=')[1])
  const handler = await DBHandler.init()
  const target = await handler.collection('article').findOne({user: userId, number: articleId})
  switch(target?.types){
    case "swim":
      for(var i = 2; i < queryList.length; i++){
        var splited = queryList[i].split('=')
        switch(splited[0]){
          case "genre": ; handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{genres: splited[1]}}); break;
          case "distance": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{distances: splited[1]}}); break;
          case "time": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{times: splited[1]}}); break;
          case "camera": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{cameras: splited[1]}}); break;
          case "water": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{waters: splited[1]}}); break;
          case "scene": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{scenes: splited[1]}}); break;
          case "body": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{bodies: splited[1]}}); break;
        }
      }
      break;
    case "goods":
      for(var i = 2; i < queryList.length; i++){
        var splited = queryList[i].split('=')
        switch(splited[0]){
          case "goggle": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{goggles: splited[1]}}); break;
          case "kickBoard": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{kickBoards: splited[1]}}); break;
          case "practiceWear": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{practiceWears: splited[1]}}); break;
          case "fastWear": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{fastWears: splited[1]}}); break;
          case "tracksuit": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{tracksuits: splited[1]}}); break;
          case "pullBuoy": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{pullBuoies: splited[1]}}); break;
          case "paddle": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{paddles: splited[1]}}); break;
          case "tube": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{tubes: splited[1]}}); break;
          case "medicineBall": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{medicineBalls: splited[1]}}); break;
          case "mat": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{mats: splited[1]}}); break;
          case "body": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{bodies: splited[1]}}); break;
        }
      }
      break;
    case "training":
      for(var i = 2; i < queryList.length; i++){
        var splited = queryList[i].split('=')
        switch(splited[0]){
          case "genre": ; handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{genres: splited[1]}}); break;
          case "body": handler.collection('article').updateOne({user: userId, number: articleId}, {$set:{bodies: splited[1]}}); break;
        }
      }
      break;
  }
  res.send(JSON.stringify(true))
})
app.put("/Articles", async (req, res) => {//取得 get
  console.log("get")
  const handler = await DBHandler.init()
  var queryList = req.url.slice(11, req.url.length).split('&')
  var id = ""
  var type = queryList[0].split('=')[1]
  for(var i = 1; i < queryList.length; i++){
    var splited = queryList[i].split('=')
    switch(splited[0]){
      case "user": id = splited[1]; break;
    }
  }
  const answer = await handler.collection('article').find({user: {$regex: id}, types: {$regex: type}}).toArray()
  res.send(JSON.stringify(answer))
})
app.delete("/Articles", async (req, res) => {//削除 delete
  console.log("delate")
  var queryList = req.url.slice(11, req.url.length).split('&')
  var userId = queryList[0].split('=')[1]
  var articleId = Number(queryList[1].split('=')[1])
  const handler = await DBHandler.init()
  var debug = await handler.collection('article').find({user: userId, number: articleId}).count()
  if(debug != 1) res.send(JSON.stringify(false))
  else{
    await handler.collection('article').deleteOne({user: userId, number: articleId})
    res.send(JSON.stringify(true))
  }
})
app.post("/User", async (req, res) => {//新規登録 post
  console.log("register")
  var queryList = req.url.slice(7, req.url.length).split('&')
  var id = queryList[0].split('=')[1]
  var pass = queryList[1].split('=')[1]
  const handler = await DBHandler.init()
  const findResult = await handler.collection('user').find({user: id}).count()
  var flag = (findResult == 0)
  if(flag) await handler.collection('user').insertOne({user: id, pwd: pass, articleCount: 0})
  res.send(JSON.stringify(flag))
})
app.get("/User", async (req, res) => {//ログイン put
  console.log("login")
  var queryList = req.url.slice(7, req.url.length).split('&')
  var id = queryList[0].split('=')[1]
  var pass = queryList[1].split('=')[1]
  const handler = await DBHandler.init()
  const findResult = await handler.collection('user').find({user: id, pwd: pass}).count()
  var flag = (findResult == 1)
  res.send(JSON.stringify(flag))
})