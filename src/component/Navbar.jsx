import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <section id="top-bar" className="section">
        <div className="top-bar ">
          <div className="container-fluid ">
            <div className="row align-items-center">

              <div className="col-lg-10">
                <div className="top-left">

                  <a href="tel:+919315840756">
                    <span >
                      <i className="fa-solid fa-phone fa-beat"></i>
                      Call Us  +91 93158 40756
                    </span>
                  </a>

                  <a href="mailto:info@manviengineers.com" className="d-lg-block d-none">
                    <span>
                      <i className="fa-solid fa-envelope fa-beat"></i>
                      Mail Us: info@manviengineers.com
                    </span>
                  </a>

                  <span className="d-lg-block d-none">
                    <i className="fa-solid fa-location-dot fa-beat pe-2" ></i>
                    Visit Us:  Rani Khera Road, New Delhi - 110041, India
                  </span>

                </div>
              </div>

              <div className="col-lg-2 d-lg-block d-none">
                <div className="social-icons">

                  <a href="https://www.facebook.com/manviengineers" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>

                  <a href="https://x.com/manvi_engineers" target="_blank">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/manvi-engineers" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/manviengineers/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  {/* Pinterest */}
                  <a href="https://in.pinterest.com/manviengineers/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <section className="section">
        <nav className="navbar navbar-expand-lg bg-white py-lg-3 ">
          <div className="container-fluid px-0">

            {/* Logo */}

            <Link className="navbar-brand d-flex align-items-center fw-bold fs-2" to="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="img-fluid"
              />

            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
            >
              <span className="fa-solid fa-bars-staggered"></span>
            </button>

            <div className="collapse navbar-collapse mobile-menu" id="navbar">

              <ul className="navbar-nav mx-auto">

                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Our Products
                  </a>

                  <ul className="dropdown-menu">

                    {/* Air Louvers */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="air-louvers-manufacturers">
                        Air Louvers
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/gi-gravity-louvers">Gi Gravity Louvers </Link></li>
                        <li><Link className="dropdown-item" to="/aluminium-fixed-louvers">Aluminium Fixed Louvers</Link></li>
                        <li><Link className="dropdown-item" to="/ventilation-louvers">Ventilation Louvers</Link></li>
                        <li><Link className="dropdown-item" to="/gi-ventilation-louvers">GI Ventilation Louvers</Link></li>
                        <li><Link className="dropdown-item" to="/aluminium-louvers">Aluminium Louvers</Link></li>

                      </ul>
                    </li>

                    {/* AHU  */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="ahu-manufacturers">
                        AHU
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/air-cooling-unit">Air Cooling Unit  </Link></li>
                        <li><Link className="dropdown-item" to="/air-handling-unit">Air Handling Unit  </Link></li>
                        <li><Link className="dropdown-item" to="/manvi-ahu">Manvi AHU  </Link></li>

                      </ul>
                    </li>

                    {/*  Cabinet Fan */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="cabinet-fan-manufacturers">
                        Cabinet Fan
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/industrial-fans">Industrial Fans </Link></li>
                        <li><Link className="dropdown-item" to="/direct-drive-centrifugal-fan">Direct Drive Centrifugal Fan </Link></li>
                        <li><Link className="dropdown-item" to="/duct-direct-drive-centrifugal-fans">Duct Direct Drive Centrifugal Fans </Link></li>

                      </ul>
                    </li>

                    {/* Double Skin Air Washer */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="double-skin-air-washer-manufacturers">
                        Double Skin Air Washer
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/single-skin-air-washer">Single Skin Air Washer</Link></li>
                        <li><Link className="dropdown-item" to="/double-skin-fresh-air-unit">Double Skin Fresh Air Unit</Link></li>
                      </ul>
                    </li>

                    {/* Air Washer Unit */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="air-washer-unit-manufacturers">
                        Air Washer Unit
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/air-washer-double-skin">Air Washer Double Skin</Link></li>
                        {/* <li><Link className="dropdown-item" to="/air-washer">Air Washer</Link></li> */}
                      </ul>
                    </li>

                    {/* AHU Coil and Cooling Coil */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="ahu-coil-and-cooling-coil-manufacturers">
                        AHU Coil and Cooling Coil
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/industrial-ahu-cooling-coil">Industrial AHU Cooling Coil Manufacturers</Link></li>
                        <li><Link className="dropdown-item" to="/chilled-water-coil-ahu">Chilled Water Coil Ahu Manufacturers</Link></li>
                      </ul>
                    </li>

                    {/* Axial Flow Fan */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="axial-flow-fan-manufacturers">
                        Axial Flow Fan
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/tube-axial-flow-fan">Tube Axial Flow Fan</Link></li>
                        <li><Link className="dropdown-item" to="/tube-industrial-axial-flow-fan">Tube Industrial Axial Flow Fan</Link></li>
                      </ul>
                    </li>

                    {/* Kitchen Exhaust Systems */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="kitchen-exhaust-systems-manufacturers">
                        Kitchen Exhaust Systems
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/kitchen-exhaust-system">Kitchen Exhaust System</Link></li>
                        <li><Link className="dropdown-item" to="/commercial-kitchen-exhaust-system">Commercial Kitchen Exhaust System</Link></li>
                      </ul>
                    </li>

                    {/* Fan Coil Unit  */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="fan-coil-unit-manufacturers">
                        Fan Coil Unit
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/horizontal-fan-coil-unit">Horizontal Fan Coil Unit </Link></li>
                        <li><Link className="dropdown-item" to="/chilled-water-fan-coil-units">Chilled Water Fan Coil Units </Link></li>
                        <li><Link className="dropdown-item" to="/industrial-fan-coil-unit">Industrial Fan Coil Unit </Link></li>
                        <li><Link className="dropdown-item" to="/fan-coil-unit">Fan Coil Unit </Link></li>

                      </ul>
                    </li>

                    {/* Wet Scrubber */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="wet-scrubber-manufacturers">
                        Wet Scrubber
                      </Link>
                      
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/wet-scrubbers-system">Wet Scrubbers System</Link></li>
                        <li><Link className="dropdown-item" to="/wet-air-scrubber">Wet Air Scrubber</Link></li>
                      </ul>
                    </li>
                    {/* Air Exhaust Unit */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="air-exhaust-unit-manufacturers">
                        Air Exhaust Unit
                      </Link>
                      
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/cabinet-type-air-exhaust-unit">Cabinet Type Air Exhaust Unit</Link></li>
                        
                      </ul>
                    </li>

                    {/* Air Handling Unit */}
                    {/* <li className="dropdown-submenu"> 
                      <Link className="dropdown-item dropdown-toggle" to="air-handling-unit-manufacturers">
                        Air Handling Unit
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/wire-mesh-filter">Wire Mesh Filter</Link></li>
                        <li><Link className="dropdown-item" to="/pre-filter">Pre Filter</Link></li>
                        <li><Link className="dropdown-item" to="/fine-filter">Fine Filter</Link></li>
                      </ul>
                    </li> */}


                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">
                    Our Blogs
                  </Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/career">
                    Career
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>

              </ul>

              <a href="/coolair-catalogue.pdf" target="_blank" className="btn-main">
                <i className="fa-solid fa-arrow-right me-2"></i>
                Download Brochure
              </a>

            </div>
          </div>
        </nav>
      </section>

    </>
  );
};

export default Navbar;