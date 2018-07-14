var request = require('request');

var getWeatherByLocation = (location, callback) => {
  var getTempurature =new Promise(function(resolve,reject){
    console.log(`location ====> ${location.lat},${location.lng}`)
    request({
      url : `https://api.darksky.net/forecast/2cc55044cd19db664a823519122200e3/${location.lat},${location.lng}`,
      json:true
    },(err,response,body) => {
    //  console.log(body);
      if(err){
        reject('error Reporting weather');
      }else{
        resolve(body.currently.temperature);
      }
    });
  });
  getTempurature.then((resolve) => {
    callback(undefined,resolve);
  }).catch((reject)=> {
    callback(reject,undefined);
  });
};

module.exports.getTempurature = getWeatherByLocation;
