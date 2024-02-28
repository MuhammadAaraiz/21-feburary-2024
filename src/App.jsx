import { Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Product_Details } from './Pages/Product_Details'
// import { Signup } from './Pages/Sign_up';
// import axios from 'axios'
function App() {
  // const params = useParams();

  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home />} />
        {/* <Route path='/productdetails/${id}' element={<Product_Details />} /> */}
        <Route />
      </Routes>

      {/* <Signup/> */}

    </>

  )
}

export default App
