import { FC, ReactNode } from "react"

type Button = {
  onClick:() => void
  children:ReactNode
  color:string
  hoverColor?:string
}

export const Button:FC<Button> = ({ onClick, children, color, hoverColor }) => {
  return (
    <button className={`${color} hover:${hoverColor} text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="button" onClick={onClick}>
      {children}
    </button>
  )
}