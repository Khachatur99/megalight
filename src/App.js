
import './App.css';
import { Routes, Route, } from "react-router-dom"
import Blog from './pages/Blog_page';
import Obout from './pages/Obout_Us_page';
import Brands from './pages/Brands_page';
import Homepage from './pages/Home_page';
import LayOut from './components/Layout';
import NotFound from './pages/Not_Found_page';

 

function App() {
 
  return (
   < >

   <Routes>
    <Route path='/' element={<LayOut/>}>
      <Route path='/' element={<Homepage/>}/>
      <Route path='Blog_' element={<Blog/>}/>
      <Route path='Obout_' element={<Obout/>}/>
      <Route path='Brands_' element={<Brands/>}/>
      <Route path='*' element={<NotFound/>} />
      
    </Route>
   </Routes>



   </>


  );
}

export default App;
