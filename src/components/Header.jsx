import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div class="header">
    <div class="logo">
        <h1><i class="fas fa-book"></i> SecondHand Books Web</h1>
    </div>
    <div class="nav">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Sellers</a></li>
            <li><a href="#">About</a></li>
            <li><Link to="/cart">cart</Link></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    <div class="menu-toggle">
        <i class="fas fa-bars"></i>
    </div>
</div>
  )
}
