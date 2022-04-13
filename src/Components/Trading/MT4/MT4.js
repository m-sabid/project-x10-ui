import React from 'react';
import './MT4.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import { Nav } from 'react-bootstrap';
import icon1 from '../../../Image/MT4/icon-1.svg'
import icon2 from '../../../Image/MT4/icon-2.svg'
import icon3 from '../../../Image/MT4/icon-3.svg'
import icon4 from '../../../Image/MT4/icon-4.svg'
import icon5 from '../../../Image/MT4/icon-5.svg'
import icon6 from '../../../Image/MT4/icon-6.svg'
import icon7 from '../../../Image/MT4/icon-7.svg'
import icon8 from '../../../Image/MT4/icon-8.svg'
import icon9 from '../../../Image/MT4/icon-9.svg'
import mt4 from '../../../Image/MT4/mt4.jpeg'
import icon10 from '../../../Image/C-slider-icon/icon-9.svg'
import icon11 from '../../../Image/C-slider-icon/icon-10.svg'
import icon12 from '../../../Image/C-slider-icon/icon-11.svg'

const componentName = () => {
    return (
        <div>
            <TopSection />
            <NavSection />
            <div className='f-b-1 container'>
                <div className='forex'>
                    <div className='forex-info mt-padding'>
                        <p className='forex-p'>WELCOME TO X-TEN</p>
                        <h1 className='f-c'>MT4</h1>
                        <p className='forex-p2'>You can trade forex, commodities, indices, futures
                            & Stock CFDs with the most popular MT4 platform.</p>
                        <div className='f-dd-c'>
                            <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                            <p className='small-p'>Trading involves a high level of risk</p>
                        </div>
                    </div>
                    <div>
                        <img className='f-img m-img' src={mt4} alt='' />
                    </div>
                </div>
            </div>



            <div className='acct act container'>
                <div className='forex-info'>
                    <h1 className='f-c bold'>Why Traders <span className='f-m-c'>Choose MT4</span></h1>
                    <p className='forex-p2'>Access the online markets with speed and
                        precision, no matter where you are.</p>
                </div>
            </div>


            <div className='acct act2 container'>
                <div className='forex-info'>
                    <h1 className='f-c bold'>Key <span className='f-m-c'>Features</span></h1>
                </div>
            </div>






            <div className='key-features container'>
                <div className='key-grid'>
                    <div className='key-cart'>
                        <div>
                            <img className='k-icon' src={icon1} alt='' />
                        </div>
                        <h5 className='mt-3'>User-friendly interface</h5>
                    </div>
                    <div className='key-cart'>
                        <div>
                            <img className='k-icon' src={icon2} alt='' />
                        </div>
                        <h5 className='mt-3'>30 built-in technical indicators</h5>
                    </div>
                    <div className='key-cart'>
                        <div>
                            <img className='k-icon' src={icon3} alt='' />
                        </div>
                        <h5 className='mt-3'>Custom expert advisors and technical indicators</h5>
                    </div>
                    <div className='key-cart'>
                        <div>
                            <img className='k-icon' src={icon4} alt='' />
                        </div>
                        <h5 className='mt-3'>4 pending order types</h5>
                    </div>
                    <div className='key-cart'>
                        <div>
                            <img className='k-icon' src={icon5} alt='' />
                        </div>
                        <h5 className='mt-3'>9 timeframes</h5>
                    </div>
                    <div className='key-cart'>
                        <div>
                            <img className='k-icon' src={icon6} alt='' />
                        </div>
                        <h5 className='mt-3'>Customizable charts</h5>
                    </div>
                    <div className='key-cart'>
                        <div>
                            <img className='k-icon' src={icon7} alt='' />
                        </div>
                        <h5 className='mt-3'>Trailing stop</h5>
                    </div>
                    <div className='key-cart'>
                        <div>
                            <img className='k-icon' src={icon8} alt='' />
                        </div>
                        <h5 className='mt-3'>1-click trading & ability to trade from charts</h5>
                    </div>
                    <div className='key-cart'>
                        <div>
                            <img className='k-icon' src={icon9} alt='' />
                        </div>
                        <h5 className='mt-3'>Precise & speedy execution</h5>
                    </div>
                </div>
            </div>























            <div className='acct act container'>
                <div className='forex-info'>
                    <h1 className='f-c bold'>Are You Prepared to <span className='f-m-c'>Trade</span>?</h1>
                    <p className='forex-p2'>Download your chosen platform to trade from anywhere, 24/Day and in any device, with high speed connection and faster execution </p>
                </div>
            </div>

            <div className='start-box2 container'>
                <div className='box2'>
                    <div>
                        <img src={icon10} alt='' />
                    </div>
                    <div className='start-info mt-4'>
                        <p></p>
                    </div>
                </div>
                <div className='box2'>
                    <div>
                        <img src={icon11} alt='' />
                    </div>
                    <div className='start-info mt-4'>
                        <p></p>
                    </div>
                </div>
                <div className='box2'>
                    <div>
                        <img src={icon12} alt='' />
                    </div>
                    <div className='start-info mt-4'>
                        <p></p>
                    </div>
                </div>
                <div className='box2'>
                    <div>
                        <img src={icon11} alt='' />
                    </div>
                    <div className='start-info mt-4'>
                        <p></p>
                    </div>
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