import { FC } from "react"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { SearchButton } from "../../../ui/button/SearchButton"
import { TextField } from "../../../ui/field/TextField"

type Inputs = {
  keyword:string
}
type Props = {
  errors:FieldErrors<Inputs>
  register:UseFormRegister<Inputs>
}
export const SearchArea:FC<Props> = ({errors, register}) => {
  return (
    <div className="flex gap-5 w-1/2 justify-center m-auto mt-4 mb-14">
      <TextField placeholder="検索" id="keyword" register={register} type="text" />
    </div>
  )
}