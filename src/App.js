import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home'
import Register from './Components/Register/Register'
import Forex from './Components/Trading/Forex/Forex'
import Commodities from './Components/Trading/Commodities/Commodities'
import Stocks from './Components/Trading/Stocks/Stocks'
import Indices from './Components/Trading/Indices/Indices'
import AccountType from './Components/Trading/AccountType/AccountType'
import MarketOverview from './Components/Trading/MarketOverview/MarketOverview'
import MT4 from './Components/Trading/MT4/MT4'
import FixApi from './Components/Trading/FixApi/FixApi'
import Spreads from './Components/Trading/Spreads/Spreads'
import Funding from './Components/Trading/Funding/Funding'
import Safety from './Components/Trading/Safety-&-Funds/Safety'
import Swap from './Components/Trading/Swap-free-accounts/Swap'
import TradingTools from './Components/Trading/TradingTools/TradingTools'
import FreeVPS from './Components/Trading/FreeVPS/FreeVPS'
import Mission from './Components/About/MissionVission/MIssion'
import Advantage from './Components/About/Advantage/Advantage'
import UserLogin from './Components/PartnerLogin/UserLogin';
import Test from './Components/Test/Test';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<UserLogin/>} />
          <Route index element={<Home />} />
          <Route path="/forex" element={<Forex/>} />
          <Route path="/commodities" element={<Commodities/>} />
          <Route path="/stocks" element={<Stocks/>} />
          <Route path="/indices" element={<Indices/>} />
          <Route path="/account-type" element={<AccountType/>} />
          <Route path="/market-overview" element={<MarketOverview/>} />
          <Route path="/mt4" element={<MT4/>} />
          <Route path="/fix-api" element={<FixApi/>} />
          <Route path="/spreads-swaps-commissions" element={<Spreads/>} />
          <Route path="/funding-withdrawal" element={<Funding/>} />
          <Route path="/safety" element={<Safety/>} />
          <Route path="/swap-free-accounts" element={<Swap/>} />
          <Route path="/trading-tools" element={<TradingTools/>} />
          <Route path="/free-VPS" element={<FreeVPS/>} />


          <Route path="/about/X-TEN" element={<Mission/>} />
          <Route path="/about/advantages" element={<Advantage/>} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
