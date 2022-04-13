import React from 'react';
import './Advantage.css'
import TopSection from '../../Shared/TopSection/TopSection'
import { Nav } from 'react-bootstrap';
import NavSection from '../../Shared/NavSection/NavSection'
import icon9 from '../../../Image/C-slider-icon/icon-9.svg'
import icon10 from '../../../Image/C-slider-icon/icon-10.svg'
import icon11 from '../../../Image/C-slider-icon/icon-11.svg'
import { FaCheckDouble } from "react-icons/fa";



const componentName = () => {
    return (
        <div>
            <TopSection />
            <NavSection />

            <div className='acct ch'>
                <div className='forex-info'>
                    <p className='forex-p'>WELCOME TO X-TEN</p>
                    <h1 className='f-c bold'>Why<span className='f-m-c'> X-TEN </span></h1>
                    <p className='forex-p2'>Choosing who you entrust with your investment to the most important decision a trader can make. We take this responsibility sincerely.</p>
                </div>
            </div>
            <div className='f-dd-c2'>
                <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                <p className='small-p'>Trading involves a high level of risk</p>
            </div>





            <div className='start-title pt-5 pa'>
                <h1 className='c-m-h'>Working for <span className='f-m-c'> Traders Globally </span><br />(Serving Traders Responsibly)</h1>
                <p className='ndd-p'>XTen is a reliable Forex broker serving traders internationally and intended to bring success to our valued clients. We are dedicated to maintain professional ethics at all time.</p>
            </div>



            <div className='Reliability container'>
                <div className='reliability-grid'>
                    <div className='reliability-box'>
                        <div>
                            <h4 className='bold mt-4'><span className='c-icon me-3'><FaCheckDouble/></span>License and Regulations</h4>
                        </div>
                        <div>
                            <h5 className='mt-4 colour'>XTen is a regulated financial service provider and maintains the strict rules provided by the regulatory Bodies. With Saint Vincent license along with a clean directing record, Xten provides services to its clients with the uppermost standard.</h5>
                        </div>
                    </div>
                    <div className='reliability-box'>
                        <div>
                        <h4 className='bold mt-4 '><span className='c-icon me-3'><FaCheckDouble/></span>Security</h4>
                        </div>
                        <div>
                            <h5 className='mt-4 colour'>Xten uses cutting-edge technologies in order to offer a secured trading system. Client data is carefully saved and totally encrypted. </h5>
                        </div>
                    </div>
                    <div className='reliability-box'>
                        <div>
                        <h4 className='bold mt-4'><span className='c-icon me-3'><FaCheckDouble/></span>Sevres with Profession</h4>
                        </div>
                        <div>
                            <h5 className='mt-4 colour'>Xten is a financial service provider with full reputation and serving globally. Xten team is constantly trained up to accommodate with the market needs and delivers excellent services.</h5>
                        </div>
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