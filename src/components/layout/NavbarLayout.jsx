import React from "react";

const NavbarLayout = () => {
  return (
    <header className="absolute w-full">
      <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="skeleton-logo"></div>
          <div className="flex items-center flex-grow">
            <div className="collapse navbar-collapse flex justify-center w-full hidden lg:flex">
              <div className="navbar-nav flex space-x-4">
                <div className="skeleton-nav-item"></div>
                <div className="skeleton-nav-item"></div>
                <div className="skeleton-nav-item"></div>
                <div className="skeleton-nav-item"></div>
                <div className="skeleton-nav-item"></div>
              </div>
            </div>
          </div>
          <div className="gradient-button-loader"></div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarLayout;
