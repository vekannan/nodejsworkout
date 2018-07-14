var request = require('request');
var location = require('./weather_app/google-location');
var weather = require('./weather_app/weather');
var yargs = require('yargs');
const args = yargs.options({
  a: {
    demand:true,
    alias : 'address',
    describe :'Address for the google map search',
    string : true
  }
}).argv;
location.addressDetails(args.a, (errorMessage,result) => {
  if(errorMessage){
    console.log('Error message while calling address details' +errorMessage);
  }else{
    weather.getTempurature(result.location, (error,report) => {
      console.log(error);
      console.log(`Weather for the given location is ==> ${report}`);
    });
  }
});


//2cc55044cd19db664a823519122200e3
