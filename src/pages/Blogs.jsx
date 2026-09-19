import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import blog1 from "/blog/1.png";
import blog2 from "/blog/2.png";





const Blogs = () => {
    return (
        <>

            {/* breadcrumb start  */}
            <section id="breadcrumb">
                <div className="container">


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <div className="link-box">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Our Blogs</li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Our Blogs</h1>
                            </li>
                        </ol>
                    </nav>

                    {/* <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav> */}
                </div>
            </section>
            {/* breadcrumb end  */}

                {/* blog-sec section start  */}
                       <section id="blog-sec" className="section py-lg-5 py-3">
                           <div class="blog-sec container-fluid py-lg-5">
                               <div className="row">
                                   <div className="col-lg-6">
                                       <div className="top-head ">    <i className="fa-solid fa-wind pe-2"></i> Our Blogs</div>
                                       <div className="heading ">
                                           Latest News & Industry Insights
                                       </div>
                                       <p className="main-para">Stay updated with expert insights, industry trends, and practical tips on air handling, ventilation systems, and energy-efficient engineering solutions.</p>
                                   </div>
                                   <div className="col-lg-6 d-flex justify-content-end align-items-center">
                                   </div>
                               </div>
                               <div className="row g-3">
           
                                   <div className="col-md-6">
                                       <div className="blog-card">
                                           <div className="img-box">
                                               <img src={blog1} alt="Benefits of Industrial Air Washers" className="img-fluid" />
           
                                               <div className="content">
                                                   <a href="/benefitsIndustrialAirWashers">
                                                       <h4>
                                                           Top Benefits of Industrial Air Washers for Commercial & Manufacturing Facilities
                                                       </h4>
                                                   </a>
           
                                                   <div className="date">
                                                       July 10, 2026 / Manvi Engineers
                                                   </div>
           
                                               </div>
                                           </div>
                                       </div>
                                   </div>
           
                                   <div className="col-md-6">
                                       <div className="blog-card">
                                           <div className="img-box">
                                               <img src={blog2} alt="How to Choose the Right Air Washer" className="img-fluid" />
           
                                               <div className="content">
                                                   <a href="/rightAirWasherSystem">
                                                       <h4>
                                                           How to Choose the Right Air Washer System for Your Industrial Space
                                                       </h4>
                                                   </a>
           
                                                   <div className="date">
                                                      July 05, 2026  / Manvi Engineers
                                                   </div>
           
                                               </div>
                                           </div>
                                       </div>
                                   </div>
           
                               </div>
           
           
                           </div>
                       </section>
                       {/* blog-sec section end  */}
           
        </>
    )


}

export default Blogs;