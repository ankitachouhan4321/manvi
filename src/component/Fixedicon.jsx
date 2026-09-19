import React from 'react';

const Fixedicon = () => {
    return(
<>

 {/* Floating Contact Buttons */}
    <div className="floating-contact">


        <a href="tel:+919315840756" className="contact-btn call-btn" data-bs-toggle="tooltip" data-bs-placement="left"
            title="Call Our Experts">
            <i className="fas fa-phone-alt"></i>
          
        </a>

 
        <a href="https://wa.me/+919315840756" target="_blank" className="contact-btn whatsapp-btn" data-bs-toggle="tooltip"
            data-bs-placement="left" title="Chat on WhatsApp">
            <i className="fab fa-whatsapp"></i>
           
        </a>

    </div>
    </>

    )
}

export default Fixedicon;   