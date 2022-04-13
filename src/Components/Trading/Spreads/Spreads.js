import React from 'react';
import { Nav } from 'react-bootstrap';
import './Spreads.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import execution from '../../../Image/Spreads/execution.png'
import transparency from '../../../Image/Spreads/transparency.png'
import spreads from '../../../Image/Spreads/spreads.jpeg'
import access from '../../../Image/Spreads/access.png'
import icon9 from '../../../Image/C-slider-icon/icon-9.svg'
import icon10 from '../../../Image/C-slider-icon/icon-10.svg'
import icon11 from '../../../Image/C-slider-icon/icon-11.svg'

const componentName = () => {
    return (
        <div>
            <TopSection />
            <NavSection />
            <div className='f-b-1 container'>
                <div className='forex'>
                    <div className='forex-info mt-padding'>
                        <p className='forex-p'>WELCOME TO X-TEN</p>
                        <h1 className='f-c'>Spreads, Swaps &<br /> Commissions</h1>
                        <p className='forex-p2'>In order to keep our commitment to the maximum moral standards, XTen deals with full transparency concerning pricing model, fees and execution.</p>
                        <div className='f-dd-c'>
                            <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                            <p className='small-p'>Trading involves a high level of risk</p>
                        </div>
                    </div>
                    <div>
                        <img className='f-img m-img' src={spreads} alt='' />
                    </div>
                </div>
            </div>



            <div className='get-started'>
                <div className='start-title pt-5'>
                    <h1 className='c-m-h'>Why Traders Choose the <span className='f-m-c'>NDD Model</span></h1>
                    <p className='ndd-p'>Experience the transparent NDD model using the award-winning MetaTrader platforms.</p>
                </div>
                <div className='start-box container'>
                    <div className='box4'>
                        <div>
                            <img className='ndd-img' src={execution} alt='' />
                        </div>
                        <div className='start-info padding mt-4'>
                            <h4>Exact execution</h4>
                            <p className='forex-p ex-p'>The No Dealing Desk model ensures traders receive accurate execution without delay or broker intervention. This makes trading smoother, especially in volatile market conditions.</p>
                        </div>
                    </div>
                    <div className='box4'>
                        <div>
                            <img className='ndd-img' src={transparency} alt='' />
                        </div>
                        <div className='start-info padding mt-4'>
                            <h4>Transparency</h4>
                            <p className='forex-p ex-p'>The NDD system increases trust between the trader and his broker. Full transparency regarding the execution model serves as evidence of the company's ethical business practices and related customer experiences.</p>
                        </div>
                    </div>
                    <div className='box4'>
                        <div>
                            <img className='ndd-img' src={access} alt='' />
                        </div>
                        <div className='start-info padding mt-4'>
                            <h4>Access to deep liquidity</h4>
                            <p className='forex-p ex-p'>The no-dealing-desk model guarantees direct access to the highest possible liquidity. This allows XTen to offer its clients access to Tier-1 banks with best-in-class trading conditions.</p>
                        </div>
                    </div>
                </div>

               
            </div>





            <div className='get-started'>
                <div className='start-title pt-5'>
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