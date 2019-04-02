<!DOCTYPE html>
<html lang="en">

  <head>
      <!--
            TODO
                1. REDESIGN the look of the contact form
                2. Develop "more" projects page
                3. ADAPT MOBILE VIEW
                4. ADD ALL PROJECTS TO DATABASE
                5. CREATE FUNCTIONALITY OF PHP FORM  --DONE

      -->

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Reign Westry Portfolio">
    <meta name="author" content="Reign Westry">

    <title>Reign Westry</title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!--Font Awesome 5.7.0 -->
    <link rel="stylesheet" href="vendor/fontawesome-free/css/all.css">

    <!-- Custom Fonts -->
       <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">

    <!-- Simple Line Icon Font-->
    <!--link href="vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet"-->

    <!-- Custom CSS -->
    <link href="./css/stylish-portfolio.css" rel="stylesheet">

  </head>

  <!-- TODO
          CHANGE PORTRAIT IMAGE BACKGROUND TO TRANSPARENT

  -->
  <body id="page-top">

    <!-- Navigation -->
    <a class="menu-toggle rounded" href="#">
      <i class="fas fa-bars"></i>
    </a>
    <nav id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="sidebar-brand">
          <a class="js-scroll-trigger" href="#page-top">Reign Westry</a>
        </li>
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="#page-top">Home</a>
        </li>
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="#about">About</a>
        </li>
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="#services">Services</a>
        </li>
        <!--  ADD Websites page -->
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="portfolio.php">Websites</a>
        </li>
		<!-- ADD Android App page -->
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="Android-app.html">Android App</a><!-- TODO ADD
          ANDROID APP page -->
        </li>
        <!-- ADD iOs App page -->
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="iOs-app.html">iOs App</a>
        </li>
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>

    <!-- Header -->
    <header class="masthead d-flex">
      <div class="container text-center my-auto">
        <h1 class="mb-1 hero-header">Reign Westry</h1>
        <h3 class="mb-5">
          <em class="hero-subtitle">Full-Stack Developer</em>
        </h3>
        <a class="btn  btn-primary btn-xl js-scroll-trigger" href="#about">Find Out
          More</a>
      </div>
      <div class="overlay"></div>
    </header>
    <!-- Services -->
    <section class="content-section bg-primary text-white text-center" id="services">
      <div class="container">
        <div class="content-section-heading">
          <h3 class="text-secondary mb-0">Languages & Skills</h3>
          <h2 class="mb-5 secondary-header">What I've Learned</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span class="service-icon rounded-circle mx-auto mb-3 custom-icon">
              <i class="fas fa-list"></i>
            </span>
            <h4>
              <strong>Skills</strong>
            </h4>
            <p class="text-faded mb-0">Looks great on any screen size!</p>
            <ul class="skill-list">
              <li>Responsive Web Design & Development</li>
              <li>Front-End Development</li>
              <li>Back-End Development</li>
              <li>Landing Page Development</li>
              <li>eCommerce Websites</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span class="service-icon rounded-circle mx-auto mb-3 custom-icon">
              <i class="fab fa-android" alt="Android logo"></i>
            </span>
            <h4>
              <strong>Android App Development</strong>
            </h4>
            <p class="text-faded mb-0">Freshly redesigned for Bootstrap 4.</p>

            <ul class="skill-list">
              <li>Java</li>
              <li>Android Studio</li>
            </ul>

          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span class="service-icon rounded-circle mx-auto mb-3 custom-icon">
              <i class="fas fa-desktop"></i>
            </span>
            <h4>
              <strong>Responsive Web Development</strong>
            </h4>
            <p class="text-faded mb-0">Millions of users
              <i class="fas fa-heart"></i>
              Start Bootstrap!</p>

            <ul class="skill-list">
              <li>HTML5 & CSS3</li>
              <li>PHP & MySQL</li>
              <li>SASS</li>
              <li>Javascript</li>
              <li>Wordpress Customization</li>
              <li>SEO Customization</li>
              <li>BootStrap</li>
            </ul>

          </div>
          <div class="col-lg-3 col-md-6">
            <span class="service-icon rounded-circle mx-auto mb-3 custom-icon">
              <i class="fab fa-apple" aria-hidden="true"  alt="Apple Applications"></i>
            </span>
            <h4>
              <strong>iOS App Development</strong>
            </h4>
            <p class="text-faded mb-0">I mustache you a question...</p>

            <ul class="skill-list">
              <li>Objective-C</li>
              <li>Xcode</li>
              <li>Swift 3</li>
            </ul>

          </div>
        </div>
      </div>
    </section>


    <!-- Portfolio -->
    <section class="content-section" id="portfolio">
      <div class="container">
        <div class="content-section-heading text-center">
          <h3 class=" mb-0 third-font-style">Portfolio</h3>
          <h2 class="mb-5 secondary-header">Recent Projects</h2>
        </div>
      </div>

      <div class="container gallery">
        <div class="row no-gutters">

            <!-- TODO
                  1. AUTO POPULATE projects LIST WITH PHP & MYSQL DATA (Order: Latest to Oldest)
                  2.
              -->


          <!-- note PROJECT 1  -- SOC SCONCES -->
          <div class="col-lg-4">
            <a class="portfolio-item" href="./projects/SOC-Scones/index.html">
              <span class="caption">
                <span class="caption-content">
                  <h2>SOC Scones Recipe</h2>
                  <p class="mb-0">HTML, CSS</p>
                </span>
              </span>
              <img class="img-fluid" src="./projects/SOC-Scones/scones-thumb.png"
                   alt="SOC SCONES RECIPE">
            </a>
          </div>



          <!-- note PROJECT 2 -- ACME-HTML5_Responsive_Layout_Website todo ADD -->
          <div class="col-lg-4">
            <a class="portfolio-item"
               href="./projects/ACME-HTML5_Responsive_Layout_Website/index.php">
              <span class="caption">
                <span class="caption-content">
                  <h2>ACME</h2>
                  <p class="mb-0">HTML, CSS</p>
                </span>
              </span>
              <img class="img-fluid"
                   src="./projects/ACME-HTML5_Responsive_Layout_Website/thumb.png"
                   alt="ACME (HTML5)Responsive Layout Website">
            </a>
          </div>

          <!--note PROJECT 3 -- GIRL SCOUT COOKIE FORM-->
          <div class="col-lg-4">
            <a class="portfolio-item"
               href="./projects/GirlScoutForm/Js-GirlScoutCookieForm/index.html">
              <span class="caption">
                <span class="caption-content">
                  <h2>GIRL SCOUT COOKIE FORM</h2>
                  <p class="mb-0">HTML, CSS, Javascript</p>
                </span>
              </span>
              <img class="img-fluid"
                   src="./projects/GirlScoutForm/thumb.png"
                   alt="Girl Scout Cookie Form Test">
            </a>
          </div>

          <!-- PROJECT 4 -- Javascript Tip Calculator-->
          <div class="col-lg-4">
            <a class="portfolio-item" href="./projects/Js_TipCalculator/index.html">
              <span class="caption">
                <span class="caption-content">
                  <h2>Tip Calculator</h2>
                  <p class="mb-0">HTML, CSS, JS</p>
                </span>
              </span>
              <img class="img-fluid" src="./projects/Js_TipCalculator/thumb.png"
                   alt="Javascript Tip Calculator">
            </a>
          </div>

          <!-- PROJECT 5 -- OMNIFOOD -->
          <div class="col-lg-4">
            <a class="portfolio-item" href="./projects/PROJECT-OMNIFOOD/index.html">
              <span class="caption">
                <span class="caption-content">
                  <h2>OMNIFOOD</h2>
                  <p class="mb-0">HTML, CSS, SCSS</p>
                </span>
              </span>
              <img class="img-fluid" src="./projects/PROJECT-OMNIFOOD/thumb.png" alt="OMNIFOOD">
            </a>
          </div>

          <!-- PROJECT 6 -- DayCare -->
          <div class="col-lg-4">
            <a class="portfolio-item" href="projects/PROJECT-OMNIFOOD/index.php">
              <span class="caption">
                <span class="caption-content">
                  <h2>DayCare</h2>
                  <p class="mb-0">PHP, HTML, CSS, SCSS</p>
                </span>
              </span>
              <img class="img-fluid" src="projects/DayCare/thumb.png" alt="DayCare Landing Page">
            </a>
          </div>

        </div>
      </div>
        <!-- Callout -->
        <div class="callout text-center">

            <a class="btn btn-primary btn-xl" href="portfolio.html">Check Out More</a>
        </div>
    </section>




    <!-- About -->
    <section class="content-section bg-light parallax" id="about">
      <div class="overlay">
        <div class="container text-center">
          <div class="row background-shade">

            <div class="col-lg-4">
              <img src="..myImgs/Portrait/Professional_portrait.png"
                   alt="Reign Westry - Full-Stack Developer" class="portrait-img">
            </div>
            <div class="col-lg-8 mx-auto">

              <h2 class="primary-font-style">Thanks for stopping by!</h2>
              <p class="lead mb-5 sub-text">2019 graduate full-stack developer
                focusing
                in
                full-stack web/app
                development. Always looking for new projects, clients, and colleagues. So, please
                don't hesitate to contact me.</p>

              <h2 class="secondary-font-style">Why I chose this profession?</h2>
              <p class="lead mb-5 sub-text">From the time I was little drawing blueprints for
                imaginary
                buildings, cars, and inventions to now and taking apart things to learn how they
                work. I have always loved to create, modify, and update things. Now, I spend most
                of the time looking at things and thinking of ways to improve them. For me, it is like
                beating a challenging game or solving a difficult equation. I simply love the
                feeling of accomplishing something and learning how things tick. If it helps or
                improves something that has a negative effect in the world? Those are bonuses to me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Contact Section -->
    <section class="contact-section bg-primary text-white">

      <div class="container text-center">
          <h2 class="mb-4">Have a idea, need a developer... Let's Chat!</h2>
          <!-- a href="#" class="btn btn-xl btn-light mr-4">Click Me!</a-->

          <!-- TODO FINISH DESIGNING AND BUILDING FORM -->
          <!-- FORM -->
          <form class="col-md-6 form-design contact-form" action="mail/contactForm.php"
          method="post">
              <fieldset>
                  <label for="fname"><span>*</span>First Name: </label><br>
                    <input type="text" alt="first-name" name="fname" class="col-md-4" 
                           placeholder="First Name" required><br>
                  <label for="lname"><span>*</span>Last Name: </label><br>
                    <input type="text" alt="last-name" name="lname" class="col-md-4" 
                           placeholder="Last Name" required><br>
                  <label for="phone" >Phone: </label><br>
                    <input type="phone" alt="phone" name="phone" class="col-md-4"
                           placeholder="000-000-0000" ><br>
                  <label for="email"><span>*</span>Email: </label><br>
                    <input type="email" alt="email" name="email" class="col-md-4"
                           placeholder="you@youremail.com" required>

              </fieldset>
              <label><span>*</span>Message:</label>
              <textarea class="message" name="message" aria-placeholder="Tell me
              about your idea"
                        required>
              </textarea>

              <button type="submit" name="submit" class="btn btn-xl btn-dark">SEND</button>
          </form>
      </div>
    </section>

    <!-- Map -->
    <section id="contact" class="map">
      <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0"
      marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode
      =&amp;q=Atlanta,+GA&amp;aq=0&amp;oq=twitter&amp;sll=33.753746,-84.386330.&amp;sspn=0
      .128789,0.264187&amp;ie=UTF8&amp;hq=Atlanta,+GA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
      <br/>
      <small>
        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;
        q=Atlanta,+GA&amp;aq=0&amp;oq=twitter&amp;sll=33.753746,-84
        .386330&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Atlanta,+GA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
      </small>
    </section>

    <!-- Footer -->
    <footer class="footer text-center">
      <div class="container">
        <ul class="list-inline mb-5">

          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white mr-3" href="#">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white mr-3" href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white mr-3" href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white" href="#">
              <i class="fab fa-github"></i>
            </a>
          </li>
            <!-- TODO ADD FREELANCER.COM ICON AND LINK
          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white" href="#">
              <i class="fab fa-github"></i>
            </a>
          </li-->
        </ul>
        <p class="text-muted small mb-0">Copyright &copy; <a
                href="https://www.reignwestry.com">Reign Westry</a>
          2019
        </p>
      </div>
    </footer>

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded js-scroll-trigger" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for this template -->
    <script src="js/stylish-portfolio.min.js"></script>

    <!-- Google Map Custom scripts  -->
    <script src="js/google-map.js"></script>

  </body>

</html>
