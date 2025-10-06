import {Route, Routes,} from "react-router";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App = () => {
  return (    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>  
  )  
}

export default App