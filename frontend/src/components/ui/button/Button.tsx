import { FC, ReactNode } from "react"

type Button = {
  onClick:() => void
  children:ReactNode
  color:string
  hoverColor?:string
}

export const Button:FC<Button> = ({ onClick, children, color, hoverColor }) => {
  return (
<<<<<<< HEAD
    <button className={`${color} hover:${hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="submit" onClick={onClick}>
=======
    <button className={`${color} hover:${hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="button" onClick={onClick}>
>>>>>>> b2a6bdc0fc4bcbff3cfb388eda5d3219e92c24f7
      {children}
    </button>
  )
}