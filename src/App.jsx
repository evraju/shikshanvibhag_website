import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SchoolTable from './components/SchoolTable'
import SchoolLinks from './components/SchoolLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <a href="https://docs.google.com/spreadsheets/d/1fc086Tx4UWPXZ-Dz7iaVsUAYUzs8jDGT/edit?usp=sharing&ouid=111342935448049166553&rtpof=true&sd=true"> Block</a>
      <a href="https://drive.google.com/file/d/1t8Q-GCge3HrJFJ6qZrU-n23O-63VoYBS/view?usp=drive_link">Alkuti</a>
      {/* <SchoolTable /> */}
      <SchoolLinks/>
    </>
  )
}

export default App
