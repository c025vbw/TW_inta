import { SearchButton } from "../../../ui/button/SearchButton"

export const PostContainer = () => {
    //ロジック apiで呼び出し
    return (
        //presenter コンポーネン
        <SearchButton onClick={() => console.log("Button clicked!")}>
        </SearchButton>
    )
}