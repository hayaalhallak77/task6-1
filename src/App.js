import Calculator from "./Calculator/Calculator";
import Home from "./Home/Home";
import Slider from "./Slider/Slider";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Calculator' element={<Calculator/>}/>
        <Route path='/Slider' element={<Slider/>}/>
      </Routes>
    </div>
  );
}

export default App;
