import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" href="#!">
                  <i className="bi bi-twitter"></i>
                </a>
                <a className="text-gradient" href="#!">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="text-black" href="#!">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
            <div className="col-auto">
              <a className="small" href="#!">
                Home
              </a>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">
                About me
              </a>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">
                Contact
              </a>
            </div>
          </div>
          <div className="small m-0 text-center">
            Made with{" "}
            <a className="text-black" href="#!">
              <i className="bi bi-heart" style={{ color: "red" }}></i>
            </a>{" "}
            by Samuella
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
