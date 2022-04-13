import React from 'react';
import './HomeTrading.css'
import Image1 from '../../../Image/forex/forex.png';
import Image2 from '../../../Image/macbook-iphone-ipad-c-trader.jpg';
import { Nav } from 'react-bootstrap';

const componentName = () => {
    return (
        <div>
            <div className='mt-5 ht-title'>
                <h2>Powerful trading platforms for all devices</h2>
            </div>

            <div className='container ht-flex'>
                <div className='ht-first'>
                    <div>
                        <img className='first-img' src={Image1} alt='' />
                    </div>
                    <div className='ht-info'>
                        <h3>MT4</h3>
                        <p>MetaTrader 4 is the most popular platform among traders globally. It is user-friendly, customisable and simple enough for beginners.</p>
                        <Nav.Link href="#home" className='ht-btn'>More about MT4<i class="fas fa-chevron-right ms-2 ai"></i></Nav.Link>

                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='container ht-flex'>
                <div className='ht-second'>
                <div>
                        <img className='second-img ho' src={Image2} alt='' />
                    </div>
                    <div className='ht-info2'>
                        <h3>cTrader</h3>
                        <p>cTrader is an innovative trading platform that can satisfy both beginners and experienced traders. It features enhanced trading functionalities, sophisticated performance analysis tools and advanced risk management. Traders can combine manual, copy and automated trading on one interface.</p>
                        <Nav.Link href="#home" className='ht-btn'>More about cTrader<i class="fas fa-chevron-right ms-2 ai"></i></Nav.Link>

                    </div>
                    <div>
                        <img className='second-img hi' src={Image2} alt='' />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default componentName;