'use strict';

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total'];

var allStore = [];

var Loc = ['pike', 'seatac', 'seattle', 'capitol', 'alki'];

var name, min, max, avg;


new Sales('1st&Pike', '23', '65', '6.3');
new Sales('SeaTac', '3', '24', '1.2');
new Sales('Seattle', '11', '38', '3.7');
new Sales('Capitol', '20', '38', '2.3');
new Sales('Alki', '2', '16', '4.6');



var formEl = document.getElementById('main-form');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  name = event.target.name.value;
  min = event.target.min.value;
  max = event.target.max.value;
  avg = event.target.avg.value;
  new Sales(name, min, max, avg);
  console.log(allStore);
});


function Sales(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  allStore.push(this);
}


Sales.prototype.generateRandom = function () {
  return Math.floor(Math.random() * (this.max - this.min) + this.min);
};


Sales.prototype.calcCustomers = function (){
  for (var i = 0; i < hours.length; i++) {
    var rando = this.generateRandom();
    this.customersPerHour.push(rando);
  }
};


Sales.prototype.cookies = function() {
  this.calcCustomers();
  for (var numCustomers = 0; numCustomers < this.customersPerHour.length; numCustomers++) {
    var cookienum = parseInt(this.customersPerHour[numCustomers] * this.avg);
    this.cookiesPerHour.push(cookienum);
    this.dailyTotal += cookienum;
  }
};


function rowFirst (){
  var row = document.getElementById('hour-row');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Store Names';
  trEl.appendChild(tdEl);
  row.appendChild(trEl);

  for (var i in hours) {
    tdEl = document.createElement('th');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
    row.appendChild(trEl);
  }
}
rowFirst();


Sales.prototype.render = function() {
  this.cookies();

  var row2 = document.getElementById('hour-row');
  var trEl = document.createElement('tr');
  for (var i=0; i <(hours.length-1); i++) {
    if (i===0) {
      var tdEl2 = document.createElement('td');
      tdEl2.textContent = this.name;
      trEl.appendChild(tdEl2);
      row2.appendChild(trEl);
    } if (i < (hours.length - 1)){
      tdEl2 = document.createElement('td');
      tdEl2.textContent = this.cookiesPerHour[i];
      trEl.appendChild(tdEl2);
      row2.appendChild(trEl);

    } if (i === 14) {
      tdEl2 = document.createElement('td');
      tdEl2.textContent = this.dailyTotal;
      trEl.appendChild(tdEl2);
      row2.appendChild(trEl);
    } else {
      console.log('yay');
    }
  }
};


////////////////////////////// today's work





for (var store = 0; store < allStore.length; store++) {
  allStore[store].render();
}



// function newCookies () {
//   for (var i =0; i < (hours.length -1); i++) {
//     var customer = getRandomIntInclusive(min, max);
//     var cookienum = parseInt(customer * avg);
//     return Number (cookienum);
//   }
// }


// function addRow () {
//   var row2 = document.getElementById('hour-row');
//   var trEl = document.createElement('tr');
//   var t = 0;
//   for (var i=0; i <(hours.length-1); i++) {
//     if (i===0) {
//       var tdEl2 = document.createElement('td');
//       tdEl2.textContent = nameNew;
//       trEl.appendChild(tdEl2);
//       row2.appendChild(trEl);
//     } if (i < (hours.length - 2)){
//       tdEl2 = document.createElement('td');
//       tdEl2.textContent = newCookies();
//       trEl.appendChild(tdEl2);
//       row2.appendChild(trEl);
//       var c = newCookies();
//       t += c;
//     } else {
//       tdEl2 = document.createElement('td');
//       tdEl2.textContent = t;
//       trEl.appendChild(tdEl2);
//       row2.appendChild(trEl);
//     }
//   }
// }
// addRow();





