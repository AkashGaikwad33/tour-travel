import React from "react";
import img13 from "../../Media/img13.jpg";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <from method=''>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={img13} alt="imges" />
              </div>
              <img src={img13} alt="imges" />
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>JON Michel </h5>
                <h6>Priject Head</h6>
                <p className="profile-rating mt-3 mb-5">
                  Ranking<span>1/10</span>
                </p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="Home-tab"
                      data-toggle="tab"
                      href="#Home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="text"
                className="profile-edit-btn"
                name="btnAndMore"
                value="edit Profile"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p className="">WORK LINK</p>
                <a
                  href=" https://legacy.reactjs.org/docs/getting-started.html"
                  target="_React_Devloper"
                >
                  Youtube
                </a>
                <br />
                <a
                  href=" https://legacy.reactjs.org/docs/getting-started.html"
                  target="_React_Devloper"
                ></a>
                instagram
                <br />
                <a
                  href=" https://legacy.reactjs.org/docs/getting-started.html"
                  target="_React_Devloper"
                ></a>
                Twitter
                <br />
                <a
                  href=" https://legacy.reactjs.org/docs/getting-started.html"
                  target="_React_Devloper"
                ></a>
                Facebook
                <br />
                <a
                  href=" https://legacy.reactjs.org/docs/getting-started.html"
                  target="_React_Devloper"
                >
                  Linkline
                </a>
                <br />
              </div>
            </div>

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="Home"
                  role="tabpanel"
                  aria-labelledby="Home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p className="">456434546345</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p className="">Akash Gaikwad</p>
                    </div>
                    <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p className="">Akash Gaikwad</p>
                    </div>
                    <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p className="">Akash Gaikwad</p>
                    </div>
                    <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p className="">Akash Gaikwad</p>
                    </div>
                    <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p className="">Akash Gaikwad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </from>
      </div>
    </>
  );
};

export default About;
