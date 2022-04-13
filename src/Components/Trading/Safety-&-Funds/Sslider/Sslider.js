import React from "react";
import Slider from "react-slick";
import icon1 from '../../../../Image/Safety/icon-1.svg'
import icon2 from '../../../../Image/Safety/icon-2.svg'
import icon3 from '../../../../Image/Safety/icon-3.svg'
import icon4 from '../../../../Image/Safety/icon-4.svg'

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="s-cart-f">
                    <div className="s-cart ms-2 mt-3">
                        <div>
                            <img className="s-icon" src={icon1} alt="" />
                        </div>
                        <div>
                            <h5 className="mt-3">Data Encryption:</h5>
                            <p className="mt-3 s-cart-p">XTen uses cutting-edge technology to ensure that your data is properly encrypted across all platforms, across all communications and across the internet.</p>
                        </div>
                    </div>
                    <div className="s-cart ms-4 me-3 mt-3">
                        <div>
                            <img className="s-icon" src={icon2} alt="" />
                        </div>
                        <div>
                            <h5 className="mt-3">Segregated Funds:</h5>
                            <p className="mt-3 s-cart-p">All client funds are kept entirely separate from the proprietary funds or accounts of the company. Orbex is also a proud member of the ICF (Investor Compensation Fund)</p>
                        </div>
                    </div>
                </div>
                <div className="s-cart-f mt-4 ms-2 mb-3">
                    <div className="s-cart">
                        <div>
                            <img className="s-icon" src={icon3} alt="" />
                        </div>
                        <div>
                            <h5 className="mt-3">Free VPS:</h5>
                            <p className="mt-3 s-cart-p">All types of XTen accounts come with a free virtual private server to make your transactions more secure and protected from threats such as computer viruses and failed logins.</p>
                        </div>
                    </div>
                    <div className="s-cart ms-4">
                        <div>
                            <img className="s-icon" src={icon4} alt="" />
                        </div>
                        <div>
                            <h5 className="mt-3">Negative Balance Protection:</h5>
                            <p className="mt-3 s-cart-p">XTen protects against negative balances on all types of accounts so that a trader does not exceed their initial investment.</p>
                        </div>
                    </div>
                </div>
            </div>

        </Slider>
    );
}