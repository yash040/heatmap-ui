import "./App.css";
import { Routes, Route } from "react-router-dom";
import AfterImage from "./component/afterImage";
import Home from "./component/home";
import MyContext from "./myContext";


function App() {
  return (
   <> 
   <MyContext.Provider value="hello">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/afterimage" element={<AfterImage />} />
    </Routes>
   </MyContext.Provider>
    </> 
  );
}

export default App;
