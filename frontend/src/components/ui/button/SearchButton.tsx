import { AiOutlineSearch } from "react-icons/ai"
import { FC, ReactNode } from "react"

type SearchButton = {
    onClick: () => void
    children: ReactNode
}
//↓FC以下が型定義
export const SearchButton: FC<SearchButton & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, children, ...rest }) => {
    return (
      <button {...rest} onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <AiOutlineSearch /> {children}
      </button>
    )
  }