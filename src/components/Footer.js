import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid footer ">
      <div className="container p-5">
        <div className="row pb-3">
          <div className="col-12 col-sm-4 foo">
            <div>
              <div className="d-flex d-sm-flex justify-content-sm-start justify-content-center">
                <img src="./image/logo2.png" alt="img" width="30" height="23" />
                <div className="foot-head ">ANIMAL SHELTER</div>
              </div>
              <p className="foot-cont pt-2 text-wrap">
                One of the best animal shelter places in India. We’re recognized
                by the government. Please take a pledge to take care of these
                lovely pets !
              </p>
            </div>
            <div className="col-12 col-sm-12 ">
              <div className="foot-button  d-grid  d-md-flex justify-content-md-start px-3 pb-3">
                <button
                  type="button"
                  className="btn btn-outline-danger footer-btn "
                >
                  <div className="textfoo">
                    Adopt
                    <span className="p-1">
                      <i className="fa fa-arrow-right "></i>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <hr className="style1 d-flex col-12 d-sm-none col-sm-12 " />

          <div className="col-12 col-sm-5">
            <div>
              <div className="foot-head">GET IN TOUCH</div>
              <div className="foot-cont pt-1 ">
                <div className="d-flex gap-2">
                  <div>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className="foot-cont">
                    <p>
                      llesfnee cnu efoin eoifn oewifnewo inf sdc csdcneno ie
                      woiwemfwokm fwe w ecen cloenwo we - 355233
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p>cisubdcusb@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-2">
              <div className="foot-head">FOLLOW US</div>
              <div
                className="d-flex gap-4 foot-cont pt-3 "
                style={{ fontSize: "15px" }}
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3">
            <div className="foot-head">QUICK LINKS</div>
            <div className="foot-cont pt-2">
              <div>HOME</div>
              <div> CONTACT US</div>
            </div>
          </div>
        </div>
        <hr className="style1 d-none  col-12 d-sm-flex col-sm-12 " />

        <div
          className="row foot1-cont d-flex justify-content-between pb-5"
          style={{ color: "#9ca3af" }}
        >
          <div className="col-12 col-sm-7 justify-content-center justify-content-sm-start">
            Copyright ©2023. Animal Shelter
          </div>
          <div className="d-none d-sm-flex col-sm-5 text-end gap-3 ">
            <Link to="/" className="text-light f">
              Privacy Policy
            </Link>
            <Link to="/" className="text-light f">
              Terms Of Service
            </Link>
            <Link to="/" className="text-light f">
              Cookies settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
