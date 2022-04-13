import React from 'react';
import './HomePartner.css'
import Introducers from '../../../Image/img-for-introducers.svg'
import Benefits from '../../../Image/for-money-managers.svg'
import { Nav } from 'react-bootstrap';
import { IconName } from "react-icons/fa";


const componentName = () => {
    return (
        <div className='hp'>
            <div className='pt-5 hp-title'>
                <h1>Partnarship Partner with X-TEN</h1>
                <p className='ndd-p'>Grow your income by working as an Introducing Broker</p>
            </div>


            <div className='container mt-5 hp-inf'>
                <div className='hp-left'>
                    <div className='lft-i'>
                        <img src={Introducers} alt='' />
                    </div>

                    <div>
                        <h3 className='mt-3'>Benefits for Introducers</h3>
                        <div className='d-flex mt-3'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>Customizable rebate schemes that<br />
                                allow you to optimise your earning potential</p>
                        </div>
                        <div className='d-flex mt-1'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>Lifetime commissions & daily payouts</p>
                        </div>
                        <div className='d-flex mt-1'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>Ability to recruit as many partners as you wish and manage them through our Partners’ Area</p>
                        </div>
                        <div className='d-flex mt-1'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>
                                Special rewards from our loyalty program</p>
                        </div>
                    </div>
                </div>



                <div className='hp-right'>
                    <div className='lft-i'>
                        <img src={Benefits} alt='' />
                    </div>

                    <div>
                        <h3 className='mt-3'>Benefits for Strategy Providers</h3>
                        <div className='d-flex mt-3'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>Execute orders with a Liquidity Provider</p>
                        </div>
                        <div className='d-flex mt-1'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>Share your trading strategy on MT4 PAMM or cTrader Copy and have others copy you</p>
                        </div>
                        <div className='d-flex mt-1'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>
                                Charge your clients performance, volume and management fees</p>
                        </div>
                        <div className='d-flex mt-1'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>

                                Receive commissions and all the benefits of an introducer</p>
                        </div>
                    </div>
                </div>
            </div>

            
            



            <Nav.Link href="#home" className='intro-btn'>Register as an introducer</Nav.Link>
        </div>
    );
};

export default componentName;