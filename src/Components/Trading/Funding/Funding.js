import React from 'react';
import { Nav } from 'react-bootstrap';
import './Funding.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'
import withdraw from '../../../Image/Funding/withdral.png'
import funding from '../../../Image/Funding/funding.jpg'
import icon1 from '../../../Image/Funding/icon-1.svg'
import icon2 from '../../../Image/Funding/icon-2.svg'
import icon3 from '../../../Image/Funding/icon-3.svg'
import icon4 from '../../../Image/Funding/icon-4.svg'

const componentName = () => {
    return (
        <div>
            <TopSection />
            <NavSection />

            <div className='forex-banner'>
                <div className='f-b-1 container'>
                    <div className='forex'>
                        <div className='forex-info'>
                            <p className='forex-p mid'>WELCOME TO X-TEN</p>
                            <h1 className='f-c mid'>Funding & Withdrawal</h1>
                            <p className='forex-p2 mid'>Unified, prompt, stress-free.</p>
                            <div className='f-dd-c'>
                                <Nav.Link href="#home" className='start-btn-b mt-5'>Start Trading</Nav.Link>
                                <p className='small-p'>Trading involves a high level of risk</p>
                            </div>
                        </div>
                        <div>
                            <img className='f-img funding-img' src={funding} alt='' />
                        </div>
                    </div>
                </div>
                <div className='f-b-1 container'>
                    <div className='forex'>
                        <div>
                            <img className='st-mar-img' src={withdraw} alt=''></img>
                        </div>
                        <div className='forex-info2'>
                            <div className='forex-info3 depo'>
                                <h1 className='f-m-h'>Deposit money into your account through our<br /> secure<span className='f-m-c'> XTen wallet</span></h1>
                                <p className='mt-4'>A useful investment tool that speeds up your position in the KYC queue, manages<br /> your risks and simplifies the process of funding your account.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className='acct'>
                <div className='forex-info'>
                    <p className='forex-p'>WELCOME TO X-TEN</p>
                    <h1 className='f-c bold'>The Benefits of the<span className='f-m-c'> XTen Wallet</span></h1>
                </div>
            </div>




            <div className='get-started'>
                <div className='start-box walet-grid container'>
                    <div className='box5'>
                        <div>
                            <img src={icon1} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h4>Instant Deposits and Withdrawals</h4>
                            <p className='forex-p ex-p'>To become a true trader, deposit money in your wallet immediately after registration so that your funds are ready to trade as soon as your account is verified. Your wallet also allows you to receive instant payments from your business account when you choose to withdraw.</p>
                        </div>
                    </div>
                    <div className='box5'>
                        <div>
                            <img src={icon2} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h4>Risk Management</h4>
                            <p className='forex-p ex-p'>XTen Wallet provides a safe center where you can keep your money safe from unpredictable and changing market conditions. You can also use it to transfer money only when and where you want to take risks, while keeping your capital separate from your trading account until the end of time.</p>
                        </div>
                    </div>
                    <div className='box5'>
                        <div>
                            <img src={icon3} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h4>Wallet for each currency</h4>
                            <p className='forex-p ex-p'>You can further split your funds by opening XTen wallets in any available currency: USD, GBP & EUR.</p>
                        </div>
                    </div>
                    <div className='box5'>
                        <div>
                            <img src={icon4} alt='' />
                        </div>
                        <div className='start-info mt-4'>
                            <h4>Accelerated KYC process</h4>
                            <p className='forex-p ex-p'>New registered accounts with XTen wallets funded by our KYC team will have priority in the document approval process. Pay money into your wallet when you open an account so you can start trading as soon as possible!</p>
                        </div>
                    </div>
                </div>

                <div className='s-b-c'>
                    <h5 className='find2'>Ready to start trading?</h5>
                    <Nav.Link href="#home" className='start-btn-b find-b mt-3'>Find Your Account</Nav.Link>
                    <p className='small-p'>Trading involves a high level of risk</p>
                </div>
            </div>










        </div>
    );
};

export default componentName;