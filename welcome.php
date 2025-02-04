<!doctype html>
<html id="top" lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - FastGrocery</title>
    <meta name="description" content="AI Powered Grocery website.">
    <meta name="author" content="Ronak Shah">
    <!-- <link rel="stylesheet" href="css/reset.css"> -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="css/login.css">
  </head>
  <body>
    <header class="page-header">
      <!-- Logo -->
      <a href="index.html" class="logo"> <img src="img/logo/logo.png" alt="Fast Grocery Logo"><!-- Site logo --></a>
    </header>

    <main>
        Good to see you again! Your email address is: <?php echo $_POST["email"]; ?><br>
    </main>

    <!-- Site footer -->
    <footer class="page-footer">
        <div class="container">
            <div class="footer-sections">
              <h3>About</h3>
              <p class="footer-about-us">FastGrocery is an online grocery delivery service. It was founded in December 2013 and is based out of Mumbai. 
                As of 2018, the company has raised about $535.5 million from investors including SoftBank, Tiger Global and Sequoia Capital.
              </p>
            </div>
  
            <div class="footer-sections">
              <h3>Get started</h3>
              <ul class="footer-links">
                <li><a href="">Home</a></li>
                <li><a href="">Sign Up</a></li>
                <li><a href="">Offers</a></li>
              </ul>
            </div>
  
            <div class="footer-sections">
              <h3>Quick Links</h3>
              <ul class="footer-links">
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Sitemap</a></li>
              </ul>
            </div>
  
            <div class="footer-sections">
              <h3>Support</h3>
              <ul class="footer-links">
                <li><a href="">FAQs</a></li>
                <li><a href="">Help desk</a></li>
                <li><a href="">Forums</a></li>
              </ul>
            </div>
  
            <div class="footer-sections">
              <h3>Follow us on</h3>
              <div class="footer-links">
                <ul class="social-icons">
                  <li><a class="" href="#"> <img src="img/social/facebook.svg" alt="Facebook Icon"> </a></li>
                  <li><a class="" href="#"> <img src="img/social/twitter.svg" alt="Twitter Icon"> </a></li>
                </ul>
              </div>
            </div>
        </div>
        <hr>
        <div class="">
            <div class="container-reserved">
              <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
                <a href="#">FastGrocery</a>.
              </p>
              <a href="#top">Jump to top of page</a>
            </div>
        </div>
      </footer>
  
      <script src="js/login.js"></script>
  
    </body>
  </html>