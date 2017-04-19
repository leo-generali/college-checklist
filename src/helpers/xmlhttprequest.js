import api from './api.js';
import { urlCreator } from './url_creator.js';

export function getJSON(name, callback) {

  const mods = urlCreator();

  const url = 
    api.prefix + 
    name + "&_fields=" +
    mods +
    api.key;

  var request = new XMLHttpRequest();
  
  request.onload = function() {
    if (this.readyState === 4 && this.status === 200) {
      return callback( this.responseText );       
    }
  };

  request.open("GET", url, true);
  request.send();
}

export function success(data) {
  console.log("lol");
  console.log(data);
}
