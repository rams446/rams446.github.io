
import './App.css';
import './style.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Ebooks from './pages/Ebooks';
import Freeebooks from './pages/Freeebooks';
import Freeebooksdisplay from './pages/Freeebooksdisplay'
import Paidebooks from './pages/Paidebooks';
import './logo.webp'
import Footer from './components/Footer';


function App() {
  const apiKey="AIzaSyB4wJL3EjIUk3PzosN6cXK_SMn6jlrwU7M";
  const [book,setBook]=useState(null)
  const [freeebooks,setFreeebooks]=useState(null)
  const [ebooks,setEbooks]=useState(null)
  const [paidebooks,setPaidebooks]=useState(null)
  // const getbook=async(searchTerm)=>{
  //   try{
  //     const  response=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`);
     
  //     const data=await response.json();
  //     setBook(data)
  //   }catch(e){console.error(e)}
  // };
  
  const fetchData =  (searchterm) => {
    try {
      //const apiKey="AIzaSyCEpE36cwIYwvnKjk-xDm3ptkaKoP7oASE";
      const apiKey="AIzaSyB4wJL3EjIUk3PzosN6cXK_SMn6jlrwU7M";
      const apiCallbook = fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&maxResults=20&key=${apiKey}`);
      const apiCallfreeebooks =fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&filter=free-ebooks&maxResults=20&key=${apiKey}`);
      const apiCallebooks =fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&filter=ebooks&maxResults=20&key=${apiKey}`);
      const apiCallpaidebooks =fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&filter=paid-ebooks&maxResults=20&key=${apiKey}`);
    
      const response =  Promise.all([
        apiCallbook,
        apiCallfreeebooks,
        apiCallebooks,
        apiCallpaidebooks,
      ]).then(responses => {
         return Promise.all(responses.map(r=> r.json()));
      }).then(([book, freeBook, ebook, paidEbook])=>{
        // console.log(book);
        console.log(freeBook);
        console.log(ebook);
        console.log(paidEbook);
       
        // setBook(book)  
        setBook(book)   
        setFreeebooks(freeBook)    
        setEbooks(ebook)
        setPaidebooks(paidEbook)
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
         <Route path='/freeebooks' element={ <Freeebooks freeEbook={freeebooks}/>}/>
         <Route path='/freeebooks/:symbol' element={<Freeebooksdisplay freeEbook={freeebooks}/>}/>
         <Route path='/ebooks' element={<Ebooks   Ebooks={Ebooks}/>}/> 
         <Route path='/paidebooks' element={<Paidebooks Paidebooks={paidebooks}/>}/>
      </Routes>
      </div>
      <br/>
      <br/>
      <Footer/> 
    </div>
  );
}

export default App;
