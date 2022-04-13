import React from 'react';
import './MoneyBanner.css'
import wire from '../../../Image/wire.png'
import plus from '../../../Image/plus-debit.png'
import visa from '../../../Image/visa-mastercard.png'
import union from '../../../Image/unionpay.png'
import pay from '../../../Image/paytrust.png'
import coin from '../../../Image/coin.png'

const componentName = () => {
    return (
        <div className='mb'>
            <div className='mb-title pt-5'>
                <h2>Manage your money easily and safely</h2>
            </div>

            <div className='mb-flex'>
                <div className='mb-left'>
                    <div className='d-flex'>
                        <img className='' src={wire} alt=''/>
                        <img className='ms-3' src={plus} alt=''/>
                    </div>
                    <div className='d-flex'>
                        <img className=' mt-3' src={visa} alt=''/>
                        <img className='ms-3 mt-3' src={union} alt=''/>
                    </div>
                    <div className='d-flex'>
                        <img className=' mt-3' src={pay} alt=''/>
                        <img className='ms-3 mt-3' src={coin} alt=''/>
                    </div>
                   
                </div>
                <div className='mb-right'>

                <div className='mb-bx'>

                        <div className='d-flex mt-3'>
                            <i class="far fa-check-circle mb-icon"></i>
                            <p className='ms-3 mb-p'>Multiple payment methods</p>
                        </div>
                        <div className='d-flex mt-4'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>Instant deposits & fast withdrawals</p>
                        </div>
                        <div className='d-flex mt-4'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>Zero fees</p>
                        </div>
                        <div className='d-flex mt-4'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>
                            Easy fund transfers between your trading accounts</p>
                        </div>
                        <div className='d-flex mt-4'>
                            <i class="far fa-check-circle hp-icon"></i>
                            <p className='ms-3 hp-p'>
                            Segregated client funds, kept safely in Tier-1 banks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default componentName;