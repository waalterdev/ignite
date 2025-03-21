import { Header } from "./components/Header"
import PostComponent from "./Post"

import './global.css'

function App() {
  return (
    <div>
      <Header />
      <PostComponent author="Sherman Walter" content="contect" />
    </div>
  )
}

export default App
