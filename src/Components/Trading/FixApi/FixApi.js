import React from 'react';
import { Nav } from 'react-bootstrap';
import './FixApi.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import fixA from '../../../Image/Fix-Api/api-image.jpg'
import fixApi from '../../../Image/Fix-Api/fix-api.jpg'
import icon1 from '../../../Image/Fix-Api/icon-1.svg'
import icon2 from '../../../Image/Fix-Api/icon-2.svg'
import icon3 from '../../../Image/Fix-Api/icon-3.svg'
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
                        <h1 className='f-c'>FIX API</h1>
                        <p className='forex-p2'>Financial Information Exchange (FIX) API
                            The super-fast technology for secured online trading</p>
                        <div className='f-dd-c'>
                            <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                            <p className='small-p'>Trading involves a high level of risk</p>
                        </div>
                    </div>
                    <div>
                        <img className='f-img m-img' src={fixApi} alt='' />
                    </div>
                </div>
            </div>
            <div className='f-b-1 container'>
                <div className='forex'>
                    <div>
                        <img className='st-mar-img' src={fixA} alt=''></img>

                    </div>
                    <div className='forex-info3'>
                        <h1 className='f-m-h'>Access The World Market with<span className='f-m-c'> Very Fast and Accurate Execution</span></h1>
                        <p className='mt-4'>FIX API is an advanced technology that enables the seamless, real-time exchange of large amounts of financial information.</p>
                        <p className='mt-3'>Thanks to the reliability of the technology and the speed with which large amounts of data are transferred, it has long been used by major financial market institutions, including larger banks and exchanges.</p>
                        <p className='mt-3'>In the retail trading environment, we offer world-class services that directly connect brokers, traders and Tier 1 liquidity providers offering FIX API technology. This means Exchange translations are done with the highest accuracy without delay.</p>
                    </div>
                </div>
            </div>




            <div className='get-started'>
                <div className='start-title pt-5'>
                    <h1 className='c-m-h'>Benefits of the <span className='f-m-c'>FIX API</span></h1>
                </div>
                <div className='start-box container'>
                    <div className='box3'>
                        <div>
                            <img src={icon1} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h2>Speed</h2>
                            <p className='forex-p'>FIX API technology enables the real-time transfer of large amounts of trade-related data, including pre- and post-trade information. This eliminates potentially harmful delays and eliminates correct trading strategies.</p>
                        </div>
                    </div>
                    <div className='box3'>
                        <div>
                            <img src={icon2} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h2>Reliability</h2>
                            <p className='forex-p'>API FIX technology has been used with remarkable reliability by leading financial institutions since 1992. When implemented in retail, it provides a much more stable trading environment while significantly improving the average trading experience, both manually and in algorithms.</p>
                        </div>
                    </div>
                    <div className='box3'>
                        <div>
                            <img src={icon3} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h2>Privacy</h2>
                            <p className='forex-p'>FIX API technology allows investors to maintain their transactions on their personal computers, eliminating the fear of disclosing their algorithms to others. In general, this gives traders confidence that their trading strategy will not be revealed on any trading platform.</p>
                        </div>
                    </div>
                </div>

                <div className='s-b-c-2'>
                    <h5 className='find'>Want to find out more about FIX API?</h5>
                    <Nav.Link href="#home" className='start-btn-b fix-b'>Contact Us</Nav.Link>
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