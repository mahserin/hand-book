import React from 'react'
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BookItem(props) {
  const [cookie, setCookie, removeCookie] = useCookies(['cart'])

  const addToCartHandler = e => {
    setCookie('cart', cookie?.cart ? [...cookie.cart, e.target.dataset.bookId] : [e.target.dataset.bookId])
    toast("added to cart 😊")
  }


  return (
    <>
    
      <li className="book-item">
        <ul style={{ textAlign: "center", fontSize: 16 }} className="book-info">
          <li> Title: {props?.book.title}</li>
          <li>Author: {props?.book.artist}</li>
          <li>Price: {props?.book.price} $</li>
          <li>
            <button className="cart-btn" onClick={addToCartHandler} data-book-id={props?.book.id}>add to cart</button>
          </li>
        </ul>
      </li>
    </>
  )
}
