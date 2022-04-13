import React from 'react';
import './Forex.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import forex from '../../../Image/forex/forex.png'
import video from '../../../Image/video/currencies-mobile-new.mp4'
import choose from '../../../Image/forex/choose-gorex.jpg'
import { Nav, Table } from 'react-bootstrap';
import Slider from './Slider/Slider'
import Slider2 from './Slider2/Slider2'
import Slider3 from './Slider3/Slider3'
import icon9 from '../../../Image/C-slider-icon/icon-9.svg'
import icon10 from '../../../Image/C-slider-icon/icon-10.svg'
import icon11 from '../../../Image/C-slider-icon/icon-11.svg'




const componentName = () => {







    return (
        <>
            <TopSection />
            <NavSection />
            <div className='forex-banner'>
                <div className='f-b-1 container'>
                    <div className='forex'>
                        <div className='forex-info'>
                            <p className='forex-p'>WELCOME TO X-TEN</p>
                            <h1 className='f-c'>Forex</h1>
                            <p className='forex-p2'>Exchange the world's most fluid currency exchanging market with tight spreads, low commissions and on an average execution of 0.02 seconds.</p>
                            <div className='f-dd-c'>
                                <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                                <p className='small-p'>Trading involves a high level of risk</p>
                            </div>
                        </div>
                        <div>
                            <img className='f-img' src={forex} alt='' />
                        </div>
                    </div>
                </div>
                <div className='f-b-1 container'>
                    <div className='forex'>
                        <div>
                            <video className='f-video' loop autoPlay>
                                <source src={video} type="video/mp4" />
                            </video>

                        </div>
                        <div className='forex-info2'>
                            <h1 className='f-m-h'>About the<span className='f-m-c'> Forex Market</span></h1>
                            <p className='mt-4'>The Forex trade (or FX) market is the world's biggest and most exchanged web-based monetary market. It includes exchanging the worth of one money against the worth of another.</p>
                            <p className='mt-3'>XTen FX offers customers the capacity to exchange forex sets through CFDs, or Contracts for Difference. CFD FX exchanging permits you to exploit the value variances of trade rates by taking an exchanging position depending on what your research and analysis.</p>
                            <p className='mt-3'>This suggests you can either take a buy/long position or sell/short position on a trading pair based on your study.</p>
                            <p className='mt-3'>It involves trading the value of one currency against the value of another.</p>


                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div className='table-title'>
                    <h1>FX Pairs</h1>
                    <p>Access tier-1 bank liquidity and choose from our wide selection of currency pairs.</p>
                </div>

                <div className='container mt-5'>
                    <Table className='forex-table' striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Contract Size</th>
                                <th>Max Lot Per Trade</th>
                                <th>Minimum fluctuations</th>
                                <th>Margin (1:100 Leverage)</th>
                                <th>Pip Calculation</th>
                                <th>Limit/Stop order*</th>
                                <th>Trading Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>AUDCAD</td>
                                <td>AUD 100,000	</td>
                                <td>50 Lot	</td>
                                <td>0.00001</td>
                                <td>1,000 AUD</td>
                                <td>0.0001=10 CAD</td>
                                <td>5</td>
                                <td>Monday 01:02 – Friday 23:57</td>
                            </tr>
                            {/* <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr> */}
                            {/* <tr>
                                <td>3</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr> */}
                        </tbody>
                    </Table>
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


        </>
    );
};

export default componentName;