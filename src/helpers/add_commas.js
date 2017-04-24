export function addCommas(num) {
  var nStr = num.toString() + '';
  var x = nStr.split('.');
  var x1 = x[0];

  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1;
}
