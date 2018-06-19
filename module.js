'use strict'
console.log('executing module file');
// console.log(module);
const _ = require("lodash");
const fs = require("fs");
const argv = require('yargs').argv

var add_data = (users) => fs.writeFileSync('user_data.json',JSON.stringify(users));

var fetch_data = () => {
  try{
    var user_data = fs.readFileSync('user_data.json');
    return JSON.parse(user_data);
  }catch(e){
    return [];
  }
}

var add_user = (first_name, last_name) => {
  var users = [];

  var user = {
    first_name,
    last_name
  }

  try{
    var users = fetch_data();
    var dulpicateVal = users.filter((user) => user.first_name === first_name);
    if(dulpicateVal.length === 0 ){
      debugger;
      users.push(user);
      add_data(users);
      return user;
    }
  }catch(e){
    console.log('Code executed has an exception');
  }

};

var remove_user = (firstName) => {
  try{
    var user_data = fetch_data();
    var remaining_user = user_data.filter((user) => user.first_name != firstName);

    if(remaining_user.length > 0){
      fs.writeFile('user_data.json', JSON.stringify(remaining_user), 'utf8', function (err) {
       if (err) return console.log(err);
      });
      return remaining_user;
    }
  } catch(e){
    console.log("exception while removin user")
  }

};

var update_user = (first_name, lastName) => {

  try{
    var user_data = fetch_data();

    var remaining_user = user_data.filter((user) => user.first_name === first_name);
    var userSring = JSON.stringify(remaining_user);
    var user = {
      first_name,
      lastName
    }
    var userDataString = JSON.stringify(remaining_user);
    var updateStr = (JSON.stringify(user_data)).replace(JSON.stringify(remaining_user[0]),JSON.stringify(user));
    fs.writeFile('user_data.json', updateStr, 'utf8', function (err) {
     if (err) return console.log(err);
    });
  }catch(e){
   console.log('issue in updating the user');
  }
};
module.exports = {
  add_user,
  remove_user,
  update_user
};
