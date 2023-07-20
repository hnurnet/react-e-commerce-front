
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
 
  return (
    
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home />}/>
     <Route path="/checkout" element={<Checkout />}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
