import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Adopt.css";
import AdoptForm from "./AdoptForm";
import DTable from "./DTable";
import CTable from "./CTable";
export default function Adopt() {
  const [choose, setChoose] = useState("dogs");

  return (
    <div className="container adopt">
      {/* <!--AdoptForm Modal --> */}

      <div
        className="modal fade "
        id="adopt"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content "
            style={{ backgroundColor: "#e7f4f8" }}
          >
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                Adopt a pet
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <AdoptForm />
            </div>
          </div>
        </div>
      </div>

      {/* <!--Pets table Modal --> */}

      <div
        className="modal fade"
        id="pets"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#e7f4f8" }}>
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                What all pets do we have ?
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="gap-1 d-flex">
                <Link to="/" onClick={() => setChoose("dogs")} className="view">
                  <h5>DOGS</h5>
                </Link>{" "}
                <span>|</span>{" "}
                <Link to="/" onClick={() => setChoose("cats")} className="view">
                  <h5>CATS</h5>{" "}
                </Link>
              </div>
              {choose === "dogs" ? <DTable /> : <CTable />}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-7 pt-3">
          <div className="adopt-head ">
            <h4>Welcome to the Animal Shelter ! </h4>
          </div>
          <p className="adopt-cont pt-2">
            Glad that you care for the animals so much. We make sure that you’ll
            not repent your decision of adopting your favorite pet !!
          </p>
        </div>
        <div className="col-12 col-sm-5 text-center pb-3">
          <img src="./image/img1.jpg" alt="img" width="400" height="100" />
        </div>
      </div>

      <div className="col-12 col-sm-12 ">
        <div className="adopt-button d-grid gap-2 d-md-flex justify-content-md-start">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#adopt"
            className="btn btn-outline-danger adopt-btn"
          >
            Adopt
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#pets"
            className="btn btn-outline-dark "
          >
            What all pets do we have ?
          </button>
        </div>
      </div>
    </div>
  );
}
