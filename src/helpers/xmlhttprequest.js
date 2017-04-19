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
      console.log("onload");
      
      var response = callback( this.responseText );
      
      console.log(response);
      return response;       
    }
  };

  request.open("GET", url, true);
  request.send();
}

export function success(data) {
  console.log("success");
  return data;
}
