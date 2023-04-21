
import './App.css';
import './style.css'
import './logo.webp'
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ebooks from './pages/Ebooks';
import Freeebooks from './pages/Freeebooks';
import Paidebooks from './pages/Paidebooks';
import Partial from './pages/Partial';
import Partialbookdisplay from './pages/PartialbookDisplay';
import Full from './pages/Full';
import FullDisplay from './pages/FullDisplay';

//To Fetch the mutile API's we have used promise.all
function App() {
  const apiKey="AIzaSyB4wJL3EjIUk3PzosN6cXK_SMn6jlrwU7M";
  const [partial,setPartial]=useState(null)
  const [full,setFull]=useState(null)
  const fetchData =  (searchterm) => {
    try {
      //const apiKey="AIzaSyCEpE36cwIYwvnKjk-xDm3ptkaKoP7oASE";
      const apiKey="AIzaSyB4wJL3EjIUk3PzosN6cXK_SMn6jlrwU7M";
      const apiCallPartial =fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&filter=partial&maxResults=20&key=${apiKey}`);
      const apiCallfull =fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&filter=full&maxResults=20&key=${apiKey}`);
      const response =  Promise.all([
        apiCallPartial,
        apiCallfull
      ]).then(responses => {
         return Promise.all(responses.map(r=> r.json()));
      }).then(([partial,full])=>{
       
        setPartial(partial)
        setFull(full)
      }
        );
    } catch {
      throw Error("Promise failed");
    }
};
 
useEffect(()=>{
  
  fetchData()},[]);
 
  return (
    <div className="App">
      <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home  />}/>
         <Route path='/freeebooks' element={ <Freeebooks/>}/>
         <Route path='/ebooks' element={<Ebooks/>}/> 
         <Route path='/paidebooks' element={<Paidebooks/>}/>
         <Route path='/partial' element={<Partial Partial={partial}/>}/>
         <Route path='/partial/:symbol' element={<Partialbookdisplay Partial={partial}/>}/>
         <Route path='/full' element={<Full Full={full}/>}/>
         <Route path='/full/:symbol' element={<FullDisplay Full={full}/>}/>
      </Routes>
      </div>
      <br/>
      <br/>
      <Footer/> 
    </div>
  );
}

export default App;
