import React from 'react';
import './FreeVPS.css'
import { Nav } from 'react-bootstrap';
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import icon9 from '../../../Image/C-slider-icon/icon-9.svg'
import icon10 from '../../../Image/C-slider-icon/icon-10.svg'
import icon11 from '../../../Image/C-slider-icon/icon-11.svg'
import choose from '../../../Image/forex/choose-gorex.jpg'
import Slider from '../../Trading/Forex/Slider/Slider'
import Slider2 from '../../Trading/Forex/Slider2/Slider2'
import Slider3 from '../../Trading/Forex/Slider3/Slider3'
import vps from '../../../Image/FreeVPS/vps.png'
import ab from '../../../Image/FreeVPS/ab-vps.jpeg'

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
                            <h1 className='f-c'>Free VPS</h1>
                            <p className='forex-p2'>Free VPS Service is offered for any type of accounts in order to confirm a steady and safe trading.</p>
                            <div className='f-dd-c'>
                                <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                                <p className='small-p'>Trading involves a high level of risk</p>
                            </div>
                        </div>
                        <div>
                            <img className='f-img' src={vps} alt='' />
                        </div>
                    </div>
                </div>
                <div className='f-b-1 container'>
                    <div className='forex'>
                        <div>
                           
                        <div>
                          <img className='vps-mar-img' src={ab} alt=''></img>

                        </div>
                        </div>
                        <div className='forex-info2'>
                            <h1 className='f-m-h'>What is a<span className='f-m-c'> VPS</span></h1>
                            <p className='mt-4'>A VPS or virtual private server is a virtual machine located on a master server.</p>
                            <p className='mt-3'>It works as a complete computer connected to your merchant account 24/7, regardless of whether your personal device is turned on or connected to the Internet.</p>
                            <p className='mt-3'>This means that despite unexpected threats such as computer viruses or Internet disconnection, the integrity of your trading strategy is not compromised and your trading can continue to run smoothly and without delay.</p>
                        </div>
                    </div>
                </div>
            </div>




            <div className='get-started'>
                <div className='start-title'>
                    <h1 className='c-m-h'>Benefits of<span className='f-m-c'> Free VPS</span></h1>
                </div>
                <div className='start-box container'>
                    <div className='box box-b'>
                        <div>
                            <img src={icon9} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h4>Faster Execution</h4>
                            <p className='forex-p'>VPS trading enables faster execution speeds thanks to simplified connection through a secure virtual terminal.</p>
                        </div>
                    </div>
                    <div className='box box-b'>
                        <div>
                            <img src={icon10} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h4>Seamless algorithmic trading</h4>
                            <p className='forex-p'>Virtual private servers ensure that your trading strategy runs 24/5 without interruption. This is particularly useful for algorithmic traders, as expert advisors can continue to receive or close trades automatically, without your personal device being connected to the internet or enabled.</p>
                        </div>
                    </div>
                    <div className='box box-b'>
                        <div>
                            <img src={icon11} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h4>Increased Security</h4>
                            <p className='forex-p'>A VPS can protect you from all kinds of unexpected threats that affect honesty, such as computer viruses, RAM corruption, power outages or unreliable WiFi speeds.</p>
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