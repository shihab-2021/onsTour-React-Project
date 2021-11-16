import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="container" id="Contact">
        <div className="text-center">
          <h1>
            We’d Love to Hear{" "}
            <span className="text-color-update-2">From You</span>
          </h1>
          <p className="text-color-update">
            Whether you’re curious about ONSmedico, a free treatment, or even
            press—we’re ready to answer any and all questions.
          </p>
        </div>
        <div className="row my-5 pb-5">
          <div className="col-md-4 col-12">
            <div>
              <h1 className="text-color-update">Vancouver</h1>
              <p>
                400-401 West Georgia <br />
                St.Vancouver, BC, <br />
                Canada, V6B 5A1
              </p>
            </div>
            <div>
              <h1 className="text-color-update">Berlin</h1>
              <p>
                Unbounce Germany <br />
                GmbH (Apartment 1) <br />
                c/o Factory Works <br />
                GmbH Rheinsberger <br />
                Str. 76/77 10115 Berlin
              </p>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="row">
              <div className="col-md-6 col-12">
                <div>
                  <h1 className="text-color-update">Worldwide</h1>
                  <p>+1 604 484 1354</p>
                </div>
                <div>
                  <h1 className="text-color-update">United Kingdom</h1>
                  <p>+44 808 178 0202</p>
                </div>
                <div>
                  <h1 className="text-color-update">Bangladesh</h1>
                  <p>+880 195 497 7023</p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div>
                  <h1 className="text-color-update">
                    North America (Toll Free)
                  </h1>
                  <p>+1 888 515 9161</p>
                </div>
                <div>
                  <h1 className="text-color-update">Australia</h1>
                  <p>+61 1800 861 218</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
