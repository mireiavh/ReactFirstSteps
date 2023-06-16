import "./Brand.css"

import Customer_1 from "../../assets/images/customer-logo-1.png"
import Customer_2 from "../../assets/images/customer-logo-2.png"
import Customer_3 from "../../assets/images/customer-logo-3.png"
import Customer_4 from "../../assets/images/customer-logo-4.png"
import Customer_5 from "../../assets/images/customer-logo-5.png"

function Brand() {
  return (
    <>
        <section className="brand_section">
            <div className="container_brand">
                <div className="brand_row">
                    <div className="brand">
                        <div className="customer">
                            <img src={Customer_1}/>
                        </div>
                        <div className="customer">
                            <img src={Customer_2}/>
                        </div>
                        <div className="customer">
                            <img src={Customer_3}/>
                        </div>
                        <div className="customer">
                            <img src={Customer_4}/>
                        </div>
                        <div className="customer">
                            <img src={Customer_5}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Brand