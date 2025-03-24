import { Header } from "./components/Header"
import PostComponent from "./Post"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <PostComponent
            author="Sherman Walter"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ex corrupti? Omnis, repudiandae minima ipsa doloremque deleniti dignissimos, sint quas sunt sit hic vero aperiam dolores! Excepturi nisi voluptas accusantium?"
          />
          <PostComponent
            author="Maria Eduarda"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ex corrupti? Omnis, repudiandae minima ipsa doloremque deleniti dignissimos, sint quas sunt sit hic vero aperiam dolores! Excepturi nisi voluptas accusantium?"
          />
        </main>
      </div>
    </div>
  )
}



export default App
