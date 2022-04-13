import React from "react";
import Slider from "react-slick";
import './Slider3.css'
import icon1 from '../../../../Image/C-slider-icon/icon-1.svg'
import icon2 from '../../../../Image/C-slider-icon/icon-2.svg'
import icon3 from '../../../../Image/C-slider-icon/icon-3.svg'
import icon4 from '../../../../Image/C-slider-icon/icon-4.svg'
import icon5 from '../../../../Image/C-slider-icon/icon-5.svg'
import icon6 from '../../../../Image/C-slider-icon/icon-6.svg'
import icon7 from '../../../../Image/C-slider-icon/icon-7.svg'
import icon8 from '../../../../Image/C-slider-icon/icon8.svg'

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="s-cart3 ms-5 mt-3">
                    <div>
                        <img className="s-icon" src={icon1} alt="" />
                    </div>
                    <div>
                        <h5 className="mt-3">Regulated Broker:</h5>
                        <p className="mt-3 s-cart-p">Xten has been licensed, regulated and serving traders responsibly.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="s-cart3 ms-4 mt-3">
                    <div>
                        <img className="s-icon" src={icon2} alt="" />
                    </div>
                    <div>
                        <h5 className="mt-3">Scalping & Hedging Permitted:</h5>
                        <p className="mt-3 s-cart-p">You can trade without using your margin on your hedging and complete your trading strategies on chosen financial assets.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="s-cart3 ms-5 mt-3">
                    <div>
                        <img className="s-icon" src={icon3} alt="" />
                    </div>
                    <div>
                        <h5 className="mt-3">Quick Deposits & Withdrawals:</h5>
                        <p className="mt-3 s-cart-p">Deposit funds into your account, transfer and withdraw funds instantly using a range of online payment methods through the secure Xten wallet.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="s-cart3 ms-4 mt-3">
                    <div>
                        <img className="s-icon" src={icon4} alt="" />
                    </div>
                    <div>
                        <h5 className="mt-3">Wide range of trading tools:</h5>
                        <p className="mt-3 s-cart-p">Access Trading Central and take advantage of special technical indicators, trading signals and comprehensive market information.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="s-cart3 ms-5 mt-3">
                    <div>
                        <img className="s-icon" src={icon5} alt="" />
                    </div>
                    <div>
                        <h5 className="mt-3">Super-fast performance:</h5>
                        <p className="mt-3 s-cart-p">Discover the NDD trading environment, which uses the latest technology to execute trading orders in less than 0.02 seconds.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="s-cart3 ms-4 mt-3">
                    <div>
                        <img className="s-icon" src={icon6} alt="" />
                    </div>
                    <div>
                        <h5 className="mt-3">Competitive trading conditions:</h5>
                        <p className="mt-3 s-cart-p">Trade with tight spreads of just 0.0 pips on the globally recognized Metatrader 4 platform.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="s-cart3 ms-5 mt-3">
                    <div>
                        <img className="s-icon" src={icon7} alt="" />
                    </div>
                    <div>
                        <h5 className="mt-3">Highest level of security:</h5>
                        <p className="mt-1 s-cart-p">Trade responsibly with negative balance protection, highly secure data encryption, and free VPS. Make sure that the client's funds will be kept separate from the company's own funds.</p>
                    </div>
                </div>
            </div>

            <div className="s-cart3 ms-4 mt-3">
                <div>
                    <img className="s-icon" src={icon8} alt="" />
                </div>
                <div>
                    <h5 className="mt-3">Education and Research:</h5>
                    <p className="mt-1 s-cart-p">You can be benefited by joining our seminars, taking part in one-to-one expert learning sessions or going through our valuable forex articles and technical analysis.</p>
                </div>
            </div>
        </Slider>
    );
}