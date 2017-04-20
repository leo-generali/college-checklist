import api from './api.js';
import { urlCreator } from './url_creator.js';

export function getJSON(name, callback) {

  const mods = urlCreator();

  const url = 
    api.prefix + 
    name + "&_fields=" +
    mods +
    api.key;

    fetch(url).then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json.results[0]);
    });
}

// export function getJSON(name, callback) {

//   const mods = urlCreator();

//   const url = 
//     api.prefix + 
//     name + "&_fields=" +
//     mods +
//     api.key;

//   const request = new XMLHttpRequest();
  
//   request.onload = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log("onload");
      
//       callback( this.responseText );
//     }
//   };

//   request.open("GET", url, true);
//   request.send();

// }

// export function success(data) {
//   console.log("success");

//   console.log(data);
//   return JSON.parse(data);
// }
