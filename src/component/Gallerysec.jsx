import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Lightbox from "yet-another-react-lightbox";

import gallery1 from "/gallery/1.jpg"
import gallery2 from "/gallery/2.jpg"
import gallery3 from "/gallery/3.jpg"
import gallery4 from "/gallery/4.jpg"
import gallery5 from "/gallery/5.jpg"
import gallery6 from "/gallery/6.jpg"




const Gallerysec = () => {

    const galleryImages = [

        {
            image: gallery1,
            // title: "Air Washer Unit"
        },

        {
            image: gallery2,
            // title: "Cooling System"
        },

        {
            image: gallery3,
            // title: "Industrial Air Washer"
        },

        {
            image: gallery4,
            // title: "HVAC Solution"
        },

        {
            image: gallery5,
            // title: "Ventilation System"
        },

        {
            image: gallery6,
            // title: "Cooling Pad"
        }



    ];

    const slides = galleryImages.map((item) => ({
        src: item.image,
    }));

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);



    return (
        <>


            {/* gallery start */}
            <section className="gallery section py-lg-5 py-3">

                <div className="container-xxl py-lg-5">
                    <div className="top-head text-center"><i className="fa-solid fa-wind me-2"></i>    Our Gallery
                    </div>
                    <div className="heading">
                        Turning Ideas Into Efficient Air Solutions
                    </div>

                    <div className="row">

                        {galleryImages.map((item, i) => (

                            <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={i}>

                                <div
                                    className="gallery-item"
                                    onClick={() => {
                                        setOpen(true);
                                        setIndex(i);
                                    }}
                                >

                                    <img
                                        src={item.image}
                                        className="img-fluid"
                                        alt="Air Washer"
                                    />

                                    <div className="gallery-overlay">

                                        <div>

                                            <i className="fa-solid fa-magnifying-glass-plus"></i>

                                            {/* <h5>{item.title}</h5> */}

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <Lightbox

                open={open}

                close={() => setOpen(false)}

                slides={slides}

                index={index}

            />
            {/* gallery end */}




        </>
    )
}

export default Gallerysec;