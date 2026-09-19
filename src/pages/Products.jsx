import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import aboutpage1 from "/about-page/about-page-1.png"

import gallery1 from "/gallery/1.jpg"
import gallery2 from "/gallery/2.jpg"
import gallery3 from "/gallery/3.jpg"
import gallery4 from "/gallery/4.jpg"
import gallery5 from "/gallery/5.jpg"
import gallery6 from "/gallery/6.jpg"
import gallery7 from "/gallery/7.jpg"
import gallery8 from "/gallery/8.jpg"




const Gallery = () => {

    const galleryImages = [

        {
            image: gallery1,
            title: "Air Washer Unit"
        },

        {
            image: gallery2,
            title: "Cooling System"
        },

        {
            image: gallery3,
            title: "Industrial Air Washer"
        },

        {
            image: gallery4,
            title: "HVAC Solution"
        },

        {
            image: gallery5,
            title: "Ventilation System"
        },

        {
            image: gallery6,
            title: "Cooling Pad"
        },

        {
            image: gallery7,
            title: "Manufacturing Unit"
        },

        {
            image: gallery8,
            title: "Air Handling Unit"
        }

    ];

    const slides = galleryImages.map((item) => ({
        src: item.image,
    }));

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);



    return (
        <>
            {/* breadcrumb start  */}
            <section id="breadcrumb">
                <div className="container">


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <div className="link-box">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Gallery</li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Air Washer Gallery</h1>
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

            {/* gallery start */}
            <section className="gallery section">

                <div className="container">

                    <div className="row">

                        {galleryImages.map((item, i) => (

                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>

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
                                        alt={item.title}
                                    />

                                    <div className="gallery-overlay">

                                        <div>

                                            <i className="fa-solid fa-magnifying-glass-plus"></i>

                                            <h5>{item.title}</h5>

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

export default Gallery;