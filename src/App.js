import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cakes from './Pages/Cakes';
import {useSelector} from 'react-redux'
import CartComponent from './components/CartComponent';
import ViewCart from './Pages/ViewCart';
import IceCreams from './Pages/IceCreams';
import Chocolate from './Pages/Chocolate';
import Flowers from './Pages/Flowers';
import Relish from './Pages/Relish';


function App() {
  //let noOfCakes = useSelector((state)=> state.cake.orderedcakes)
  //let initialcakes=useSelector((state)=>state.cake.numOfcakes);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path='/' element={<Flowers/>}></Route>
        <Route path='/Cakes' element={<Cakes/>}></Route>
        <Route path='/Cart' element={<ViewCart/>}></Route>
        {/* <Route path='/Relish' element={<Relish/>}></Route> */}

        <Route path='/IceCreams' element={<IceCreams/>}></Route>
        <Route path='/Chocolate' element={<Chocolate/>}></Route>
        <Route path='/Flowers' element={<Flowers/>}></Route>
       
        



      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
