import React from "react";

const SortInfo = () => {
  return (
    <>
      <section className="section section-lg section-0">
        <div className="container">
          <div className="section-wrap section-wrap-angle section-wrap-angle-top-right bg-darker is-dark rounded-4 has-shape">
            <div className="section-content p-4 pt-3 pt-sm-5 p-sm-6 overflow-hidden">
              <div className="nk-shape bg-shape-blur-n mt-n10p ms-n10p"></div>
              <div className="nk-shape bg-shape-blur-o mt-n10p me-n20p end-0"></div>
              <div className="row justify-content-center text-center">
                <div className="col-xl-8 col-xxl-9">
                  <div className="block-text">
                    <h6 className="overline-title text-primary">
                      Boost your writing productivity
                    </h6>
                    <h2 className="title">End writer’s block today</h2>
                    <p className="lead mt-3">
                      It’s like having access to a team of copywriting experts
                      writing powerful copy for you in 1-click.
                    </p>
                    <ul className="btn-list btn-list-inline">
                      <li>
                        <a href="#" className="btn btn-lg btn-primary">
                          <span>Start writing for free</span>
                          <em className="icon ni ni-arrow-long-right"></em>
                        </a>
                      </li>
                    </ul>
                    <ul className="list list-row gy-0 gx-3">
                      <li>
                        <em className="icon ni ni-check-circle-fill text-success"></em>
                        <span>No credit card required</span>
                      </li>
                      <li>
                        <em className="icon ni ni-check-circle-fill text-success"></em>
                        <span>Cancel anytime</span>
                      </li>
                      <li>
                        <em className="icon ni ni-check-circle-fill text-success"></em>
                        <span>10+ tools to expolore</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SortInfo;
