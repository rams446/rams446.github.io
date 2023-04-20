
import './App.css';
import './style.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Ebooks from './pages/Ebooks';
import Freeebooks from './pages/Freeebooks';
import Paidebooks from './pages/Paidebooks';
import Partial from './pages/Partial';
import Freeebooksdisplay from './pages/Freeebooksdisplay';
import './logo.png'

function App() {
  const apiKey="AIzaSyCEpE36cwIYwvnKjk-xDm3ptkaKoP7oASE";
  // const [book,setBook]=useState(null)
  const [freeebooks,setFreeebooks]=useState(null)
  const [ebooks,setEbooks]=useState(null)
  const [paidebooks,setPaidebooks]=useState(null)
  const [partial,setPartial]=useState(null)
  // const getbook=async(searchTerm)=>{
  //   try{
  //     const  response=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`);
     
  //     const data=await response.json();
  //     setBook(data)
  //   }catch(e){console.error(e)}
  // };
  
  const fetchData =  (searchterm) => {
    try {
      const apiKey="AIzaSyCEpE36cwIYwvnKjk-xDm3ptkaKoP7oASE";
      // const apiCallbook = fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${apiKey}`);
      const apiCallfreeebooks =fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&filter=free-ebooks&key=${apiKey}`);
      const apiCallebooks =fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&filter=ebooks&key=${apiKey}`);
      const apiCallpaidebooks =fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&filter=paid-ebooks&key=${apiKey}`);
      const apiCallpartial =fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&filter=partial&key=${apiKey}`);
   
      const response =  Promise.all([
        // apiCallbook,
        apiCallfreeebooks,
        apiCallebooks,
        apiCallpaidebooks,
        apiCallpartial
      ]).then(responses => {
       
        // const data =  responses[0].text();
        // const data1 = responses[1].text()
        // const data2 = responses[2].text()
        // const data3= responses[3].text()
        // const data4= responses[4].text()
        // console.log("eye catcher")
        // console.log("hi: "+JSON.stringify(data1))
        // console.log("hi: "+JSON.stringify(data))
        // console.log("hi: "+JSON.stringify(data2))
        // console.log("hi: "+JSON.stringify(data3))
        // console.log("hi: "+JSON.stringify(data4))
        // console.log("eye catcher")
        // setBook(data)     
        // setFreeebooks(data1)    
        // setEbooks(data2)
        // setPaidebooks(data3)
        // setPartial(data4)
         console.log(responses)
         return Promise.all(responses.map(r=> r.json()));
      }).then(([ freeBook, ebook, paidEbook, partial])=>{
        // console.log(book);
        console.log(freeBook);
        console.log(ebook);
        console.log(paidEbook);
        console.log(partial);
        // setBook(book)     
        setFreeebooks(freeBook)    
        setEbooks(ebook)
        setPaidebooks(paidEbook)
        setPartial(partial)
      }
        );


    } catch {
      throw Error("Promise failed");
    }
};
 
useEffect(()=>{
  fetchData ()
},[]);


 
  //  const Books = freeebooks.items.map((book, index) => {
  //        return <Ebooks {...book} key={index} />;

  //      })
 
  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
         <Route path='/' element={<Home />}/>
         {/* <Route path='/' element={<Homedisplay Book={book}/>}/> */}
         <Route path='/freeebooks' element={ 
      <Freeebooks freeEbook={freeebooks}/>}/>
      <Route path='/freeebooks/:symbol' element={ 
      <Freeebooksdisplay freeEbook={freeebooks}/>}/>
         <Route path='/ebooks' element={<Ebooks  Ebooks={ebooks}/>}/> 
         <Route path='/paidebooks' element={<Paidebooks Paidebooks={paidebooks}/>}/>
         <Route path='/partial' element={<Partial Partial={partial}/>}/>
      </Routes>
    </div>
  );
}

export default App;
