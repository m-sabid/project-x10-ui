import React from 'react';
import './Opportunity.css'
import Forex from '../../../Image/icons8-forex.png'
import indeces from '../../../Image/icon8-indices.png'
import Shares from '../../../Image/icon8-Shares.png'
import metala from '../../../Image/icon8-Metals.png'
import energies from '../../../Image/icon8-Energies.png'
import eTFs from '../../../Image/icon-8ETFs.png'
import cryptocurrencies from '../../../Image/icons-8-bitcoin.png'
import { Nav } from 'react-bootstrap';

const componentName = () => {
    return (
        <div className='op'>
            <div className='op-title pt-5'>
                <h1>Find more opportunities to trade</h1>
                <p className='op-p'>Trade over 1000 assets with institutional-grade conditions</p>
            </div>


            <div className='container'>
                <div className='op-d mt-5'>
                    <div className='op-card'>
                        <div className='d-flex'>
                            <img className='op-img' src={Forex} alt='' />
                            <Nav.Link href="#home" className='card-title'><h4>Forex</h4></Nav.Link>
                        </div>
                        <p className=''>Trade the most liquid Forex market in the world with narrow margins, low commissions.</p>
                    </div>
                    <div className='op-card'>
                        <div className='d-flex'>
                            <img className='op-img' src={indeces} alt='' />
                            <Nav.Link href="#home" className='card-title'><h4>commodities</h4></Nav.Link>
                        </div>
                        <p className=''>Trade a wide variety of commodities Spreads as low as 0.0 pips.</p>
                    </div>
                    <div className='op-card'>
                        <div className='d-flex'>
                            <img className='op-img' src={Shares} alt='' />
                            <Nav.Link href="#home" className='card-title'><h4>Stocks</h4></Nav.Link>
                        </div>
                        <p className=''>TLook over a wide scope of global value CFDs and expand your portfolio with low fees.</p>
                    </div>
                    <div className='op-card'>
                        <div className='d-flex'>
                            <img className='op-img' src={metala} alt='' />
                            <Nav.Link href="#home" className='card-title'><h4>Indices</h4></Nav.Link>
                        </div>
                        <p className=''>Trade CFDs with the world's most well-known lists with lightning-quick execution.</p>
                    </div>

                </div>
            </div>



            <div className='container'>
                <div className='op-d2'>
                    <div className='op-card'>
                        <div className='d-flex'>
                            <img className='op-img' src={energies} alt='' />
                            <Nav.Link href="#home" className='card-title'><h4>Spread, Swap </h4></Nav.Link>
                        </div>
                        <p className=''>In line with our commitment to the highest ethical standards, XTen provides full transparency about the company’s fees,</p>
                    </div>
                    <div className='op-card'>
                        <div className='d-flex'>
                            <img className='op-img' src={eTFs} alt='' />
                            <Nav.Link href="#home" className='card-title'><h4>Safety</h4></Nav.Link>
                        </div>
                        <p className=''>At XTen, we take our obligation to serve you capably.</p>
                    </div>
                    <div className='op-card'>
                        <div className='d-flex'>
                            <img className='op-img' src={cryptocurrencies} alt='' />
                            <Nav.Link href="#home" className='card-title'><h4>Cryptocurrencies</h4></Nav.Link>

                        </div>
                        <p className=''>Buy or Sell CFDs on Bitcoin, Ethereum, Litecoin, Ripple and more.</p>
                    </div>

                </div>
            </div>

            <Nav.Link href="#home" className='view-btn'>View all markets</Nav.Link>



        </div>
    );
};

export default componentName;