import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Edit from "./components/Edit";
import Views from "./components/Views";
import Delete from "./components/Delete";
import Create from "./components/Create";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
     <Routes>
         <Route path={"/"} element={<Home/>}/>
         <Route path={"/create/user"} element={<Create/>}/>
         <Route path={"/edit/:id"} element={<Edit/>}/>
         <Route path={"/views/:id"} element={<Views/>}/>
         <Route path={"/delete/:id"} element={<Delete/>}/>
         <Route path={"/search"} element={<Search/>}/>

     </Routes>
    </div>
  );
}

export default App;
