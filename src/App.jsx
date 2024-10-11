import { useState } from 'react'
import './assets/components/style.css'
import Navbar  from './assets/components/navbar'
import UserInfoForm from './assets/components/generalInfo'
import Education from './assets/components/education'
import Experience from './assets/components/experience'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <UserInfoForm />
        
        
      </div>
     <div>
     <Education />

     </div>
     
     <div>
     <Experience />
      
     </div>
     
      
    

    </>
  )
}

export default App;
