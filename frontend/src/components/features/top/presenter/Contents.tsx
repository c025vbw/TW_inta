import { FC } from "react"
import { CommentBox } from "../../../ui/box/CommentBox"
import { MovieBox } from "../../../ui/box/MovieBox"

// type Props = {
//   data:Array<>
// }
type Props = {
  src:string 
  comment:string
}
export const Contents:FC<Props> = ({src, comment}) => {
  return (
  <div className="flex flex-col gap-6 justify-center mt-6 w-3/4 m-auto md:block">
    <MovieBox className="max-lg:w-auto">
      {/* <video src=""></video> */}
    </MovieBox>
    <CommentBox className="overflow-hidden text-ellipsis whitespace-nowrap">
      <span style={{lineClamp:3}}>{comment}</span>
    </CommentBox>
    </div>
  )
}