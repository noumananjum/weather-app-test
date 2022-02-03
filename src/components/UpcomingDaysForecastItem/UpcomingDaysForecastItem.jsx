/*import React from 'react';
import PropTypes from 'prop-types';

import styles from './UpcomingDaysForecastItem.module.css';

const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl, windSpeed, humidity, convert }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" />
        <span className="mb-2">{weekday}</span>
        <span title="Wind speed" className="mb-2">{`${windSpeed} km/h`}</span>
        <span title="Humidity" className="mb-2">{`${humidity} %`}</span>
        <span className="font-weight-bold">{convert ? temperature : Math.round(temperature * 2 + 30)}&deg;</span>
    </li>
);

UpcomingDaysForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    windSpeed: PropTypes.number.isRequired, 
    humidity: PropTypes.number.isRequired, 
};

export default UpcomingDaysForecastItem;
*/


import React from 'react';
import PropTypes from 'prop-types';

import styles from './UpcomingDaysForecastItem.module.css';

const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl, windSpeed, humidity }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" />
        <span className="mb-2">{weekday}</span>
        <span title="Wind speed" className="mb-2">{`${windSpeed} km/h`}</span>
        <span title="Humidity" className="mb-2">{`${humidity} %`}</span>
        <span className="font-weight-bold">{temperature}&deg;</span>
    </li>
);

UpcomingDaysForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    windSpeed: PropTypes.number.isRequired, 
    humidity: PropTypes.number.isRequired, 
};

export default UpcomingDaysForecastItem;
