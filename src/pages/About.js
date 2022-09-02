import React from "react";
import Nav from "../components/Nav";
import './About.css'
const About = () => {
  return (
      <>
      <Nav/>
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
                Able to effectively self-manage during independent projects, as
                well as collaborate in a team setting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default About
