import { Router, Request, Response } from "express"
import {
  Strategy,
  SwimSearchParam,
  GoodsSearchParam,
  TrainingSearchParam,
} from "./request"
import { DBHandler } from "../infrastructure/database"

interface ArticleRequest extends Request {
  query: { type: string } & SwimSearchParam &
    GoodsSearchParam &
    TrainingSearchParam
}

const router = Router()
router.get("/", async (req: ArticleRequest, res: Response) => {
  const handler = await DBHandler.init()
  const query = req?.query
  const Builder = Strategy.create(Number(query?.type))
  const builder = new Builder(query)
  const param = builder.build()
  const answer = await handler.collection("swim").find(param).toArray()
  res.send(JSON.stringify({ answer }))
})
module.exports = router
