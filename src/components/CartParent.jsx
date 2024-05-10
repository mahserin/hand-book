import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import books from './../data.json'
export default function CartParent() {
    const [cookie , setCookie , removeCookie] = useCookies('cart')
    const [bookCart , setBookCart] = useState([])
    useEffect(() => {
        let booksSwap = []
        cookie.cart.forEach(cookie => {
            booksSwap.push( books.cd.find(book => book.id == cookie))
        })
        setBookCart(booksSwap)
    }, [])
    console.log(bookCart);
  return (
    <>
    <h3>your cart : </h3>
    <div>
{/* {bookCart.forEach(book =>)} */}
    </div>
    </>
  )
}
