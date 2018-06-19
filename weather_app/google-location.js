var request = require('request');
request({
  url : "http://maps.googleapis.com/maps/api/geocode/json?address=2050%20southwest%20expy",
  headers : {
    'Accept' : 'application/json'
  }

},(err,response,body) => {
  if(!err && (JSON.parse(body)).status == 'OK'){
    var address = JSON.parse(body);
    var address = address.results[0];
    console.log("My address is :  "+ address.address_components[0].short_name + "," + address.address_components[1].short_name + "," +
    address.address_components[3].short_name + ","+ address.address_components[4].short_name+ "," + address.address_components[6].short_name +
    "-" + address.address_components[7].short_name);
  }else{
    console.log(err);
  }
});