import React from 'react';
import './Home.css'
import NavSection from '../../Shared/NavSection/NavSection'
import TopSection from '../../Shared/TopSection/TopSection'
import Opportunity from '../Opportunity/Opportunity'
import ChoiceAccount from '../ChoiceAccount/ChoiceAccount'
import HomePartner from '../HomePartner/HomePartner'
import Banner from '../Banner/Banner'
import HomeTrading from '../HomeTrading/HomeTrading'
import HomeClient from '../HomeClient/HomeClient'
import MoneyBanner from '../ManageMoneyBanner/MoneyBanner'
import Footer from '../../Shared/Footer/Footer'
import { FaArrowUp } from "react-icons/fa"




const componentName = () => {
    return (
        <div>
            <TopSection/>
            <NavSection/>
            <Banner/>
            <Opportunity/>
            <ChoiceAccount/>
            <HomePartner/>
            <HomeTrading/>
            <MoneyBanner/>

            <div className='arrow'>
                <a href='#' className='arro'><FaArrowUp/></a>
            </div>
           
            <Footer/>
        </div>
    );
};

export default componentName;