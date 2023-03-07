import { FC, ReactNode } from "react"

type Props = {
  children:ReactNode
  className?:string
}
export const CommentBox:FC<Props> = ({children, className}) => {
  return (
    <div className={['w-full mt-4 font-normal text-sm', className].join(' ')}>
      {children}
    </div>
  )
}