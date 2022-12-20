import React from "react";
import "./GiveAway.css";
import GiveAwayForm from "./GiveAwayForm";

export default function GiveAway() {
  return (
    <div className="container give">
      <div
        className="modal fade"
        id="give"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#e7f4f8" }}>
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                Give Away
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <GiveAwayForm />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 give-head text-sm-end text-start">
          <h4>We do take in pets if you can’t take care of them !</h4>
        </div>

        <div className="col-12 col-sm-12 give-cont pt-2 text-sm-end text-start">
          <p>
            Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef
            efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb
            ebf uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe
            bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc
            fksdjfcekejsdfjkes efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb
          </p>
        </div>

        <div className="col-12 col-sm-12 btn-give d-flex d-sm-flex justify-content-sm-end justify-content-center">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#give"
            className="btn btn-outline-dark"
          >
            Give Away
          </button>
        </div>
      </div>
    </div>
  );
}
