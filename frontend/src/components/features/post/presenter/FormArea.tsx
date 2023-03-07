import { FC } from "react"
import { BackButton } from "../../../ui/button/BackButton"
import { CreatePageButton } from "../../../ui/button/CreatePageButton"
import { TextField } from "../../../ui/field/TextField"
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form';
import { MovieBox } from "../../../ui/box/MovieBox";
import { Button } from "../../../ui/button/Button";
import { TYPE } from "../../../../common/swimming";

type Props = {
    errors: FieldErrors<TYPE>
    register: UseFormRegister<TYPE>
    // userid: string
}
export const FormArea: FC<Props> = ({ errors, register }) => {
    return (
        <div>
            <BackButton onClick={() => null} color="bg-blue-500" hoverColor="gray-900">
                戻る
            </BackButton>
            <div style={{ float: "right" }}>
                <Button onClick={() => null} color="bg-blue-500" hoverColor="gray-900">
                    投稿
                </Button>
            </div>
            {/* <MovieBox></MovieBox> */}
            <TextField type="file" id="resource" placeholder="movie" register={register} />
            <select id="type" {...register("type")}>
                <option value="swim">水泳</option>
                <option value="goods">グッズ</option>
                <option value="training">トレーニング</option>
            </select>
            <TextField type="text" id="time" placeholder="time" register={register} />
            <TextField type="text" id="komento" placeholder="komento" register={register} />
        </div>
    )
}