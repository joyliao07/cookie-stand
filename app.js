'use strict';

var hours = ['', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total'];

var allStore = [];

// var Loc = ['pike', 'seatac', 'seattle', 'capitol', 'alki'];

var hrtotal = []; //

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


new Sales('1st&Pike', '23', '65', '6.3');
new Sales('SeaTac', '3', '24', '1.2');
new Sales('Seattle', '11', '38', '3.7');
new Sales('Capitol', '20', '38', '2.3');
new Sales('Alki', '2', '16', '4.6');


Sales.prototype.cookies = function() {
  for (var i =0; i < (hours.length -1); i++) {
    var customer = getRandomIntInclusive(this.min, this.max);
    var cookienum = parseInt(customer * this.avg);
    hrtotal.push(cookienum);
    // console.log('cookienum: ', cookienum);
    // console.log('hrtotal: ', hrtotal);
    return cookienum;
  }
};



// for (var j = 0; j < allStore.length; j++) {

//   var c = allStore[j].cookies();
//   hrtotal.push(c);
// }
// console.log(hrtotal);




function rowFirst (){
  var row = document.getElementById('hour-row');
  var trEl = document.createElement('tr');
  for (var i in hours) {
    var tdEl = document.createElement('th');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
    row.appendChild(trEl);
  }
}
rowFirst();


Sales.prototype.rowFirst = function (){
  var row = document.getElementById('hour-row');
  for (var i in hours) {
    var tdEl = document.createElement('th');
    tdEl.textContent = hours[i];
    row.appendChild(tdEl);
  }
};
// allStore.rowFirst(); // a prototype function can only be used in an object or when it's linked to an array.




function rowOthers () {
  for (var j =0; j < (allStore.length + 1); j++){
    var row2 = document.getElementById('hour-row');
    var trEl = document.createElement('tr');
    console.log(allStore);
    var c = allStore[j].cookies(); //THIS LINE WAS MOVED OUT FROM THE "FOR LOOP"
    var t = 0;
    for (var i=0; i <(hours.length-1); i++) {
      if (i===0) {
        var tdEl2 = document.createElement('td');
        tdEl2.textContent = allStore[j].name;
        console.log('allStore[j]', allStore[j]);
        trEl.appendChild(tdEl2);
        row2.appendChild(trEl);
      } if (i < (hours.length - 2)){
        tdEl2 = document.createElement('td');
        tdEl2.textContent = allStore[j].cookies();
        trEl.appendChild(tdEl2);
        row2.appendChild(trEl);
        // console.log('allStore[j].cookies, individual-hrs-for-each-store', c);
        //cookienum and c are the same number
        t += c;
      } if (i === 15) {
        tdEl2 = document.createElement('td');
        tdEl2.textContent = t;
        trEl.appendChild(tdEl2);
        row2.appendChild(trEl);
      } else {
        // console.log('yay');
      }
    }
  }
}
rowOthers();
console.log ('allStore: ', allStore);

////////////////////////////// today's work

var name, min, max, avg;

function newCookies () {
  for (var i =0; i < (hours.length -1); i++) {
    var customer = getRandomIntInclusive(min, max);
    var cookienum = parseInt(customer * avg);
    return Number (cookienum);
  }
}


function addRow () {
  var row2 = document.getElementById('hour-row');
  var trEl = document.createElement('tr');
  var t = 0;
  for (var i=0; i <(hours.length-1); i++) {
    if (i===0) {
      var tdEl2 = document.createElement('td');
      tdEl2.textContent = allStore[5].name;
      trEl.appendChild(tdEl2);
      row2.appendChild(trEl);
    } if (i < (hours.length - 2)){
      tdEl2 = document.createElement('td');
      tdEl2.textContent = newCookies();
      trEl.appendChild(tdEl2);
      row2.appendChild(trEl);
      var c = newCookies();
      t += c;
    } else {
      tdEl2 = document.createElement('td');
      tdEl2.textContent = t;
      trEl.appendChild(tdEl2);
      row2.appendChild(trEl);
    }
  }
}


// Form Data

var formEl = document.getElementById('main-form');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  name = event.target.name.value;
  min = event.target.min.value;
  max = event.target.max.value;
  avg = event.target.avg.value;

  var n = new Sales(name, min, max, avg);
  console.log(n);
  console.log(allStore);
  console.log('new store!');
  addRow();
});



// var totalForEveryHourSales = [];
// var sixamTotalSales = 0;

// for (var i =1; i < hrtotal.length; i+16) {
//   sixamTotalSales += hrtotal[i];

// }
// console.log('6AM sales:', sixamTotalSales);



