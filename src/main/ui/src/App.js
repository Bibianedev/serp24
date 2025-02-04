import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Consultants from './components/Consultants';
import Costumers from './components/Customers';
import Entries from './components/Entries';
import UserMapping from './components/UserMapping';
import TestUser from './components/UserLogin';
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from './components/Projects';
import { useEffect, useState } from 'react';
import NewCustomer from './components/NewCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import NewConsultant from './components/NewConsultant.js';
import NewProject from './components/NewProject.js';
import NewEntry from './components/NewEntry.js';



function App() {
 const [currentRoute, setCurrentRoute] = useState();

 useEffect(() => {
  const path = window.location.pathname.toLocaleLowerCase();
  setCurrentRoute(path.slice(1, path.length));
 }, []);

 return (
     <BrowserRouter>
      <nav className='m-1 p-1 border border-info'>
       <ul className='nav na-pills'>
        <li>
         <Link
             onClick={() => setCurrentRoute("home")}
             className={currentRoute === "home" ? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'} style={{ border: 'none' }} to={"/"}>Home</Link>
        </li>
        <li>
         <Link
             onClick={() => setCurrentRoute("costumers")}
             className={currentRoute == "costumers" ? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'} style={{ border: 'none' }} to={"/costumers"}>Costumers
         </Link>
        </li>
        <li>
         <Link
             onClick={() => setCurrentRoute("consultants")}
             className={currentRoute == "consultants" ? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'} style={{ border: 'none' }} to={"/consultants"}>Consultants
         </Link>
        </li>
        <li>
         <Link
             onClick={() => setCurrentRoute("projects")}
             className={currentRoute == "projects" ? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'} style={{ border: 'none' }} to={"/projects"}>Projects
         </Link>
        </li>
        <li>
         <Link
             onClick={() => setCurrentRoute("entries")}
             className={currentRoute == "entries" ? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'} style={{ border: 'none' }} to={"/entries"}>Entries
         </Link>
        </li>
        <li>
         <Link
             onClick={() => setCurrentRoute("usermapping")}
             className={currentRoute == "usermapping" ? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'} style={{ border: 'none' }} to={"/usermapping"}>User Mapping
         </Link>
        </li>
        <div className="ms-auto d-flex">
         <li>
          <Link
              onClick={() => setCurrentRoute("testuser")}
              className={currentRoute == "testuser" ? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'} style={{border: 'none'} }>Test User
          </Link>
         </li>
         <button className='btn btn-info ms-1' >Logout</button>
        </div>
       </ul>
      </nav>
      <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/consultants" element={<Consultants />}></Route>
       <Route path="/costumers" element={<Costumers/>}></Route>
       <Route path="/projects" element={<Projects />}></Route>
       <Route path="/entries" element={<Entries />}></Route>
       <Route path="/usermapping" element={<UserMapping />}></Route>
       <Route path="/testuser" element={<TestUser />}></Route>
       <Route path="/newcustomer" element={<NewCustomer />}></Route>
       <Route path="/newconsultant" element={<NewConsultant/>}></Route>
       <Route path="/newentry" element={<NewEntry/>}></Route>
       <Route path="/newproject" element={<NewProject/>}></Route>
       <Route path="/updatecustomer/:id" element={<UpdateCustomer/>}></Route>
      </Routes>
     </BrowserRouter>
 );
}

export default App;
