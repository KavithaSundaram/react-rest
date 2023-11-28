import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './Components/AppBar';
import Banner from './Components/Banner'
import Menu from './Components/Menu'
import PickoftheWeek from "./Components/PickoftheWeek.js";
import Comments from "./Components/Comments.js";
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route path='/'element={<Banner/>}></Route>
        <Route path='/menu'element={<Menu/>} ></Route>
        <Route path="/pickoftheWeek" element={<PickoftheWeek/>}></Route>
        <Route path="/comments" element={<Comments/>}></Route>
      </Routes>
    </div>
  )
  
}
export default App




