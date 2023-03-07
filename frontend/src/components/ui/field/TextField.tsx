import { FC } from "react"
import { useForm, UseFormRegister } from "react-hook-form"

type Field = {
  type:string
  placeholder:string
  id:string
  className?:string
  register:UseFormRegister<any>
}
export const TextField:FC<Field> = ({type, placeholder, id,className, register}) => {
  return (
    <input {...register(id, {
      required:true
    })} className={[`shadow appearance-none font-normal border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,className].join(' ')} id={id} type={type} placeholder={placeholder}/>
  )
}