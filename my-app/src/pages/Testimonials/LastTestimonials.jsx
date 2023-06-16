import "./Testimonials.css"

import Testimonials from "../../assets/images/testimonio_.png"
import Testimonial_4 from "../../assets/images/testimonio_4.png"
import Testimonial_5 from "../../assets/images/testimonio_5.png"
import Testimonial_6 from "../../assets/images/testimonio_6.png"


function LastTestimonials() {
  return (
    <>
        <section className="testimonials_section">
        
            <div className="efecto3d">
                <div className="contenedor">
                    <div className="efecto__columna">
                        <article className="adelante">
                            <img src={Testimonials} className="mobile"/>
                        </article>
                        <article className="atras">
                            <img src={Testimonial_4} className="mobile"/>
                        </article>
                    </div>
                </div>

                <div className="contenedor">
                    <div className="efecto__columna">
                        <article className="adelante">
                            <img src={Testimonials} className="mobile"/>
                        </article>
                        <article className="atras">
                            <img src={Testimonial_5} className="mobile"/>
                        </article>
                    </div>
                </div>

                <div className="contenedor">
                    <div className="efecto__columna">
                        <article className="adelante">
                            <img src={Testimonials} className="mobile"/>
                        </article>
                        <article className="atras">
                            <img src={Testimonial_6} className="mobile"/>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default LastTestimonials