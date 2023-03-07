import axios from "axios"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Contents } from "../presenter/Contents"
import { SearchArea } from "../presenter/SearchArea"

type Inputs = {
  keyword:string
}
export const TopContainer = () => {
  const { register, handleSubmit, formState:{errors} } = useForm<Inputs>()
  const [article, setArticle] = useState()
  useEffect(() => {
    const getArticle = async () => {
      try {
        await axios.get('localhost:80/Article').then((data) => {
          // setArticle(data)
        })
      } catch(error) {
        console.log(error)
      }
    }
    getArticle()
  },[])
  const submit:SubmitHandler<Inputs> = () => {

  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(submit)}>
        <SearchArea register={register} errors={errors}/>
      </form>
      <div className="grid grid-cols-4">
      <Contents src="https://www.youtube.com/watch?v=SjuvADLALCQ" comment="第64回日本選手権(25m)水泳競技大会2日目　男子200メートル平泳ぎ決勝"/>
      <Contents src="https://www.youtube.com/watch?v=SjuvADLALCQ" comment="第64回日本選手権(25m)水泳競技大会2日目　男子200メートル平泳ぎ決勝"/>
      <Contents src="https://www.youtube.com/watch?v=SjuvADLALCQ" comment="第64回日本選手権(25m)水泳競技大会2日目　男子200メートル平泳ぎ決勝"/>
      <Contents src="https://www.youtube.com/watch?v=SjuvADLALCQ" comment="第64回日本選手権(25m)水泳競技大会2日目　男子200メートル平泳ぎ決勝"/>
      </div>
      {/* <Contents src="https://www.youtube.com/watch?v=SjuvADLALCQ" comment="瀬戸選手の短水が別次元なのは元々だけど、渡辺選手がひとかきひとけりでそこまで遅れなくなったような…
"/>
      <Contents src="https://www.youtube.com/watch?v=SjuvADLALCQ" comment="絶好調"/>
      <Contents src="https://www.youtube.com/watch?v=SjuvADLALCQ" comment="絶好調"/> */}
    </div>
  )
}