import React, { useEffect, useState } from 'react'

import axios from 'axios'

export default function Cart() {
    const [books , setBooks] = useState([])
    useEffect(() => {
        axios(`${process.env.REACT_APP_BASE_URL}/book`).then(res => {
            setBooks(res.data)
        })
    })
    
    const newBookHandler = (e) => {
        e.preventDefault()
        console.log({title : document.getElementById('title').value ,
        author : document.getElementById('author').value,
        price : document.getElementById('price').value
    });
        axios.post(`${process.env.REACT_APP_BASE_URL}/book` , {title : document.getElementById('title').value ,
            author : document.getElementById('author').value,
            price : document.getElementById('price').value
        }).then(res => {console.log(res.data);})
    }
    const deleteBookHandler = e => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/book/${e.target.dataset.id}`).then(res => {
            console.log(res);
        })
    }
  return (
    <>
        <form>
            <h2>new book</h2>
            <p>title : </p>
            <input type="text" id='title' />
            <p>author : </p>
            <input type="text" id='author' />
            <p>price : </p>
            <input type="text" id='price' />
            <button onClick={newBookHandler}>submit</button>
        </form>

        <h2>books : </h2>
        {books.map(book => (<div>
            <h4>book : {book.title}</h4>
            <p>author : {book.author}</p>
            <p>price : {book.price}</p>
            <button data-id={book._id} onClick={deleteBookHandler}>delete</button>
        </div>))}

    </>
  )
}
