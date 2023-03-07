import axios from "axios"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormArea } from "../presenter/FormArea"
import { PresenterContainer } from "../presenter/PresenterContainer"

type Inputs = {
  userid:string 
  password:string
}
export const LoginContainer = () => {
  //ロジック apiで呼び出し
  const { handleSubmit,register,formState:{errors} } = useForm<Inputs>()
  const submit:SubmitHandler<Inputs> = async(data) => {
    try {
      const response = await axios.post(`http://localhost:80/User`, {
        body: {
          id:data.userid,
          password:data.password
        }
      })
      //topに飛ばす
    }catch(error) {
      console.log(error)
    }
  }
  return (
    //presenter コンポーネント
    <PresenterContainer>
    <form onSubmit={handleSubmit(submit)}>
      <FormArea errors={errors} register={register}/>
    </form>
    </PresenterContainer>
  )
}