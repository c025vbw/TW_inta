import { BackButton } from "../../../ui/button/BackButton"

export const DetailContainer = () => {
    //ロジック apiで呼び出し
    return (
        //presenter コンポーネント
        <BackButton onClick={() => console.log("Button clicked!")} color="bg-blue-200" hoverColor="gray-900">
            Click me!
        </BackButton>
    )
}