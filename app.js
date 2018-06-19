console.log('starting app');
const _ = require("lodash");
const fs = require("fs");
const argv = require('yargs').argv

const modulejs = require('./module');
var command = argv._[0];
if(command == 'add_user'){
  var added_user = modulejs.add_user(argv.firstname,argv.lastname);
  console.log(added_user);
}else if (command == 'update_user'){
  var updated_user = modulejs.update_user(argv.firstname,argv.lastname);
  console.log(updated_user);
}else if(command == 'remove_user'){
  var removed_user = modulejs.remove_user(argv.firstname);
  console.log(removed_user);
}else if(command == 'addAll'){
  console.log('Add method'+ argv.addAll);
}else{
  console.log('command is invalid');
}
