import React from 'react';
import { Nav } from 'react-bootstrap';
import './Safety.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import Sslider from './Sslider/Sslider'
import Sslider2 from './Sslider2/Sslider2'
import Sslider3 from './Sslider3/Sslider3'
import icon9 from '../../../Image/C-slider-icon/icon-9.svg'
import icon10 from '../../../Image/C-slider-icon/icon-10.svg'
import icon11 from '../../../Image/C-slider-icon/icon-11.svg'
import safety from '../../../Image/Safety/safety.jpg'
import choose from '../../../Image/forex/choose-gorex.jpg'

const componentName = () => {
    return (
        <div>
            <TopSection />
            <NavSection />
            <div className='f-b-1 container'>
                <div className='forex'>
                    <div className='forex-info mt-padding'>
                        <p className='forex-p'>WELCOME TO X-TEN</p>
                        <h1 className='f-c'>Safety</h1>
                        <p className='forex-p2'>XTen is committed to serving you responsibly very seriously.<br />
                            That's why we use the strictest and most advanced protocols to ensure the highest level of security for your trading experience.</p>
                        <div className='f-dd-c'>
                            <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                            <p className='small-p'>Trading involves a high level of risk</p>
                        </div>
                    </div>
                    <div>
                        <img className='f-img' src={safety} alt='' />
                    </div>
                </div>
            </div>




            <div className='choose'>
                <div className='container c-title'>
                    <p className='forex-p'>WELCOME TO X-TEN</p>
                    <h1 className='c-m-h'>How XTen <span className='f-m-c'>Protects You</span></h1>
                </div>

                <div className='choose-info container'>
                    <div className='slider-flex'>
                        <div className='choose-image'>
                            <img className='choose-img' src={choose} alt='' />
                        </div>
                        <div className='slider'>
                            <Sslider />
                        </div>
                    </div>
                </div>
                <div className='slider2'>
                    <Sslider2></Sslider2>
                </div>
                <div className='slider3'>
                    <Sslider3></Sslider3>
                </div>
            </div>




            <div className='get-started'>
                <div className='start-title'>
                    <h1 className='c-m-h'>How to <span className='f-m-c'>Start</span></h1>
                    <p className='forex-p'>Start your investment journey<br />Forex market, follow these easy steps</p>
                </div>
                <div className='start-box container'>
                    <div className='box'>
                        <div>
                            <img src={icon9} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h2>Sign up</h2>
                            <p className='forex-p'>Create an account and upload your documents in minutes.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div>
                            <img src={icon10} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h2>Fund your account</h2>
                            <p className='forex-p'>Deposit on your XTen wallet right away with a credit card, bank transfer or online payment of your choice.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div>
                            <img src={icon11} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h2>Trade</h2>
                            <p className='forex-p'>Download the trading platform for your selected device and start trading.</p>
                        </div>
                    </div>
                </div>

                <div className='s-b-c'>
                    <Nav.Link href="#home" className='start-btn-b'>Start Trading</Nav.Link>
                    <p className='small-p'>Trading involves a high level of risk</p>
                </div>
            </div>













        </div>
    );
};

export default componentName;