const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/0e231d5f82b480727dcb6b479b6ed63d/${latitude},${longitude}?units=si`;
    request({url, json:true}, (error, {body}) => {
        if(error){
           callback("Unable to connect to site", undefined);

        } else if(body.error){
            callback("unable to find location", undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees and there is a ${body.currently.precipProbability} chance of raining`);
        }
    });
};

module.exports = forecast;