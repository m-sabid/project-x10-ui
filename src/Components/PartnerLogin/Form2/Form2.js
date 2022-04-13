import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import useAuth from '../../hooks/useAuth';

const getData2 = () => {
  const data2 = localStorage.getItem("users2");
  if (data2) {
    return JSON.parse(data2);
  } else {
    return [];
  }
};

const Form2 = () => {
  const [users2, setUsers2] = useState(getData2());

  const [date, setDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [nationality, setNationality] = useState("");
  const [FAddress, setFAddress] = useState("");
  const [city, setCity] = useState("");
  const [pass_nid, setPass_nid] = useState("");
  const [tradingStyle, setTradingStyle] = useState("");
  const [accountType, setAccountType] = useState("");
  const [currency, setCurrency] = useState("");
  const [leverage, setLeverage] = useState("");
  const [CFDs, setCFDs] = useState("");
  const [metals, setMetals] = useState("");
  const [equity, setEquity] = useState("");
  const [commodities, setCommodities] = useState("");
  const [futures, setFutures] = useState("");
  const [wealth, setWealth] = useState("");
  const [wort, setWort] = useState("");
  const [income, setIncome] = useState("");
  const [lots, setLots] = useState("");
  const [deposit, setDeposit] = useState("");
  const [education, setEducation] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");

  const handelSubmit2 = (e) => {
    e.preventDefault();
    //   object
    let user2 = {
      date,
      birthPlace,
      nationality,
      FAddress,
      city,
      pass_nid,
      tradingStyle,
      accountType,
      currency,
      leverage,
      CFDs,
      metals,
      equity,
      commodities,
      futures,
      wealth,
      wort,
      income,
      lots,
      deposit,
      education,
      setEmploymentStatus,
    };
    setUsers2([...users2, user2]);

    setDate("");
    setBirthPlace("");
    setNationality("");
    setFAddress("");
    setCity("");
    setPass_nid("");
    setTradingStyle("");
    setAccountType("");
    setCurrency("");
    setLeverage("");
    setCFDs("");
    setMetals("");
    setEquity("");
    setCommodities("");
    setFutures("");
    setWealth("");
    setWort("");
    setIncome("");
    setLots("");
    setDeposit("");
    setEducation("");
  };


  useEffect(()=>{
      localStorage.setItem("users", JSON.stringify(users2));
  }, [users2]);




  return (
    <div className="login">
      <div className="container h">
        {
          <form onSubmit={handelSubmit2} className="login-form">
            <h3 className="pt-1 color">My Trading Profile</h3>

            <br />
            <h6 className="mt-0">Date Of Birth</h6>
            <input
              className="login-input mt-1"
              type="date"
              name="birth-date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              placeholder="Date Of Birth"
            />
            <br />
            <h6 className="mt-1">Place of Birth</h6>
            <select
              class="form-select mt-1"
              aria-label="Default select example"
              name="birthPlace"
              onChange={(e) => setBirthPlace(e.target.value)}
              value={birthPlace}
            >
              <option selected>Place of Birth</option>
              <option>Andorra</option>
              <option>United Arab Emirates</option>
              <option>Afghanistan</option>
              <option>Antigua and Barbuda</option>
              <option>Anguilla</option>
              <option>Albania</option>
              <option>Armenia</option>
              <option>Angola</option>
              <option>Antarctica</option>
              <option>Argentina</option>
              <option>American Samoa</option>
              <option>Austria</option>
              <option>Australia</option>
              <option>Aruba</option>
              <option>Alland Islands</option>
              <option>Azerbaijan</option>
              <option>Bosnia and Herzegovina</option>
              <option>Barbados</option>
              <option>Bangladesh</option>
              <option>Belgium</option>
              <option>Burkina Faso</option>
              <option>Bulgaria</option>
              <option>Bahrain</option>
              <option>Burundi</option>
              <option>Benin</option>
              <option>Saint Barthelemy</option>
              <option>Bermuda</option>
              <option>Brunei Darussalam</option>
              <option>Bolivia</option>
              <option>Brazil</option>
              <option>Bahamas</option>
              <option>Bhutan</option>
              <option>Bouvet Island</option>
              <option>Botswana</option>
              <option>Belarus</option>
              <option>Belize</option>
              <option>Canada</option>
              <option>Cocos (Keeling) Islands</option>
              <option>Congo</option>
              <option>Central African Republic</option>
              <option>Switzerland</option>
              <option>Cote d'Ivoire</option>
              <option>Cook Islands</option>
              <option>Chile</option>
              <option>Cameroon</option>
              <option>China</option>
              <option>Colombia</option>
              <option>Costa Rica</option>
              <option>Cuba</option>
              <option>Cape Verde</option>
              <option>Curacao</option>
              <option>Christmas Island</option>
              <option>Cyprus</option>
              <option>Czech Republic</option>
              <option>Germany</option>
              <option>Djibouti</option>
              <option>Denmark</option>
              <option>Dominica</option>
              <option>Dominican Republic</option>
              <option>Algeria</option>
              <option>Ecuador</option>
              <option>Estonia</option>
              <option>Egypt</option>
              <option>Western Sahara</option>
              <option>Eritrea</option>
              <option>Spain</option>
              <option>Ethiopia</option>
              <option>Finland</option>
              <option>Fiji</option>
              <option>Falkland Islands (Malvinas)</option>
              <option>Micronesia</option>
              <option>Faroe Islands</option>
              <option>France</option>
              <option>Gabon</option>
              <option>United Kingdom</option>
              <option>Grenada</option>
              <option>Georgia</option>
              <option>French Guiana</option>
              <option>Guernsey</option>
              <option>Ghana</option>
              <option>Gibraltar</option>
              <option>Greenland</option>
              <option>Gambia</option>
              <option>Guinea</option>
              <option>Guadeloupe</option>
              <option>Equatorial Guinea</option>
              <option>Greece</option>
              <option>South Georgia and the South Sandwich Islands</option>
              <option>Guatemala</option>
              <option>Guam</option>
              <option>Guinea-Bissau</option>
              <option>Guyana</option>
              <option>Hong Kong</option>
              <option>Heard Island and McDonald Islands</option>
              <option>Honduras</option>
              <option>Croatia</option>
              <option>Haiti</option>
              <option>Hungary</option>
              <option>Indonesia</option>
              <option>Ireland</option>
              <option>Isle of Man</option>
              <option>India</option>
              <option>British Indian Ocean Territory</option>
              <option>Iraq</option>
              <option>Iran</option>
              <option>Iceland</option>
              <option>Italy</option>
              <option>Jersey</option>
              <option>Jamaica</option>
              <option>Jordan</option>
              <option>Japan</option>
              <option>Kenya</option>
              <option>Kyrgyzstan</option>
              <option>Cambodia</option>
              <option>Kiribati</option>
              <option>Comoros</option>
              <option>Saint Kitts and Nevis</option>
              <option>South Korea</option>
              <option>North Korea</option>
              <option>Kuwait</option>
              <option>Cayman Islands</option>
              <option>Kazakhstan</option>
              <option>Lao People's Democratic Republic</option>
              <option>Lebanon</option>
              <option>Saint Lucia</option>
              <option>Liechtenstein</option>
              <option>Sri Lanka</option>
              <option>Liberia</option>
              <option>Lesotho</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Latvia</option>
              <option>Libya</option>
              <option>Morocco</option>
              <option>Monaco</option>
              <option>Moldova</option>
              <option>Montenegro</option>
              <option>Saint Martin (French part)</option>
              <option>Madagascar</option>
              <option>Macedonia</option>
              <option>Mali</option>
              <option>Myanmar</option>
              <option>Mongolia</option>
              <option>Macao</option>
              <option>Northern Mariana Islands</option>
              <option>Martinique</option>
              <option>Mauritania</option>
              <option>Montserrat</option>
              <option>Malta</option>
              <option>Mauritius</option>
              <option>Maldives</option>
              <option>Malawi</option>
              <option>Mexico</option>
              <option>Malaysia</option>
              <option>Mozambique</option>
              <option>Namibia</option>
              <option>New Caledonia</option>
              <option>Niger</option>
              <option>Norfolk Island</option>
              <option>Nigeria</option>
              <option>Nicaragua</option>
              <option>Netherlands</option>
              <option>Norway</option>
              <option>Nepal</option>
              <option>Nauru</option>
              <option>Niue</option>
              <option>New Zealand</option>
              <option>Oman</option>
              <option>Panama</option>
              <option>Peru</option>
              <option>French Polynesia</option>
              <option>Papua New Guinea</option>
              <option>Philippines</option>
              <option>Pakistan</option>
              <option>Poland</option>
              <option>Saint Pierre and Miquelon</option>
              <option>Pitcairn</option>
              <option>Puerto Rico</option>
              <option>Palestine</option>
              <option>Portugal</option>
              <option>Palau</option>
              <option>Paraguay</option>
              <option>Qatar</option>
              <option>Reunion</option>
              <option>Romania</option>
              <option>Serbia</option>
              <option>Russian Federation</option>
              <option>Rwanda</option>
              <option>Saudi Arabia</option>
              <option>Solomon Islands</option>
              <option>Seychelles</option>
              <option>Sudan</option>
              <option>Sweden</option>
              <option>Singapore</option>
              <option>Saint Helena</option>
              <option>Slovenia</option>
              <option>Svalbard and Jan Mayen</option>
              <option>Slovakia</option>
              <option>Sierra Leone</option>
              <option>San Marino</option>
              <option>Senegal</option>
              <option>Somalia</option>
              <option>Suriname</option>
              <option>South Sudan</option>
              <option>Sao Tome and Principe</option>
              <option>El Salvador</option>
              <option>Sint Maarten (Dutch part)</option>
              <option>Syrian Arab Republic</option>
              <option>Swaziland</option>
              <option>Turks and Caicos Islands</option>
              <option>Chad</option>
              <option>Togo</option>
              <option>Thailand</option>
              <option>Tajikistan</option>
              <option>Tokelau</option>
              <option>Timor-Leste</option>
              <option>Turkmenistan</option>
              <option>Tunisia</option>
              <option>Tonga</option>
              <option>Turkey</option>
              <option>Trinidad and Tobago</option>
              <option>Tuvalu</option>
              <option>Taiwan, Province of China</option>
              <option>United Republic of Tanzania</option>
              <option>Ukraine</option>
              <option>Uganda</option>
              <option>United States</option>
              <option>Uruguay</option>
              <option>Holy See (Vatican City State)</option>
              <option>Saint Vincent and the Grenadines</option>
              <option>Venezuela</option>
              <option>British Virgin Islands</option>
              <option>US Virgin Islands</option>
              <option>Vietnam</option>
              <option>Vanuatu</option>
              <option>Wallis and Futuna</option>
              <option>Samoa</option>
              <option>Kosovo</option>
              <option>Yemen</option>
              <option>Mayotte</option>
              <option>South Africa</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
            </select>

            <h6 className="mt-1">Nationality</h6>
            <select
              class="form-select mt-1"
              aria-label="Default select example"
              name="nationality"
              onChange={(e) => setNationality(e.target.value)}
              value={nationality}
            >
              <option selected>Nationality</option>
              <option>Andorra</option>
              <option>United Arab Emirates</option>
              <option>Afghanistan</option>
              <option>Antigua and Barbuda</option>
              <option>Anguilla</option>
              <option>Albania</option>
              <option>Armenia</option>
              <option>Angola</option>
              <option>Antarctica</option>
              <option>Argentina</option>
              <option>American Samoa</option>
              <option>Austria</option>
              <option>Australia</option>
              <option>Aruba</option>
              <option>Alland Islands</option>
              <option>Azerbaijan</option>
              <option>Bosnia and Herzegovina</option>
              <option>Barbados</option>
              <option>Bangladesh</option>
              <option>Belgium</option>
              <option>Burkina Faso</option>
              <option>Bulgaria</option>
              <option>Bahrain</option>
              <option>Burundi</option>
              <option>Benin</option>
              <option>Saint Barthelemy</option>
              <option>Bermuda</option>
              <option>Brunei Darussalam</option>
              <option>Bolivia</option>
              <option>Brazil</option>
              <option>Bahamas</option>
              <option>Bhutan</option>
              <option>Bouvet Island</option>
              <option>Botswana</option>
              <option>Belarus</option>
              <option>Belize</option>
              <option>Canada</option>
              <option>Cocos (Keeling) Islands</option>
              <option>Congo</option>
              <option>Central African Republic</option>
              <option>Switzerland</option>
              <option>Cote d'Ivoire</option>
              <option>Cook Islands</option>
              <option>Chile</option>
              <option>Cameroon</option>
              <option>China</option>
              <option>Colombia</option>
              <option>Costa Rica</option>
              <option>Cuba</option>
              <option>Cape Verde</option>
              <option>Curacao</option>
              <option>Christmas Island</option>
              <option>Cyprus</option>
              <option>Czech Republic</option>
              <option>Germany</option>
              <option>Djibouti</option>
              <option>Denmark</option>
              <option>Dominica</option>
              <option>Dominican Republic</option>
              <option>Algeria</option>
              <option>Ecuador</option>
              <option>Estonia</option>
              <option>Egypt</option>
              <option>Western Sahara</option>
              <option>Eritrea</option>
              <option>Spain</option>
              <option>Ethiopia</option>
              <option>Finland</option>
              <option>Fiji</option>
              <option>Falkland Islands (Malvinas)</option>
              <option>Micronesia</option>
              <option>Faroe Islands</option>
              <option>France</option>
              <option>Gabon</option>
              <option>United Kingdom</option>
              <option>Grenada</option>
              <option>Georgia</option>
              <option>French Guiana</option>
              <option>Guernsey</option>
              <option>Ghana</option>
              <option>Gibraltar</option>
              <option>Greenland</option>
              <option>Gambia</option>
              <option>Guinea</option>
              <option>Guadeloupe</option>
              <option>Equatorial Guinea</option>
              <option>Greece</option>
              <option>South Georgia and the South Sandwich Islands</option>
              <option>Guatemala</option>
              <option>Guam</option>
              <option>Guinea-Bissau</option>
              <option>Guyana</option>
              <option>Hong Kong</option>
              <option>Heard Island and McDonald Islands</option>
              <option>Honduras</option>
              <option>Croatia</option>
              <option>Haiti</option>
              <option>Hungary</option>
              <option>Indonesia</option>
              <option>Ireland</option>
              <option>Isle of Man</option>
              <option>India</option>
              <option>British Indian Ocean Territory</option>
              <option>Iraq</option>
              <option>Iran</option>
              <option>Iceland</option>
              <option>Italy</option>
              <option>Jersey</option>
              <option>Jamaica</option>
              <option>Jordan</option>
              <option>Japan</option>
              <option>Kenya</option>
              <option>Kyrgyzstan</option>
              <option>Cambodia</option>
              <option>Kiribati</option>
              <option>Comoros</option>
              <option>Saint Kitts and Nevis</option>
              <option>South Korea</option>
              <option>North Korea</option>
              <option>Kuwait</option>
              <option>Cayman Islands</option>
              <option>Kazakhstan</option>
              <option>Lao People's Democratic Republic</option>
              <option>Lebanon</option>
              <option>Saint Lucia</option>
              <option>Liechtenstein</option>
              <option>Sri Lanka</option>
              <option>Liberia</option>
              <option>Lesotho</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Latvia</option>
              <option>Libya</option>
              <option>Morocco</option>
              <option>Monaco</option>
              <option>Moldova</option>
              <option>Montenegro</option>
              <option>Saint Martin (French part)</option>
              <option>Madagascar</option>
              <option>Macedonia</option>
              <option>Mali</option>
              <option>Myanmar</option>
              <option>Mongolia</option>
              <option>Macao</option>
              <option>Northern Mariana Islands</option>
              <option>Martinique</option>
              <option>Mauritania</option>
              <option>Montserrat</option>
              <option>Malta</option>
              <option>Mauritius</option>
              <option>Maldives</option>
              <option>Malawi</option>
              <option>Mexico</option>
              <option>Malaysia</option>
              <option>Mozambique</option>
              <option>Namibia</option>
              <option>New Caledonia</option>
              <option>Niger</option>
              <option>Norfolk Island</option>
              <option>Nigeria</option>
              <option>Nicaragua</option>
              <option>Netherlands</option>
              <option>Norway</option>
              <option>Nepal</option>
              <option>Nauru</option>
              <option>Niue</option>
              <option>New Zealand</option>
              <option>Oman</option>
              <option>Panama</option>
              <option>Peru</option>
              <option>French Polynesia</option>
              <option>Papua New Guinea</option>
              <option>Philippines</option>
              <option>Pakistan</option>
              <option>Poland</option>
              <option>Saint Pierre and Miquelon</option>
              <option>Pitcairn</option>
              <option>Puerto Rico</option>
              <option>Palestine</option>
              <option>Portugal</option>
              <option>Palau</option>
              <option>Paraguay</option>
              <option>Qatar</option>
              <option>Reunion</option>
              <option>Romania</option>
              <option>Serbia</option>
              <option>Russian Federation</option>
              <option>Rwanda</option>
              <option>Saudi Arabia</option>
              <option>Solomon Islands</option>
              <option>Seychelles</option>
              <option>Sudan</option>
              <option>Sweden</option>
              <option>Singapore</option>
              <option>Saint Helena</option>
              <option>Slovenia</option>
              <option>Svalbard and Jan Mayen</option>
              <option>Slovakia</option>
              <option>Sierra Leone</option>
              <option>San Marino</option>
              <option>Senegal</option>
              <option>Somalia</option>
              <option>Suriname</option>
              <option>South Sudan</option>
              <option>Sao Tome and Principe</option>
              <option>El Salvador</option>
              <option>Sint Maarten (Dutch part)</option>
              <option>Syrian Arab Republic</option>
              <option>Swaziland</option>
              <option>Turks and Caicos Islands</option>
              <option>Chad</option>
              <option>Togo</option>
              <option>Thailand</option>
              <option>Tajikistan</option>
              <option>Tokelau</option>
              <option>Timor-Leste</option>
              <option>Turkmenistan</option>
              <option>Tunisia</option>
              <option>Tonga</option>
              <option>Turkey</option>
              <option>Trinidad and Tobago</option>
              <option>Tuvalu</option>
              <option>Taiwan, Province of China</option>
              <option>United Republic of Tanzania</option>
              <option>Ukraine</option>
              <option>Uganda</option>
              <option>United States</option>
              <option>Uruguay</option>
              <option>Holy See (Vatican City State)</option>
              <option>Saint Vincent and the Grenadines</option>
              <option>Venezuela</option>
              <option>British Virgin Islands</option>
              <option>US Virgin Islands</option>
              <option>Vietnam</option>
              <option>Vanuatu</option>
              <option>Wallis and Futuna</option>
              <option>Samoa</option>
              <option>Kosovo</option>
              <option>Yemen</option>
              <option>Mayotte</option>
              <option>South Africa</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
            </select>

            <h6 className="mt-1">Full Address</h6>
            <textarea
              class="form-control"
              placeholder="Full Address"
              id="floatingTextarea"
              onChange={(e) => setFAddress(e.target.value)}
              value={FAddress}
            ></textarea>

            <h6 className="mt-1">City</h6>
            <input
              className="login-input mt-1"
              type="text"
              name="city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City"
            />

            <br />
            <h6 className="mt-1">Passport/NID</h6>
            <input
              className="login-input mt-1"
              type="text"
              name="pass/nid"
              onChange={(e) => setPass_nid(e.target.value)}
              value={pass_nid}
              placeholder="Passport/NID Number"
            />
            <br />

            {/* <input className="login-input mt-4" type="text" name="country" onChange={handleOnChange} placeholder="Country"/> */}

            <div class="form-check mt-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                I agree to Terms & Conditions
              </label>
            </div>

            <h3 className="pt-1 color mt-5"> My Trading Preferences</h3>

            <h6 className="mt-4">Trading Style</h6>
            <select
              class="form-select mt-1"
              aria-label="Trading Style"
              name="style"
              onChange={(e) => setTradingStyle(e.target.value)}
              value={tradingStyle}
            >
              <option selected>Trading Style</option>
              <option>Scalping</option>
              <option>Day Trading / Short Term </option>
              <option>Mid / Long Term</option>
              <option>Hedging</option>
            </select>
            <h6 className="mt-1">Choose Account</h6>
            <select
              class="form-select mt-1"
              aria-label="Choose Account Type"
              name="a/c type"
              onChange={(e) => setAccountType(e.target.value)}
              value={accountType}
            >
              <option selected>Choose Account Type</option>
              <option>Starter</option>
              <option>Premium Account</option>
              <option>Ultimate</option>
            </select>
            <h6 className="mt-1">Base Currency</h6>
            <select
              class="form-select mt-1"
              aria-label="currency"
              name="currency"
              onChange={(e) => setCurrency(e.target.value)}
              value={currency}
            >
              <option selected>Base Currency</option>
              <option>USD</option>
              <option>EUR</option>
              <option>PLN</option>
              <option>GBP</option>
            </select>
            <h6 className="mt-1">Select Your Leverage</h6>
            <select
              class="form-select mt-1"
              aria-label="currency"
              name="leverage"
              onChange={(e) => setLeverage(e.target.value)}
              value={leverage}
            >
              <option selected>Select Your Leverage</option>
              <option>1:30</option>
              <option>1:50</option>
              <option>1:100</option>
              <option>1:200</option>
              <option>1:300</option>
              <option>Up to 1:500</option>
            </select>

            <h3 className="pt-1 color mt-5">My Trading Experience</h3>
            <h6 className="mt-4">Forex & CFDs</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="CFDs"
              onChange={(e) => setCFDs(e.target.value)}
              value={CFDs}
            >
              <option selected>Please Select a value</option>
              <option>No Experience</option>
              <option>1-3 years</option>
              <option>More than 3 years</option>
            </select>
            <h6 className="mt-1">Metals</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="metals"
              onChange={(e) => setMetals(e.target.value)}
              value={metals}
            >
              <option selected>Please Select a value</option>
              <option>No Experience</option>
              <option>1-3 years</option>
              <option>More than 3 years</option>
            </select>
            <h6 className="mt-1">Equity Indices</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="equity"
              onChange={(e) => setEquity(e.target.value)}
              value={equity}
            >
              <option selected>Please Select a value</option>
              <option>No Experience</option>
              <option>1-3 years</option>
              <option>More than 3 years</option>
            </select>
            <h6 className="mt-1">Futures and Options</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="futures"
              onChange={(e) => setFutures(e.target.value)}
              value={futures}
            >
              <option selected>Please Select a value</option>
              <option>No Experience</option>
              <option>1-3 years</option>
              <option>More than 3 years</option>
            </select>
            <h6 className="mt-1">Commodities</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="commodities"
              onChange={(e) => setCommodities(e.target.value)}
              value={commodities}
            >
              <option selected>Please Select a value</option>
              <option>No Experience</option>
              <option>1-3 years</option>
              <option>More than 3 years</option>
            </select>

            <h3 className="pt-1 color mt-5">Basic Financial Information</h3>
            <h6 className="mt-4">Source of Wealth</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="wealth"
              onChange={(e) => setWealth(e.target.value)}
              value={wealth}
            >
              <option selected>Please Select a value</option>
              <option>Saving / investment</option>
              <option>Partner / Parent / Family</option>
              <option>Benefits / Borrowing</option>
              <option>Pensions</option>
              <option>Business interest / dividends</option>
              <option>Government support</option>
              <option>Gifts</option>
              <option>Inheritance</option>
              <option>Sale of Property</option>
              <option>Salary</option>
              <option>Other</option>
            </select>
            <h6 className="mt-1">Estimated Net Worth</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="wort"
              onChange={(e) => setWort(e.target.value)}
              value={wort}
            >
              <option selected>Please Select a value</option>
              <option>0-24,999</option>
              <option>25,000-49,999</option>
              <option>50,000-99,999</option>
              <option>100,000-199,999</option>
              <option>200,000+</option>
            </select>
            <h6 className="mt-1">Estimated Annual Income</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="income"
              onChange={(e) => setIncome(e.target.value)}
              value={income}
            >
              <option selected>Please Select a value</option>
              <option>0-24,999</option>
              <option>25,000-49,999</option>
              <option>50,000-99,999</option>
              <option>100,000-199,999</option>
              <option>200,000+</option>
            </select>
            <h6 className="mt-1">Estimated Monthly Traded Lots</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="lots"
              onChange={(e) => setLots(e.target.value)}
              value={lots}
            >
              <option selected>Please Select a value</option>
              <option>0-5 Lots</option>
              <option>5-20 Lots</option>
              <option>20-50 Lots</option>
              <option>50+ Lots</option>
            </select>
            <h6 className="mt-1">Expected First Deposit</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="deposit"
              onChange={(e) => setDeposit(e.target.value)}
              value={deposit}
            >
              <option selected>Please Select a value</option>
              <option>$500 - $5000</option>
              <option>$5000 - $25000</option>
              <option>$25000+</option>
            </select>

            <h3 className="pt-1 color mt-5"> My Job Information</h3>
            <h6 className="mt-1">Education</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="education"
              onChange={(e) => setEducation(e.target.value)}
              value={education}
            >
              <option selected>Please Select a value</option>
              <option>High School</option>
              <option>Bachelor Degree</option>
              <option>Master Degree</option>
              <option>PHD</option>
            </select>
            <h6 className="mt-1">Employment Status</h6>
            <select
              class="form-select mt-1"
              aria-label="Please Select a value"
              name="employmentStatus"
              onChange={(e) => setEmploymentStatus(e.target.value)}
              value={employmentStatus}
            >
              <option selected>Please Select a value</option>
              <option>Employed</option>
              <option>Retired</option>
              <option>Self Employed</option>
              <option>Student</option>
              <option>Unemployed</option>
            </select>

            <button type="submit">submit</button>

            {/* <Button className="login-input mt-3 btn" type="submit" value="Submit">Register</Button> */}
          </form>
        }
      </div>
    </div>
  );
};

export default Form2;
