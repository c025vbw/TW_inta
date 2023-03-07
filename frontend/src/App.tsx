import axios from "axios"
import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "./components/page/login"
import { Detail } from "./components/page/detail"
import {Post} from "./components/page/post"
<<<<<<< HEAD
import { MypageContainer } from "./components/features/mypage/container"
=======
>>>>>>> b2a6bdc0fc4bcbff3cfb388eda5d3219e92c24f7

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
<<<<<<< HEAD
      <div>{value}</div>
=======
>>>>>>> b2a6bdc0fc4bcbff3cfb388eda5d3219e92c24f7
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/post" element={<Post/>} />
<<<<<<< HEAD
        <Route path="/mypage" element={<MypageContainer/>} />
=======
>>>>>>> b2a6bdc0fc4bcbff3cfb388eda5d3219e92c24f7
        <Route path="/" element={<></>} />
      </Routes>
    </div>
  )
}

export default App
