import React, { useState, useEffect } from "react";
import SearchSection from './SearchSection'
import "./BookComponent.css";
import BookItem from "./BookItem";
import { ToastContainer } from "react-toastify";
import axios from "axios";
const BookComponent = () => {
  const [books, setBooks] = useState([]);
  const url = new URL(window.location)
console.log(window.location)
  useEffect(async () => {
    let booksSwap = []
    axios(`${process.env.REACT_APP_BASE_URL}/book`).then(bookData => {
      
      console.log(bookData.data);
      if(url.searchParams.get('search')) {
        bookData.data.forEach(book => {
          if(book.title.match(new RegExp(url.searchParams.get('search') , 'gi'))){
            booksSwap.push(book)
          }
        })
        bookData.data.forEach(book => {
          if(booksSwap.every(boo => boo.id != book.id) && book.artist.match(new RegExp(url.searchParams.get('search') , 'gi'))){
            booksSwap.push(book)
          }
        })
      }else{
      console.log('first')
      booksSwap = bookData.data
    }
    
    if(url.searchParams.get('from') || url.searchParams.get('to')){
      let from = url.searchParams.get('from') || 0
      let to = url.searchParams.get('to') || Infinity
      booksSwap = booksSwap.filter( book => {
        return book.price >= from && book.price <= to
      })
    }
    
    if(url.searchParams.get('sort')){
      if(url.searchParams.get('sort') == 'alphabet') booksSwap.sort((a,b) => {
        if(a.title.toLowerCase().charCodeAt(0) > b.title.toLowerCase().charCodeAt(0) ){
          return 1 
        }else if(a.title.toLowerCase().charCodeAt(0) < b.title.toLowerCase().charCodeAt(0) ){
          return -1
        }else {
          return 0
        }
      })
      
      if(url.searchParams.get('sort') == 'alphabet-D') booksSwap.sort((a,b) => {
        if(a.title.toLowerCase().charCodeAt(0) < b.title.toLowerCase().charCodeAt(0) ){
          return 1 
        }else if(a.title.toLowerCase().charCodeAt(0) > b.title.toLowerCase().charCodeAt(0) ){
          return -1
        }else {
          return 0
        }
      })
      
      if(url.searchParams.get('sort') == 'price') booksSwap.sort((a,b) => {
        if(a.price > b.price){
          return 1 
        }else if(a.price < b.price ){
          return -1
        }else {
          return 0
        }
      })
      
      if(url.searchParams.get('sort') == 'price') booksSwap.sort((a,b) => {
  if(a.price < b.price){
    return 1 
  }else if(a.price > b.price ){
    return -1
  }else {
    return 0
  }
})
}
setBooks(booksSwap);
})
}, []);
  return (
    <div id="shop">
      
      <br></br>
      <h1 style={{ textAlign: "center", fontFamily: "Open sans", fontSize: 40}}>{url.searchParams.get('search') ? `Searched for : ${url.searchParams.get('search')}` : 'Recently Books Added'  } </h1>
      <SearchSection />
      <ul className="book-list">
        {books.map((book, index) => (
            <BookItem book={book} key={index} />
        ))}
      </ul>
      {!books.length && <p className="bookFound">book not found :(</p> }
      <ToastContainer />
    </div>
  );
};

export default BookComponent;
