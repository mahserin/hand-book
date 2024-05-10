import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import books from './../data.json'
import "./CartParent.css"
import { Link } from 'react-router-dom'

export default function CartParent() {
  const [cookie, setCookie, removeCookie] = useCookies('cart')
  const [updateCookie , setUpdateCookie] = useState(0)
  const [bookCart, setBookCart] = useState([])
  useEffect(() => {
    let booksSwap = []
    cookie.cart.forEach(cookie => {
      booksSwap.push(books.cd.find(book => book.id == cookie))
    })
    setBookCart(booksSwap)
  }, [updateCookie])

  const deleteFromCartHandler = e => {
    let cookieSwap = cookie.cart
    cookieSwap.splice(e.target.dataset.bookIndex , 1)
    setCookie('cart' , cookieSwap)
    setUpdateCookie(updateCookie + 1)

  }
console.log(bookCart)
  return (
    <>
      <h3 className='cart-title'>your cart : </h3>
      <ul>
        {bookCart ? bookCart.map((book , index) => (<li className="book-item" key={index}>
            <ul style={{ textAlign: "center", fontSize: 16 }} className="book-info">
              <li> Title: {book.title}</li>
              <li>Author: {book.artist}</li>
              <li>Price: {book.price} $</li>
              <li>
                <button className="cart-btn" onClick={deleteFromCartHandler} data-book-index={book.index}>delete from cart</button>
              </li>
            </ul>
          </li>)) : ''}
          {!!bookCart.length || <h2 className='empty-cart'> this cart is empty ☹️ <br /> <Link to={'/#shop'}>go to the shop</Link></h2>}
      </ul>
    </>
  )
}
