import {
  SwimSearchParam,
  SwimSearchParamBuilder,
  GoodsSearchParam,
  GoodsSearchParamBuilder,
  TrainingSearchParam,
  TrainingSearchParamBuilder,
} from "./builder"

export enum Type {
  Swim = 1,
  Goods = 2,
  Training = 3,
}
const builders = {
  [Type.Swim]: SwimSearchParamBuilder,
  [Type.Goods]: GoodsSearchParamBuilder,
  [Type.Training]: TrainingSearchParamBuilder,
}
export class Strategy {
  static create(type: Type) {
    return builders[type]
  }
}
