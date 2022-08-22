import React ,{Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/index/Index";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/Contact/contact";

class App extends Component {
  render(){
    return (
     <Router>
      <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Index />}/>
              <Route path="/contact" element={<Contact />}/>
          </Routes>
         
          
      </div>
         
          
     </Router>
       
        
      
    );
  }
}

export default App;
