import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Comp/Main'
import Top from './Comp/Top'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div >
     <Top/>
      <Main/>
    </div>
  );
}

export default App



//floor rules