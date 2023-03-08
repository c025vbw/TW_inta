export class ParamBuilder<T extends Object> {
  private _value: T
  constructor(initialValue: T) {
    this._value = initialValue
  }
  add = <Value>(property: keyof T, value: Value): this => {
    this._value = {
      ...this._value,
      [property]: value,
    }
    return this
  }
  get value() {
    return this._value
  }
}
