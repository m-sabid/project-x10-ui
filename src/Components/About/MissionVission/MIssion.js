import React from 'react';
import './Mission.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import { Nav } from 'react-bootstrap';
import choose from '../../../Image/forex/choose-gorex.jpg'
import ten from '../../../Image/mission/x-ten.jpg'
import mission from '../../../Image/mission/mission.jpg'
import vision from '../../../Image/mission/vision.jpg'
import Slider from '../../Trading/Forex/Slider/Slider'
import Slider2 from '../../Trading/Forex/Slider2/Slider2'
import Slider3 from '../../Trading/Forex/Slider3/Slider3'
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
                    <div className='forex-info'>
                        <p className='forex-p to'>WELCOME TO X-TEN</p>
                        <h1 className='f-c to'>X-TEN</h1>
                        <p className='forex-p2 to'>Your success is our legacy.</p>
                        <div className='f-dd-c'>
                            <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                            <p className='small-p'>Trading involves a high level of risk</p>
                        </div>
                    </div>
                    <div>
                        <img className='f-img x-ten' src={ten} alt='' />
                    </div>
                </div>
            </div>


            <div className='f-b-1 container'>
                <div className='forex'>
                    <div>

                        <div>
                            <img className='vps-mar-img' src={mission} alt=''></img>

                        </div>
                    </div>
                    <div className='forex-info2 mt-5 mission'>
                        <h1 className='f-m-h'>Our<span className='f-m-c'> Mission</span></h1>
                        <p className='mt-4'>Educating, supporting and empowering investors and making informed venture decisions.</p>
                        <p className='mt-3'>KTen aims to build on its reputation as a global brand that uses the latest financial technology to ensure smooth, secure and transparent trading</p>
                    </div>
                </div>
            </div>



            <div className='f-b-1 container'>
                <div className='forex'>

                    <div className='v-img2'>

                        <div>
                            <img className='vps-mar-img' src={vision} alt=''></img>

                        </div>
                    </div>

                    <div className='forex-info2 vision'>
                        <h1 className='f-m-h'>Our<span className='f-m-c'> Vision</span></h1>
                        <p className='mt-4'>In a rapid growing industry with infinite variables, XTen is committed to constant ethics, service and technological advancement</p>
                        <p className='mt-3'>By ensuring that our customers' education, growth and profitability remain at the heart of our business, we strive to create a community of informed and responsible merchants with whom our partnerships will stand the test of time</p>
                        <p className='mt-3'>Our commitment to standard customer service and high-quality investment research hopes to raise the bar of what it means to be a financial services provider, solidifying our position as the market leader in customer satisfaction.</p>
                    </div>
                    <div className='v-img'>

                        <div>
                            <img className='vps-mar-img v' src={vision} alt=''></img>

                        </div>
                    </div>
                </div>
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





        </div>
    );
};

export default componentName;