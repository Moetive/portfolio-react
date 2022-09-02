import React from "react";
import Nav from "../components/Nav";

const Contact = () => {
    return(<div>
        <div id="contact" className="paddsection">
          <div className="container">
            <div className="contact-block1">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-contact">
                    {/* <ul className="contact-details">
                      <li>
                        <span>23 Main, Street</span>
                      </li>
                      <li>
                        <span>New York, United States</span>
                      </li>
                      <li>
                        <span>+88 01912704287</span>
                      </li>
                      <li>
                        <span>example@example.com</span>
                      </li>
                    </ul> */}
                  </div>
                </div>
                <h2 className="d-flex justify-content-center ">GET IN TOUCH</h2>
                <h1 className="d-flex justify-content-center ">
                  <ul className=" d-flex justify-content-center list-unstyled">
                    {/* <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li> */}
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
                </h1>
                <div className="d-flex justify-content-center ">
                  {/* <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="row gy-3">
                      <div className="col-lg-6">
                        <div className="form-group contact-block1">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>

                      <div className="mt-0">
                        <input
                          type="submit"
                          className="btn btn-defeault btn-send"
                          value="Send message"
                        />
                      </div>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}
export default Contact