import React from "react";
import Nav from "../components/Nav";
import Projects from "../components/Projects"
import Contact from "./Contact";

export default function Home() {
  return (
    <React.Fragment>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo">
            {" "}
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>

          <h1 className="logo">
            <a href="index.html">Folio</a>
          </h1>
        </div>
      </header>
      <Nav />

      <div id="hero" className="home">
        <div className="container">
          <div className="hero-content">
            <h1>
              {" "}
              <span
                className="typed"
                data-typed-items="Mohamed Omar, Designer, Developer, CEO"
              ></span>
            </h1>
            <p>Designer, Developer, CEO</p>

            <ul className="list-unstyled list-social">
              <li>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              {/* <li>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li> */}
              <li>
                <a href="https://github.com/Moetive">
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/moetive/">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <main id="main">
        <div id="about" className="paddsection">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 ">
                <div className="div-img-bg">
                  <div className="about-img">
                    <img
                      src="assets/img/me.jpg"
                      className="img-responsive"
                      alt="me"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="about-descr">
                  <p className="p-heading">
                    Dependable software development student with extensive
                    background in IT and cloud infrastructure management.{" "}
                  </p>
                  <p className="separator">
                    Able to effectively self-manage during independent projects,
                    as well as collaborate in a team setting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="services">
          <div className="container">
            <div
              className="services-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="services-block">
                    {/* <i className="bi bi-briefcase"></i> */}
                    {/* <span>UI/UX DESIGN</span> */}
                    {/* <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p> */}
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-card-checklist"></i>
                    <span>BRAND IDENTITY</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-bar-chart"></i>
                    <span>WEB DESIGN</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-binoculars"></i>
                    <span>MOBILE APPS</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-brightness-high"></i>
                    <span>Analytics</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-calendar4-week"></i>
                    <span>PHOTOGRAPHY</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>

        <div id="portfolio" className="paddsection">
          <div className="container">
            <div className="section-title text-center">
              {/* <h2>My Portfolio</h2> */}
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                {/* <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul> */}
              </div>
            </div>

            {/* <Projects/> */}
          </div>
        </div>

        {/* <div id="journal" className="text-left paddsection">
          <div className="container">
            <div className="section-title text-center">
              <h2>journal</h2>
            </div>
          </div>

          <div className="container">
            <div className="journal-block">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="journal-info">
                    <a href="blog-single.html">
                      <img
                        src="assets/img/blog-post-1.jpg"
                        className="img-responsive"
                        alt="img"
                      />
                    </a>

                    <div className="journal-txt">
                      <h4>
                        <a href="blog-single.html">
                          SO LETS MAKE THE MOST IS BEAUTIFUL
                        </a>
                      </h4>
                      <p className="separator">
                        To an English person, it will seem like simplified
                        English
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="journal-info">
                    <a href="blog-single.html">
                      <img
                        src="assets/img/blog-post-2.jpg"
                        className="img-responsive"
                        alt="img"
                      />
                    </a>

                    <div className="journal-txt">
                      <h4>
                        <a href="blog-single.html">
                          WE'RE GONA MAKE DREAMS COMES
                        </a>
                      </h4>
                      <p className="separator">
                        To an English person, it will seem like simplified
                        English
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="journal-info">
                    <a href="blog-single.html">
                      <img
                        src="assets/img/blog-post-3.jpg"
                        className="img-responsive"
                        alt="img"
                      />
                    </a>

                    <div className="journal-txt">
                      <h4>
                        <a href="blog-single.html">
                          NEW LIFE CIVILIZATIONS TO BOLDLY
                        </a>
                      </h4>
                      <p className="separator">
                        To an English person, it will seem like simplified
                        English
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Contact/>
      </main>

      <div id="footer" className="text-center">
        <div className="container">
          <div className="socials-media text-center">
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Moetive">
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/moetive">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="mailto:dev@moetive.anonaddy.com">
                  <i className="bi bi bi-mailbox"></i>
                </a>
              </li>
            </ul>
          </div>

          <p>&copy; Copyrights Mohamed Omar</p>
        </div>
      </div>
    </React.Fragment>
  );
}
