import api from './api.js';
import { urlCreator } from './url_creator.js';

export function getJSON(url) {

  const mods = urlCreator();

  console.log(
    api.prefix + 
    url + "&_fields=" +
    mods +
    api.key
  );

  console.log(mods);

  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      return JSON.parse(this.responseText); 
    }
  };

  request.open("GET", url, true);
  request.send();
  
}