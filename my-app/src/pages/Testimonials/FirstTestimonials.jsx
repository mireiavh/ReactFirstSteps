import "./Testimonials.css"

import Testimonials from "../../assets/images/testimonio_.png"
import Testimonial_1 from "../../assets/images/testimonio_1.png"
import Testimonial_2 from "../../assets/images/testimonio_2.png"
import Testimonial_3 from "../../assets/images/testimonio_3.png"


function FirstTestimonials() {
  return (
    <>
        <section className="testimonials_section">
            <h2>User Testimonials</h2>

            <div className="efecto3d">
                <div className="contenedor">
                    <div className="efecto__columna">
                        <article className="adelante">
                            <img src={Testimonials} className="mobile"/>
                        </article>
                        <article className="atras">
                            <img src={Testimonial_1} className="mobile"/>
                        </article>
                    </div>
                </div>

                <div className="contenedor">
                    <div className="efecto__columna">
                        <article className="adelante">
                            <img src={Testimonials} className="mobile"/>
                        </article>
                        <article className="atras">
                            <img src={Testimonial_2} className="mobile"/>
                        </article>
                    </div>
                </div>

                <div className="contenedor">
                    <div className="efecto__columna">
                        <article className="adelante">
                            <img src={Testimonials} className="mobile"/>
                        </article>
                        <article className="atras">
                            <img src={Testimonial_3} className="mobile"/>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FirstTestimonials