import moment from 'moment';

const getCurrentDayForecast = (data, title, sun_rise, sun_set) => ({
    weekday: moment(data.applicable_date).format('dddd'),
    date: moment(data.applicable_date).format('MMMM Do'),
    location: title,
    sunRise: moment(sun_rise).format('hh:mm A'),
    sunSet: moment(sun_set).format('hh:mm A'),
    temperature: Math.round(data.the_temp),
    weatherIcon: `'https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    weatherDescription: data.weather_state_name,
});

export default getCurrentDayForecast;
