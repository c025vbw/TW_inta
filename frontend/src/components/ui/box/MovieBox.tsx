import { FC, ReactNode } from "react"

//size
type Props = {
  children:ReactNode
  className?:string
}
export const MovieBox:FC<Props> = ({className, children}) => {
  return (
    <div className={[`border-stone-200`,className].join(' ')}>
      {children}
    </div>
  )
}