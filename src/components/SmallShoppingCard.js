import React from "react";
import "./styles/SmallShoppingCard.css";

class SmallShoppingCard extends React.Component{
    render() {
        return(
            <div className="productPreview">

                <img src="https://static-sl.insales.ru/r/VCCko_Os1pk/fit/440/0/ce/1/plain/images/products/1/7372/400235724/large_product.jpg" alt="not" className="productPreview-photo"/>

                <div className="productPreview-description">
                    Description
                </div>

                <div className="productPreview-price">
                    Price
                    <b> 1000 </b>
                </div>

                <div className="productPreview-button">
                    Select
                </div>

            </div>
        )
    }
}
export default SmallShoppingCard; 
