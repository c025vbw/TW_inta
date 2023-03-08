import express, { query } from "express"
import { DBHandler } from "./infrastructure/database"

async function search(type: string, req: any) {
  const handler = await DBHandler.init()
  var id = req?.query.user
  if (id == undefined) id = ""
  var answer
  switch (type) {
    case "swim":
      var genre = req?.query.genre
      if (genre == undefined) genre = ""
      var distance = req?.query.distance
      if (distance == undefined) distance = ""
      var time = req?.query.time
      if (time == undefined) time = ""
      var camera = req?.query.camera
      if (camera == undefined) camera = ""
      var water = req?.query.water
      if (water == undefined) water = ""
      var scene = req?.query.scene
      if (scene == undefined) scene = ""
      console.log(time)
      answer = await handler
        .collection(type)
        .find({
          user: { $regex: id },
          genres: { $regex: genre },
          distances: { $regex: distance },
          times: { $regex: time },
          cameras: { $regex: camera },
          waters: { $regex: water },
          scenes: { $regex: scene },
        })
        .toArray()
      break
    case "goods":
      var goggle = req?.query.goggle
      if (goggle == undefined) goggle = ""
      var kickBoard = req?.query.kickBoard
      if (kickBoard == undefined) kickBoard = ""
      var practiceWear = req?.query.practiceWear
      if (practiceWear == undefined) practiceWear = ""
      var fastWear = req?.query.fastWear
      if (fastWear == undefined) fastWear = ""
      var tracksuit = req?.query.tracksuit
      if (tracksuit == undefined) tracksuit = ""
      var pullBuoy = req?.query.pullBuoy
      if (pullBuoy == undefined) pullBuoy = ""
      var paddle = req?.query.paddle
      if (paddle == undefined) paddle = ""
      var tube = req?.query.tube
      if (tube == undefined) tube = ""
      var medicineBall = req?.query.medicineBall
      if (medicineBall == undefined) medicineBall = ""
      var mat = req?.query.mat
      if (mat == undefined) mat = ""
      answer = await handler
        .collection(type)
        .find({
          user: { $regex: id },
          goggles: { $regex: goggle },
          kickBoards: { $regex: kickBoard },
          practiceWears: { $regex: practiceWear },
          fastWears: { $regex: fastWear },
          tracksuits: { $regex: tracksuit },
          pullBuoies: { $regex: pullBuoy },
          paddles: { $regex: paddle },
          tubes: { $regex: tube },
          medicineBalls: { $regex: medicineBall },
          mats: { $regex: mat },
        })
        .toArray()
      break
    case "training":
      var genre = req?.query.genre
      if (genre == undefined) genre = ""
      answer = await handler
        .collection(type)
        .find({ user: { $regex: id }, genres: { $regex: genre } })
        .toArray()
      break
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
app.use("/Articles", require("./presentation/article"))
