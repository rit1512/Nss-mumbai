import React, { Component } from 'react';

class Footer extends Component {
   
    
    render() { 
        return ( 
            <div>
<footer class="footer-distributed">

<div class="footer-right">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

</div>

<div class="footer-left">

    <p class="footer-links">
        <a class="link-1" href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Advisory Board</a>
        <a href="#">Collab & International Reach</a>
        <a href="#">Achievement</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
    </p>

    <p>NSS &copy; 2019</p>
</div>

</footer>
            </div>
         );
    }
}
 
export default Footer;
