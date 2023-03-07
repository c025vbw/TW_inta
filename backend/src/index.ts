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
  // for(var i = 2; i < queryList.length; i++){
  //   var splited = queryList[i].split('=')
  //   switch(type){
  //     case "競泳":
  //       switch(splited[0]){
  //         case "種類": var genre = splited[1]; break;
  //         case "距離": var distance = splited[1]; break; //自由入力
  //         case "タイム": var time = splited[1]; break;
  //         case "映像": var camera = splited[1]; break;
  //         case "水中": var water = splited[1]; break;
  //         case "シーン": var scene = splited[1]; break;
  //       }
  //       break;
  //     case "グッズ":
  //       switch(splited[0]){
  //         case "ゴーグル": var goggles = splited[1]; break;
  //         case "ビート板": var gickBoard = splited[1]; break;
  //       }
  //       break;
  //     case "オフトレ":
  //       switch(splited[0]){
  //         case "トライランド": var triland = splited[1]; break;
  //         case "ウェイト": var weight = splited[1]; break;
  //         case "食事": var eat = splited[1]; break;
  //       }
  //       break;
  //   }
  // }
  const handler = await DBHandler.init()
  var data = await handler.collection('user').findOne({user: id}) /*検索し、投稿者のarcicleCountを獲得する*/
  var count = data?.articleCount + 1
  handler.collection('user').updateOne({user: id}, {$set:{articleCount: count}})
  handler.collection('article').insertOne({user: id, article: count, types: type}) /*投稿する*/
  res.send(JSON.stringify(true))
})
app.put("/Articles", async (req, res) => {//更新
  console.log("update")
  res.send(JSON.stringify("ok"))
})
app.get("/Articles", async (req, res) => {//取得 get
  console.log("get")
  const handler = await DBHandler.init()
  const answer = handler.collection('article').find().toArray() /*検索文にて探す*/
  res.send(JSON.stringify(answer))
})
app.delete("/Articles", async (req, res) => {//削除
  res.send(JSON.stringify("delate"))
  var queryList = req.url.slice(11, req.url.length).split('&')
  var userId = queryList[0].split('=')[1]
  var articleId = queryList[1].split('=')[1]
  const handler = await DBHandler.init()
  handler.collection('article').deleteOne({user: userId, article: articleId})
  res.send(JSON.stringify(true))
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
app.put("/User", async (req, res) => {//ログイン put
  console.log("login")
  var queryList = req.url.slice(7, req.url.length).split('&')
  var id = queryList[0].split('=')[1]
  var pass = queryList[1].split('=')[1]
  const handler = await DBHandler.init()
  const findResult = await handler.collection('user').find({user: id, pwd: pass}).count()
  var flag = (findResult == 1)
  res.send(JSON.stringify(flag))
})