import api from './api.js';
import { urlCreator } from './url_creator.js';

export function getJSON(name) {

  const mods = urlCreator();

  const url = 
    api.prefix + 
    name + "&_fields=" +
    mods +
    api.key;

  console.log(url);

  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.responseText)); 
      return JSON.parse(this.responseText); 
    }
  };

  request.open("GET", url, true);
  request.send();
  
}