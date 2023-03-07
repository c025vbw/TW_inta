import express, { query } from "express"
import { DBHandler } from "./infrastructure/database"

async function search(type: string, req: any){
  const handler = await DBHandler.init()
  var id = req?.query.user
  if(id == undefined) id = ""
  var answer
  switch(type){
    case 'swim':
      var genre = req?.query.genre
      if(genre == undefined) genre = ""
      var distance = req?.query.distance
      if(distance == undefined) distance = ""
      var time = req?.query.time
      if(time == undefined) time = ""
      var camera = req?.query.camera
      if(camera == undefined) camera = ""
      var water = req?.query.water
      if(water == undefined) water = ""
      var scene = req?.query.scene    
      if(scene == undefined) scene = ""
      console.log(time)
      answer = await handler.collection(type).find({user: {$regex: id}, genres: {$regex: genre}, distances: {$regex: distance}, times: {$regex: time}, cameras: {$regex: camera}, waters: {$regex: water}, scenes: {$regex: scene}}).toArray()
      break;
    case 'goods':
      var goggle = req?.query.goggle
      if(goggle == undefined) goggle = ""
      var kickBoard = req?.query.kickBoard
      if(kickBoard == undefined) kickBoard = ""
      var practiceWear = req?.query.practiceWear
      if(practiceWear == undefined) practiceWear = ""
      var fastWear = req?.query.fastWear
      if(fastWear == undefined) fastWear = ""
      var tracksuit = req?.query.tracksuit
      if(tracksuit == undefined) tracksuit = ""
      var pullBuoy = req?.query.pullBuoy
      if(pullBuoy == undefined) pullBuoy = ""
      var paddle = req?.query.paddle
      if(paddle == undefined) paddle = ""
      var tube = req?.query.tube
      if(tube == undefined) tube = ""
      var medicineBall = req?.query.medicineBall
      if(medicineBall == undefined) medicineBall = ""
      var mat = req?.query.mat
      if(mat == undefined) mat = ""
      answer = await handler.collection(type).find({user: {$regex: id}, goggles: {$regex: goggle}, kickBoards: {$regex: kickBoard}, practiceWears: {$regex: practiceWear}, fastWears: {$regex: fastWear}, tracksuits: {$regex: tracksuit}, pullBuoies: {$regex: pullBuoy}, paddles: {$regex: paddle}, tubes: {$regex: tube}, medicineBalls: {$regex: medicineBall}, mats: {$regex: mat}}).toArray()
      break;
    case 'training':
      var genre = req?.query.genre
      if(genre == undefined) genre = ""
      answer = await handler.collection(type).find({user: {$regex: id}, genres: {$regex: genre}}).toArray()
      break;
  }
  return answer
}


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
  const handler = await DBHandler.init()
  var id = req?.body.user
  var data = await handler.collection('user').findOne({user: id})
  var count = data?.articleCount + 1
  handler.collection('user').updateOne({user: id}, {$set:{articleCount: count}})
  var type = req?.body.type
  handler.collection('master').insertOne({user: id, number: count, types: type});
  var body = req?.body.body
  if(body == undefined) body = ""
  var recourse = req?.body.recourse
  if(recourse == undefined) recourse = ""
  switch(type){
    case "swim":
      var genre = req?.body.genre
      if(genre == undefined) genre = ""
      var distance = req?.body.distance
      if(distance == undefined) distance = ""
      var time = req?.body.time
      if(time == undefined) time = ""
      var camera = req?.body.camera
      if(camera == undefined) camera = ""
      var water = req?.body.water
      if(water == undefined) water = ""
      var scene = req?.body.scene    
      if(scene == undefined) scene = ""
      handler.collection(type).insertOne({user: id, number: count, genres: genre, distances: distance, times: time, cameras: camera, waters: water, scenes: scene, bodies: body, resources: recourse});
      break;
    case "goods":
      var goggle = req?.body.goggle
      if(goggle == undefined) goggle = ""
      var kickBoard = req?.body.kickBoard
      if(kickBoard == undefined) kickBoard = ""
      var practiceWear = req?.body.practiceWear
      if(practiceWear == undefined) practiceWear = ""
      var fastWear = req?.body.fastWear
      if(fastWear == undefined) fastWear = ""
      var tracksuit = req?.body.tracksuit
      if(tracksuit == undefined) tracksuit = ""
      var pullBuoy = req?.body.pullBuoy
      if(pullBuoy == undefined) pullBuoy = ""
      var paddle = req?.body.paddle
      if(paddle == undefined) paddle = ""
      var tube = req?.body.tube
      if(tube == undefined) tube = ""
      var medicineBall = req?.body.medicineBall
      if(medicineBall == undefined) medicineBall = ""
      var mat = req?.body.mat
      if(mat == undefined) mat = ""
      handler.collection(type).insertOne({user: id, number: count, goggles: goggle, kickBoards: kickBoard, practiceWears: practiceWear, fastWears: fastWear, tracksuits: tracksuit, pullBuoies: pullBuoy, paddles: paddle, tubes: tube, medicineBalls: medicineBall, mats: mat, bodies: body, resources: recourse});
      break;
    case "training":
      var genre = req?.body.genre
      if(genre == undefined) genre = ""
      handler.collection(type).insertOne({user: id, number: count, genres: genre, bodies: body, resources: recourse});
      break;
  }
  res.send(JSON.stringify(true))
})
app.put("/Articles", async (req, res) => {//更新 put /*collectionの確認*/
  console.log("update")
  var userId = req?.body.user
  var articleId = req?.body.article
  const handler = await DBHandler.init()
  const target = await handler.collection('master').findOne({user: userId, number: Number(articleId)})
  var body = req?.body.body
  if(body == undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{bodies: body}});
  var recourse = req?.body.recourse
  if(recourse != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{recourses: recourse}});
  switch(String(target?.types)){
    case "swim":
      var genre = req?.body.genre
      if(genre != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{genres: genre}});
      var distance = req?.body.distance
      if(distance != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{distances: distance}});
      var time = req?.body.time
      if(time != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{times: time}});
      var camera = req?.body.camera
      if(camera != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{cameras: camera}});
      var water = req?.body.water
      if(water != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{waters: water}});
      var scene = req?.body.scene    
      if(scene != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{scenes: scene}});
      break;
    case "goods":
      var goggle = req?.body.goggle
      if(goggle != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{goggles: goggle}});
      var kickBoard = req?.body.kickBoard
      if(kickBoard != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{kickBoards: kickBoard}});
      var practiceWear = req?.body.practiceWear
      if(practiceWear != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{practiceWears: practiceWear}});
      var fastWear = req?.body.fastWear
      if(fastWear != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{fastWears: fastWear}});
      var tracksuit = req?.body.tracksuit
      if(tracksuit != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{tracksuits: tracksuit}});
      var pullBuoy = req?.body.pullBuoy
      if(pullBuoy != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{pullBuoies: pullBuoy}});
      var paddle = req?.body.paddle
      if(paddle != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{paddles: paddle}});
      var tube = req?.body.tube
      if(tube != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{tubes: tube}});
      var medicineBall = req?.body.medicineBall
      if(medicineBall != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{medicineBalls: medicineBall}});
      var mat = req?.body.mat
      if(mat != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{mats: mat}});
      break;
    case "training":
      var genre = req?.body.genre
      if(genre != undefined) handler.collection(String(target?.types)).updateOne({user: userId, number: Number(articleId)}, {$set:{genres: genre}});
      break;
  }
  
  res.send(JSON.stringify(true))
})
app.get("/Articles/swim", async (req, res) => {//取得 get
  console.log("search")
  const handler = await DBHandler.init()
  var answer = await search("swim", req)
  res.send(JSON.stringify(answer))
})
app.get("/Articles/goods", async (req, res) => {//取得 get
  console.log("search")
  const handler = await DBHandler.init()
  var answer = await search("goods", req)
  res.send(JSON.stringify(answer))
})
app.get("/Articles/training", async (req, res) => {//取得 get
  console.log("search")
  const handler = await DBHandler.init()
  var answer = await search("training", req)
  res.send(JSON.stringify(answer))
})
app.get("/Articles", async (req, res) => {//取得 get
  console.log("search")
  const handler = await DBHandler.init()
  var type = req?.query.type
  var answer
  var resultS = await search("swim", req)
  var resultG = await search("goods", req)
  var resultT = await search("training", req)
  if(resultS == undefined){
    if(resultG == undefined) answer = resultT
    else if(resultT == undefined) answer = resultG
    else answer = resultG.concat(resultT)
  }else{
    if(resultG == undefined){
      if(resultT == undefined) answer = resultS
      else answer = resultS.concat(resultT)
    }else if(resultT == undefined) answer = resultS.concat(resultG)
    else answer = resultS.concat(resultG, resultT)
  }
  res.send(JSON.stringify(answer))
})
app.delete("/Articles", async (req, res) => {//削除 delete
  console.log("delate")
  var userId = req?.query.user
  var articleId =  req?.query.article
  const handler = await DBHandler.init()
  var debug = await handler.collection('master').find({user: userId, number: Number(articleId)}).count()
  if(debug != 1) res.send(JSON.stringify(false))
  else{
    const target = await handler.collection('master').findOne({user: userId, number: Number(articleId)})
    await handler.collection('master').deleteOne({user: userId, number: Number(articleId)})
    await handler.collection(String(target?.types)).deleteOne({user: userId, number: Number(articleId)})
    res.send(JSON.stringify(true))
  }
})
app.post("/User", async (req, res) => {//新規登録 post
  console.log("register")
  var id = req?.body.id
  var pass = req?.body.pass
  const handler = await DBHandler.init()
  const findResult = await handler.collection('user').find({user: id}).count()
  var flag = (findResult == 0)
  if(flag) await handler.collection('user').insertOne({user: id, pwd: pass, articleCount: 0})
  res.send(JSON.stringify(flag))
})
app.put("/User", async (req, res) => {//ログイン put
  console.log("login")
  var id = req?.body.id
  var pass = req?.body.pass
  const handler = await DBHandler.init()
  const findResult = await handler.collection('user').find({user: id, pwd: pass}).count()
  var flag = (findResult == 1)
  res.send(JSON.stringify(flag))
})