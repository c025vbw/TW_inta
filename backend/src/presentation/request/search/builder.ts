import { ParamBuilder } from "../base"
import { Document, IParamBuilder } from "../interface"

export type SwimSearchParam = {
  user: string | undefined
  genre: string | undefined
  distance: string | undefined
  time: string | undefined
  camera: string | undefined
  water: string | undefined
  scene: string | undefined
}
export class SwimSearchParamBuilder
  extends ParamBuilder<SwimSearchParam>
  implements IParamBuilder
{
  constructor(initialValue?: SwimSearchParam) {
    super(
      initialValue || {
        user: undefined,
        genre: undefined,
        distance: undefined,
        time: undefined,
        camera: undefined,
        water: undefined,
        scene: undefined,
      }
    )
  }
  build(): Document {
    let param = {}
    if (!!this?.value?.user) {
      param = {
        ...param,
        user: { $regex: this?.value?.user },
      }
    }
    if (!!this?.value?.genre) {
      param = {
        ...param,
        genres: { $regex: this?.value?.genre },
      }
    }
    if (!!this?.value?.distance) {
      param = {
        ...param,
        distances: { $regex: this?.value?.distance },
      }
    }
    if (!!this?.value?.time) {
      param = {
        ...param,
        times: { $regex: this?.value?.time },
      }
    }
    if (!!this?.value?.camera) {
      param = {
        ...param,
        cameras: { $regex: this?.value?.camera },
      }
    }
    if (!!this?.value?.water) {
      param = {
        ...param,
        waters: { $regex: this?.value?.water },
      }
    }
    if (!!this?.value?.scene) {
      param = {
        ...param,
        scenes: { $regex: this?.value?.scene },
      }
    }
    return super.value
  }
}

export type GoodsSearchParam = {
  user: string | undefined
  goggle: string | undefined
  kickBoard: string | undefined
  practiceWear: string | undefined
  fastWear: string | undefined
  tracksuit: string | undefined
  pullBuoy: string | undefined
  paddle: string | undefined
  tube: string | undefined
  medicineBall: string | undefined
  mat: string | undefined
}
export class GoodsSearchParamBuilder
  extends ParamBuilder<GoodsSearchParam>
  implements IParamBuilder
{
  constructor(initialValue?: GoodsSearchParam) {
    super(
      initialValue || {
        user: undefined,
        goggle: undefined,
        kickBoard: undefined,
        practiceWear: undefined,
        fastWear: undefined,
        tracksuit: undefined,
        pullBuoy: undefined,
        paddle: undefined,
        tube: undefined,
        medicineBall: undefined,
        mat: undefined,
      }
    )
  }
  build(): Document {
    let param = {}
    if (!!this?.value?.user) {
      param = {
        ...param,
        user: { $regex: this?.value?.user },
      }
    }
    if (!!this?.value?.goggle) {
      param = {
        ...param,
        goggles: { $regex: this?.value?.goggle },
      }
    }
    if (!!this?.value?.kickBoard) {
      param = {
        ...param,
        kickBoards: { $regex: this?.value?.kickBoard },
      }
    }
    if (!!this?.value?.practiceWear) {
      param = {
        ...param,
        practiceWears: { $regex: this?.value?.practiceWear },
      }
    }
    if (!!this?.value?.fastWear) {
      param = {
        ...param,
        fastWears: { $regex: this?.value?.fastWear },
      }
    }
    if (!!this?.value?.tracksuit) {
      param = {
        ...param,
        tracksuits: { $regex: this?.value?.tracksuit },
      }
    }
    if (!!this?.value?.pullBuoy) {
      param = {
        ...param,
        pullBuoies: { $regex: this?.value?.pullBuoy },
      }
    }
    if (!!this?.value?.paddle) {
      param = {
        ...param,
        paddles: { $regex: this?.value?.paddle },
      }
    }
    if (!!this?.value?.tube) {
      param = {
        ...param,
        tubes: { $regex: this?.value?.tube },
      }
    }
    if (!!this?.value?.medicineBall) {
      param = {
        ...param,
        medicineBalls: { $regex: this?.value?.medicineBall },
      }
    }
    if (!!this?.value?.mat) {
      param = {
        ...param,
        mats: { $regex: this?.value?.mat },
      }
    }
    return super.value
  }
}

export type TrainingSearchParam = {
  user: string | undefined
  genre: string | undefined
}
export class TrainingSearchParamBuilder
  extends ParamBuilder<TrainingSearchParam>
  implements IParamBuilder
{
  constructor(initialValue?: TrainingSearchParam) {
    super(
      initialValue || {
        user: undefined,
        genre: undefined,
      }
    )
  }
  build(): Document {
    let param = {}
    if (!!this?.value?.user) {
      param = {
        ...param,
        user: { $regex: this?.value?.user },
      }
    }
    if (!!this?.value?.genre) {
      param = {
        ...param,
        genres: { $regex: this?.value?.genre },
      }
    }
    return super.value
  }
}
