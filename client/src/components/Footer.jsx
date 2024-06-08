import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div class="footer-content">
        <div class="footer-section">
            <h3>About Us</h3>
            <p> Dive into the worn pages of well-loved novels and explore the narratives that have shaped
                literary history. </p>
            <br/>
        </div>
        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="footer-section">

            <p><strong>Designed by: Farahnaz Nikoukar</strong></p>
            <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="Books" width="100" height="100"/>

        </div>
    </div>
     {/* <h3 class="contact-us">Contact Us</h3>  */}
    <a href="mailto:40027163@stu.yazd.ac.ir" class="contact-btn">Contact us</a>
</footer>
  )
}
