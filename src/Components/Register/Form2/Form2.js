import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@mui/material";
import { Form } from "react-bootstrap";

const country = [
    { label: 'Andorra' },
    { label: 'United Arab Emirates' },
    { label: 'Afghanistan' },
    { label: 'Antigua and Barbuda' },
    { label: 'Anguilla' },
    { label: 'Albania' },
    { label: 'Armenia' },
    { label: 'Angola' },
    { label: 'Antarctica' },
    { label: 'Argentina' },
    { label: 'American Samoa' },
    { label: 'Austria' },
    { label: 'Australia' },
    { label: 'Aruba' },
    { label: 'Alland Islands' },
    { label: 'Azerbaijan' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Barbados' },
    { label: 'Bangladesh' },
    { label: 'Belgium' },
    { label: 'Burkina Faso' },
    { label: 'Bulgaria' },
    { label: 'Bahrain' },
    { label: 'Burundi' },
    { label: 'Benin' },
    { label: 'Saint Barthelemy' },
    { label: 'Bermuda' },
    { label: 'Brunei Darussalam' },
    { label: 'Bolivia' },
    { label: 'Brazil' },
    { label: 'Bahamas' },
    { label: 'Bhutan' },
    { label: 'Bouvet Island' },
    { label: 'Botswana' },
    { label: 'Belarus' },
    { label: 'Belize' },
    {
        code: 'CA',
        label: 'Canada',
        phone: '1',
        suggested: true,
    },
    { label: 'Cocos (Keeling) Islands' },
    { label: 'Congo, Democratic Republic of the' },
    { label: 'Central African Republic' },
    { label: 'Congo, Republic of the' },
    { label: 'Switzerland' },
    { label: "Cote d'Ivoire" },
    { label: 'Cook Islands' },
    { label: 'Chile' },
    { label: 'Cameroon' },
    { label: 'China' },
    { label: 'Colombia' },
    { label: 'Costa Rica' },
    { label: 'Cuba' },
    { label: 'Cape Verde' },
    { label: 'Curacao' },
    { label: 'Christmas Island' },
    { label: 'Cyprus' },
    { label: 'Czech Republic' },
    { label: 'Germany', },
    { label: 'Djibouti' },
    { label: 'Denmark' },
    { label: 'Dominica' },
    { label: 'Dominican Republic' },
    { label: 'Algeria' },
    { label: 'Ecuador' },
    { label: 'Estonia' },
    { label: 'Egypt' },
    { label: 'Western Sahara' },
    { label: 'Eritrea' },
    { label: 'Spain' },
    { label: 'Ethiopia' },
    { label: 'Finland' },
    { label: 'Fiji' },
    { label: 'Falkland Islands (Malvinas)' },
    { label: 'Micronesia, Federated States of' },
    { label: 'Faroe Islands' },
    { label: 'France' },
    { label: 'Gabon' },
    { label: 'United Kingdom' },
    { label: 'Grenada' },
    { label: 'Georgia' },
    { label: 'French Guiana' },
    { label: 'Guernsey' },
    { label: 'Ghana' },
    { label: 'Gibraltar' },
    { label: 'Greenland' },
    { label: 'Gambia' },
    { label: 'Guinea' },
    { label: 'Guadeloupe' },
    { label: 'Equatorial Guinea' },
    { label: 'Greece' },
    { label: 'South Georgia and the South Sandwich Islands' },
    { label: 'Guatemala' },
    { label: 'Guam' },
    { label: 'Guinea-Bissau' },
    { label: 'Guyana' },
    { label: 'Hong Kong' },
    { label: 'Heard Island and McDonald Islands' },
    { label: 'Honduras' },
    { label: 'Croatia' },
    { label: 'Haiti' },
    { label: 'Hungary' },
    { label: 'Indonesia' },
    { label: 'Ireland' },
    { label: 'Israel' },
    { label: 'Isle of Man' },
    { label: 'India' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Iraq' },
    { label: 'Iran, Islamic Republic of' },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
        code: 'JP',
        label: 'Japan',
        phone: '81',
        suggested: true,
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
        code: 'KN',
        label: 'Saint Kitts and Nevis',
        phone: '1-869',
    },
    {
        code: 'KP',
        label: "Korea, Democratic People's Republic of",
        phone: '850',
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
        code: 'LA',
        label: "Lao People's Democratic Republic",
        phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
        code: 'MD',
        label: 'Moldova, Republic of',
        phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
        code: 'MF',
        label: 'Saint Martin (French part)',
        phone: '590',
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
        code: 'MK',
        label: 'Macedonia, the Former Yugoslav Republic of',
        phone: '389',
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
        code: 'MP',
        label: 'Northern Mariana Islands',
        phone: '1-670',
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
        code: 'PM',
        label: 'Saint Pierre and Miquelon',
        phone: '508',
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
        code: 'PS',
        label: 'Palestine, State of',
        phone: '970',
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
        code: 'SJ',
        label: 'Svalbard and Jan Mayen',
        phone: '47',
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
        code: 'ST',
        label: 'Sao Tome and Principe',
        phone: '239',
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
        code: 'SX',
        label: 'Sint Maarten (Dutch part)',
        phone: '1-721',
    },
    {
        code: 'SY',
        label: 'Syrian Arab Republic',
        phone: '963',
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
        code: 'TC',
        label: 'Turks and Caicos Islands',
        phone: '1-649',
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
        code: 'TF',
        label: 'French Southern Territories',
        phone: '262',
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
        code: 'TT',
        label: 'Trinidad and Tobago',
        phone: '1-868',
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
        code: 'TW',
        label: 'Taiwan, Province of China',
        phone: '886',
    },
    {
        code: 'TZ',
        label: 'United Republic of Tanzania',
        phone: '255',
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
        code: 'US',
        label: 'United States',
        phone: '1',
        suggested: true,
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
        code: 'VA',
        label: 'Holy See (Vatican City State)',
        phone: '379',
    },
    {
        code: 'VC',
        label: 'Saint Vincent and the Grenadines',
        phone: '1-784',
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
        code: 'VG',
        label: 'British Virgin Islands',
        phone: '1-284',
    },
    {
        code: 'VI',
        label: 'US Virgin Islands',
        phone: '1-340',
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },

]




function PaymentForm() {
    const defaultProps = {
        options: country,
        getOptionLabel: (option) => option.label,
    };

    return (
        <React.Fragment>
            <h2 className='regis' gutterBottom>
                My Trading Profile
            </h2>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                    <form className='' noValidate>
                        <TextField
                            fullWidth
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            className=''
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </Grid>



                <Grid item xs={12} sm={12}>

                    <div className=''>
                        <Autocomplete
                            {...defaultProps}
                            id="debug"
                            debug
                            renderInput={(params) => <TextField {...params} label="Place of Birth" margin="normal" />}
                        />

                    </div>
                </Grid>

                <Grid item xs={12} sm={12}>

                    <div className=''>
                        <Autocomplete
                            {...defaultProps}
                            id="debug"
                            debug
                            renderInput={(params) => <TextField {...params} label="Nationality" margin="normal" />}
                        />

                    </div>
                </Grid>

                <Grid item xs={12} sm={12}>

                    <div className=''>
                        <TextField
                            fullWidth
                            id="full-address"
                            label="Full Address"
                            type="text"

                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>

                    <div className=''>
                        <TextField
                            fullWidth
                            id="city"
                            label="City"
                            type="text"

                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>

                    <div className=''>
                        <TextField
                            fullWidth
                            id="passport/nid"
                            label="Passport/NID Number"
                            type="text"

                        />
                    </div>
                </Grid>

                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3 mt-4">
                            <h6>Are you a US Person?</h6>
                            <Form.Check
                                inline
                                label="Yes"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="No"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />

                        </div>
                    ))}
                </Form>

            </Grid>
            <h2 className='regis' gutterBottom>
             M y Trading Preferences
            </h2>
        </React.Fragment>
    );
}

export default PaymentForm;
