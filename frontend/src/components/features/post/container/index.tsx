import { SearchButton } from "../../../ui/button/SearchButton"
<<<<<<< HEAD
import { PresenterContainer } from "../presenter/PresenterContainer"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormArea } from "../presenter/FormArea"
import axios from 'axios';
import { TYPE } from "../../../../common/swimming"

export const PostContainer = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<TYPE>()

    const submit: SubmitHandler<TYPE> = async (data) => {
        // console.log(data)
        // const reader = new FileReader();
        // reader.onload = () => { console.log(reader.result); }
        // console.log(reader.readAsBinaryString(data.resource[0]))
        // console.log(data.resource)
        const file = data.resource[0];
        const reader = new FileReader();
        reader.onload = () => {
            const binaryData = reader.result as ArrayBuffer;
            console.log(new Uint8Array(binaryData));
        };
        reader.readAsArrayBuffer(file);
        try {
            const response = await axios.post(`http://localhost:80/User`, {
                body: {
                    time: data.time,
                    bodies: data.bodies,
                    type: data.type
                }
            })
            //topに飛ばす
        } catch (error) {
            console.log(error)
        }
    }

    return (
        //presenter コンポーネント
        <PresenterContainer>
            <form onSubmit={handleSubmit(submit)}>
                <FormArea errors={errors} register={register} />
            </form>
        </PresenterContainer>
=======

export const PostContainer = () => {
    //ロジック apiで呼び出し
    return (
        //presenter コンポーネン
        <SearchButton onClick={() => console.log("Button clicked!")}>
        </SearchButton>
>>>>>>> b2a6bdc0fc4bcbff3cfb388eda5d3219e92c24f7
    )
}