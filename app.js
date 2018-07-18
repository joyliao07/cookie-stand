'use strict';

var hours = ['blank','6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total'];

var allStore = [];

var Loc = ['pike', 'seatac', 'seattle', 'capitol', 'alki'];

function Sales(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  allStore.push(this);
}

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


var pike = new Sales('1st&Pike', '23', '65', '6.3');
var seatac = new Sales('SeaTac', '3', '24', '1.2');
var seattle = new Sales('Seattle', '11', '38', '3.7');
var capitol = new Sales('Capitol', '20', '38', '2.3');
var alki = new Sales('Alki', '2', '16', '4.6');


Sales.prototype.cookies = function() {
  for (var i =0; i < (hours.length -1); i++) {
    var customer = getRandomIntInclusive(this.min, this.max);
    var cookienum = parseInt(customer * this.avg);
    return cookienum;
  }
};


function rowFirst (){
  var row = document.getElementById('hour-row');
  for (var i in hours) {
    var tdEl = document.createElement('th');
    tdEl.textContent = hours[i];
    row.appendChild(tdEl);
  }
}
rowFirst();


// Sales.prototype.rowFirst = function (){
//   var row = document.getElementById('hour-row');
//   for (var i in hours) {
//     var tdEl = document.createElement('th');
//     tdEl.textContent = hours[i];
//     row.appendChild(tdEl);
//   }
// };
// allStore.rowFirst(); // a prototype function can only be used in an object or when it's linked to an array.


function rowOthers () {
  for (var j=0; j < Loc.length; j++){
    var row2 = document.getElementById('other-row');
    var trEl = document.createElement('tr');
    var t = 0;
    for (var i=0; i <hours.length; i++) {
      if (i===0) {
        var tdEl2 = document.createElement('td');
        tdEl2.textContent = allStore[j].name;
        trEl.appendChild(tdEl2);
        row2.appendChild(trEl);
      } if (i < (hours.length - 1)){
        tdEl2 = document.createElement('td');
        tdEl2.textContent = allStore[j].cookies();
        trEl.appendChild(tdEl2);
        row2.appendChild(trEl);
        var c = allStore[j].cookies();
        t += c;
      } else {
        tdEl2 = document.createElement('td');
        tdEl2.textContent = 'total: ' + t;
        trEl.appendChild(tdEl2);
        row2.appendChild(trEl);
      }
    }
  }
}
rowOthers();


////////////////////////////// code review



// To call a prototype function, "this.generateRandom();"

