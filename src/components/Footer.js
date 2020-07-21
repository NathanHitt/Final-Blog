import React from 'react'
import { Link } from 'gatsby'
import '../../footer.css'

export default function MyFooter() {
    return (
        <footer id="footer" class="footer-1">
        <br/>
  <div class="main-footer widgets-dark typo-light">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="widget subscribe no-box">
            <h5 class="widget-title">Living To Your Own Beat<span></span></h5>
            <p>About the company, little discription will goes here.. </p>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="widget no-box">
            <h5 class="widget-title">Quick Links<span></span></h5>
            <ul class="thumbnail-widget">
              <li>
                <Link to="/" className="nav-link" activeClassName="active">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="nav-link" activeClassName="active">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="widget no-box">
            <h5 class="widget-title">Get Started<span></span></h5>
            <p>Sign up with us here</p>
            <a class="btn" href="#." target="_blank">Register Now</a>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3">

          <div class="widget no-box">
            <h5 class="widget-title">Contact Us<span></span></h5>

            <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
            <ul class="social-footer2">
                <li class="inline"><a href="https://twitter.com"><img src="https://img.icons8.com/ios/50/000000/twitter.png" width="25" height="25%"></img></a></li>
                <li class="inline"><a href="https://facebook.com"><img src="https://img.icons8.com/ios/50/000000/facebook-new.png" width="25" height="25%"></img></a></li>
                <li class="inline"><a href="https://youtube.com"><img src="https://img.icons8.com/small/100/000000/youtube.png" width="25" height="25%"></img></a></li>
                <li class="inline"><a href="https://instagram.com"><img src="https://img.icons8.com/metro/100/000000/instagram-new.png" width="25" height="25%"></img></a></li>

            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="footer-copyright">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <p>Copyright Laura Hitt © 2020. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}
