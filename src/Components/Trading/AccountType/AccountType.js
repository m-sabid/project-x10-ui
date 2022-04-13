import React from 'react';
import './AccountType.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import Slider from '../Forex/Slider/Slider'
import Slider2 from '../Forex/Slider2/Slider2'
import Slider3 from '../Forex/Slider3/Slider3'
import icon9 from '../../../Image/C-slider-icon/icon-9.svg'
import icon10 from '../../../Image/C-slider-icon/icon-10.svg'
import icon11 from '../../../Image/C-slider-icon/icon-11.svg'
import { Nav } from 'react-bootstrap';
import Table from './Table/Table'
import choose from '../../../Image/forex/choose-gorex.jpg'



const componentName = () => {
    return (
        <div>
            <TopSection />
            <NavSection />
            <div className='acct'>
                <div className='forex-info'>
                    <p className='forex-p'>WELCOME TO X-TEN</p>
                    <h1 className='f-c bold'><span className='f-m-c'>Account</span> Types</h1>
                    <p className='forex-p2'>Whether you’re a scalper, hedger or long-term trend trader, your trading style is welcome at X-TEN.</p>
                </div>
            </div>
            <div className='f-dd-c2'>
                <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                <p className='small-p'>Trading involves a high level of risk</p>
            </div>


            <div className='container table'>
                <Table></Table>
            </div>

            <div className='s-b-c'>
                <Nav.Link href="#home" className='start-btn-b'>Start Trading</Nav.Link>
                <p className='small-p'>Trading involves a high level of risk</p>
            </div>






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