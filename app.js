'use strict';

// var turtle = {
//   legs: 4,
//   shell: true,
//   age: 115,
//   colors: ['turquoise'],
//   weight: 25,
//   ninja: true,
//   snap: function() {
//     console.log('cowabunga!');
//   },
// };

// var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
// var ulEl = document.createElement('ul');

// for(var i = 0; i < months.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = months[i] + 'hi';
//   ulEl.appendChild(liEl);
// }

// var monthsSection = document.getElementById('months'); //"months" need to be letter-by-letter with the id on html
// monthsSection.appendChild(ulEl);


function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];


var firstandpike = {
  production:function () {
    var ulEl = document.createElement('ul');
    var ulEl2 = document.createElement('ul');
    var t=0;

    for (var i=0; i< hours.length; i++) {
      var liEl = document.createElement('li');
      var r = getRandomIntInclusive(23,65);
      var c = parseInt(r * 6.3);
      liEl.textContent = hours[i] + ': To make ' + c + ' cookies';
      ulEl.appendChild(liEl);
      t+=c;
    }

    var cookieSection = document.getElementById('cookies1');
    cookieSection.appendChild(ulEl);

    var liEl2 = document.createElement('li');
    liEl2.textContent = 'Total: ' + t + ' cookies';
    ulEl2.appendChild(liEl2);

    var cookieTotal = document.getElementById('cookies1');
    cookieTotal.appendChild(ulEl2);
  }
};

firstandpike.production();


// function first () {
// var ulEl = document.createElement('ul');
// var ulEl2 = document.createElement('ul');
// var t=0;

// for (var i=0; i< hours.length; i++) {
//   var liEl = document.createElement('li');
//   var r = getRandomIntInclusive(23,65);
//   var c = parseInt(r * 6.3);
//   liEl.textContent = hours[i] + ': To make ' + c + ' pieces of cookies';
//   ulEl.appendChild(liEl);
//   t+=c;
// }

// var cookieSection = document.getElementById('cookies');
// cookieSection.appendChild(ulEl);

// var liEl2 = document.createElement('li');
// liEl2.textContent = 'Total: ' + t + ' pieces of cookies';
// ulEl2.appendChild(liEl2);

// var cookieTotal = document.getElementById('cookies');
// cookieTotal.appendChild(ulEl2);
// }

// first();



var seatac = {
  production:function () {
    var ulEl = document.createElement('ul');
    var ulEl2 = document.createElement('ul');
    var t=0;

    for (var i=0; i< hours.length; i++) {
      var liEl = document.createElement('li');
      var r = getRandomIntInclusive(3,24);
      var c = parseInt(r * 1.2);
      liEl.textContent = hours[i] + ': To make ' + c + ' cookies';
      ulEl.appendChild(liEl);
      t+=c;
    }

    var cookieSection = document.getElementById('cookies2');
    cookieSection.appendChild(ulEl);

    var liEl2 = document.createElement('li');
    liEl2.textContent = 'Total: ' + t + ' cookies';
    ulEl2.appendChild(liEl2);

    var cookieTotal = document.getElementById('cookies2');
    cookieTotal.appendChild(ulEl2);
  }
};

seatac.production();



var seaCen = {
  production:function () {
    var ulEl = document.createElement('ul');
    var ulEl2 = document.createElement('ul');
    var t=0;

    for (var i=0; i< hours.length; i++) {
      var liEl = document.createElement('li');
      var r = getRandomIntInclusive(11,38);
      var c = parseInt(r * 3.7);
      liEl.textContent = hours[i] + ': To make ' + c + ' cookies';
      ulEl.appendChild(liEl);
      t+=c;
    }

    var cookieSection = document.getElementById('cookies3');
    cookieSection.appendChild(ulEl);

    var liEl2 = document.createElement('li');
    liEl2.textContent = 'Total: ' + t + ' cookies';
    ulEl2.appendChild(liEl2);

    var cookieTotal = document.getElementById('cookies3');
    cookieTotal.appendChild(ulEl2);
  }
};

seaCen.production();


var capHill = {
  production:function () {
    var ulEl = document.createElement('ul');
    var ulEl2 = document.createElement('ul');
    var t=0;

    for (var i=0; i< hours.length; i++) {
      var liEl = document.createElement('li');
      var r = getRandomIntInclusive(20,38);
      var c = parseInt(r * 2.3);
      liEl.textContent = hours[i] + ': To make ' + c + ' cookies';
      ulEl.appendChild(liEl);
      t+=c;
    }

    var cookieSection = document.getElementById('cookies4');
    cookieSection.appendChild(ulEl);

    var liEl2 = document.createElement('li');
    liEl2.textContent = 'Total: ' + t + ' cookies';
    ulEl2.appendChild(liEl2);

    var cookieTotal = document.getElementById('cookies4');
    cookieTotal.appendChild(ulEl2);
  }
};

capHill.production();


var alki = {
  production:function () {
    var ulEl = document.createElement('ul');
    var ulEl2 = document.createElement('ul');
    var t=0;

    for (var i=0; i< hours.length; i++) {
      var liEl = document.createElement('li');
      var r = getRandomIntInclusive(2,16);
      var c = parseInt(r * 4.6);
      liEl.textContent = hours[i] + ': To make ' + c + ' cookies';
      ulEl.appendChild(liEl);
      t+=c;
    }

    var cookieSection = document.getElementById('cookies5');
    cookieSection.appendChild(ulEl);

    var liEl2 = document.createElement('li');
    liEl2.textContent = 'Total: ' + t + ' cookies';
    ulEl2.appendChild(liEl2);

    var cookieTotal = document.getElementById('cookies5');
    cookieTotal.appendChild(ulEl2);
  }
};

alki.production();