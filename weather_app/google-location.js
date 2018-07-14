var request = require('request');


var getLocation = (address, callback) => {
  var address = encodeURIComponent(address);
  var mapRequest = new Promise(function(resolve,reject){
    console.log('===========>'+address);
      request({
        url : `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json:true
      },(err,response,body) => {
        if(err){
          //console.log("failure");
          reject('Error while calling address api ===>'+err);
        }else if(body.status === 'OK'){
          //console.log("success");
          var address = (body);
          var address = address.results[0];
          var fullAddress =  address.address_components[0].short_name + "," + address.address_components[1].short_name + "," +
          address.address_components[3].short_name + ","+ address.address_components[4].short_name;
          var location = address.geometry.location;
          var addressDetails = {
            fullAddress,
            location
          };
        resolve(addressDetails);
      }else if(body.status === 'ZERO_RESULTS'){
            reject('Error while calling address api');
        }else{
          reject('Error while calling address api finally');
        }
      });
  });

  mapRequest.then((resolve) => {
    // console.log(JSON.stringify(resolve));
     callback(undefined,resolve);
  	//return JSON.stringify(resolve);
  }).catch( error => {
    //console.log(JSON.stringify(resolve));
    callback(error,undefined);
  });
};

module.exports.addressDetails = getLocation;
