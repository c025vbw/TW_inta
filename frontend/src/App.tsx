import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "./components/page/login"
import { Detail } from "./components/page/detail"
import {Post} from "./components/page/post"
import { TopContainer } from "./components/features/top/container"
import { Mypage } from "./components/page/mypage"
import { Top } from "./components/page/top"

function App() {
  const [value, setValue] = useState<number | null>(null)

  useEffect(() => {
    axios
      .get("http://localhost/helth-check")
      .then((res) => setValue(res.status))
      .catch((e: Error) => {
        console.error(e.toString())
      })
  }, [])

  return (
    <div className="font-bold">
      {value}
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/top" element={<Top/>} />
        <Route path="/mypage" element={<Mypage/>} />
      </Routes>
    </div>
  )
}

export default App
