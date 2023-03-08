export interface Document {
  [key: string]: any
}

export abstract class IParamBuilder {
  abstract build(): Document
}
