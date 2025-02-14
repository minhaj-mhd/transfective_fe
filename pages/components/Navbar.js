import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css"; // Import CSS module

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid d-flex justify-content-between">

          <a className="navbar-brand" href="#">
            <Image className={styles["navbar-logo"]} src = "/icons/logo.png" alt="Logo" width={300} height={20}></Image>
          </a>
          <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className={styles["nav-item"]}>
                <a className={`dropdown-toggle btn ${styles['navbar-btn']}`}  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
                </a>
              </li>
              <li className={styles["nav-item"]}>
                <a className={`dropdown-toggle btn ${styles['navbar-btn']}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sectors
                </a>
              </li>
              <li className={styles["nav-item"]}>
                <a className="nav-link" href="#">OurProccess</a>
              </li>
              <li className={styles["nav-item"]}>
                <a className="nav-link" href="#">Technology</a>
              </li>
              <li className={styles["nav-item"]}>
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className={styles["nav-item"]}>
                <a className={` btn ${styles['navbar-btn']}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact
                </a>
              </li>
              <li className={styles["nav-item"]}>
                <a className=" dropdown-toggle nav-link" href="#">En</a>
              </li>
              
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
