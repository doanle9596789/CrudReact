import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
     <Routes>
         <Route path={"/"} element={<Home/>}/>
         <Route path={"/edit/:id"} element={<Edit/>}/>
     </Routes>
    </div>
  );
}

export default App;
