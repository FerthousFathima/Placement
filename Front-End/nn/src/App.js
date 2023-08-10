import logo from './logo.svg';
import './App.css';
import ListcollegeComponents from './components/ListcollegeComponents';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Create from './components/Create';
import Update from './components/Update';


function App() {
  return (
   <div>
    <Router>
         <Header />
           <div className="container">
              <Routes>
                 <Route path ="/"  element ={<ListcollegeComponents />}></Route>
                 <Route path ="/colleges" element={<ListcollegeComponents />}></Route>
                 <Route path ="/add-colleges/" element={<Create />}></Route>
                 <Route path ="/update-colleges/" element={<Update />}></Route>
                 
              </Routes>
              
           </div>
         <Footer/>
      
     </Router>
   </div>
    
  );
}

export default App;
