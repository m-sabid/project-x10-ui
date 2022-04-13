import React from 'react';
import './Commodities.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import comodities from '../../../Image/comodities/comodities.jpg'
import market from '../../../Image/comodities/comodities-market.jpg'
import Slider from '../Forex/Slider/Slider'
import Slider2 from '../Forex/Slider2/Slider2'
import Slider3 from '../Forex/Slider3/Slider3'
import icon9 from '../../../Image/C-slider-icon/icon-9.svg'
import icon10 from '../../../Image/C-slider-icon/icon-10.svg'
import icon11 from '../../../Image/C-slider-icon/icon-11.svg'
import choose from '../../../Image/forex/choose-gorex.jpg'
import { Nav } from 'react-bootstrap';

const componentName = () => {
    return (
        <div>
            <TopSection />
            <NavSection />
            <div className='forex-banner'>
                <div className='f-b-1 container'>
                    <div className='forex'>
                        <div className='forex-info'>
                            <p className='forex-p'>WELCOME TO X-TEN</p>
                            <h1 className='f-c'>Commodities</h1>
                            <p className='forex-p2'>Trade a set of commodities with tight spreads start at 0.0 pips.</p>
                            <div className='f-dd-c'>
                                <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                                <p className='small-p'>Trading involves a high level of risk</p>
                            </div>
                        </div>
                        <div>
                            <img className='f-img' src={comodities} alt='' />
                        </div>
                    </div>
                </div>
                <div className='f-b-1 container'>
                    <div className='forex'>
                        <div>
                          <img className='como-mar-img' src={market} alt=''></img>

                        </div>
                        <div className='forex-info3'>
                            <h1 className='f-m-h'>About the<span className='f-m-c'> Commodities Market</span></h1>
                            <p className='mt-4'>Commodities are precious metals and energies you can buy or sell in form of physical assets.</p>
                            <p className='mt-3'>Metals and energies can be traded widely in our platform.</p>
                            <p className='mt-3'>This suggests you can either take a buy/long position or sell/short position on a trading pair based on your study.</p>
                            <p className='mt-3'>Commodities are popular liquid assets that can be traded and offered exclusive portfolio expansion opportunities.</p>
                            <p className='mt-3'>It involves trading the value of one currency against the value of another.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* metala//energies */}


            {/* metala//energies */}


            <div className='choose'>
                <div className='container c-title'>
                    <p className='forex-p'>WELCOME TO X-TEN</p>
                    <h1 className='c-m-h'>Why Traders <span className='f-m-c'>Choose XTen</span></h1>
                </div>

                <div className='choose-info container'>
                    <div className='slider-flex'>
                        <div className='choose-image'>
                            <img className='choose-img' src={choose} alt='' />
                        </div>
                        <div className='slider'>
                            <Slider />
                        </div>
                    </div>
                </div>
                <div className='slider2'>
                    <Slider2></Slider2>
                </div>
                <div className='slider3'>
                    <Slider3></Slider3>
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

            <div>
                <div className='start-title'>
                    <h1 className='c-m-h'>Choose Your <span className='f-m-c'>Platform</span></h1>
                    <p className='forex-p'>MT4 platform anywhere, any time and on <br />any device.</p>
                </div>
            </div>



            <div className='start-box2 container'>
                <div className='box2'>
                    <div>
                        <img src={icon9} alt='' />
                    </div>
                    <div className='start-info mt-4'>
                        <p></p>
                    </div>
                </div>
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
                        <img src={icon11} alt='' />
                    </div>
                    <div className='start-info mt-4'>
                        <p></p>
                    </div>
                </div>
            </div>

            <div className='s-b-c'>
                <Nav.Link href="#home" className='start-btn-b2'>Discover Our Platforms</Nav.Link>
            </div>


        </div>
    );
};

export default componentName;