import { FC, ReactNode } from "react"

type BackButton = {
  onClick:() => void
  children:ReactNode
  color:string
  hoverColor?:string
}

export const BackButton:FC<BackButton> = ({ onClick, children, color, hoverColor }) => {
  return (
    <button className={`${color} hover:${hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="button" onClick={onClick}>
      {children}
    </button>
  )
}