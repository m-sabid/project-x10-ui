import React from 'react';
import './TradingTools.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import { Nav } from 'react-bootstrap';
import icon9 from '../../../Image/C-slider-icon/icon-9.svg'
import icon10 from '../../../Image/C-slider-icon/icon-10.svg'
import icon11 from '../../../Image/C-slider-icon/icon-11.svg'
import tools from '../../../Image/Trading-tools/tools.jpg'


const componentName = () => {
    return (
        <div>
            <TopSection />
            <NavSection />

            <div className='f-b-1 container'>
                <div className='forex'>
                    <div className='forex-info'>
                        <p className='forex-p'>WELCOME TO X-TEN</p>
                        <h1 className='f-c'>Trading Tools</h1>
                        <p className='forex-p2'>Because your success is our top priority, X-Ten provides you with all the tools and information to make the right investment decisions.</p>
                        <div className='f-dd-c'>
                            <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                            <p className='small-p'>Trading involves a high level of risk</p>
                        </div>
                    </div>
                    <div>
                        <img className='f-img' src={tools} alt='' />
                    </div>
                </div>
            </div>




            <div className='start-title pt-5 pa'>
                <h1 className='c-m-h'>Market Research <span className='f-m-c'>& Education</span></h1>
                <p className='ndd-p'>The XTen research team consists of market analysts, macroeconomists, experienced traders and Elliott experts. Daily posts include basic and technical analysis, daily trading signals, quarterly market forecasts and educational content.</p>
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