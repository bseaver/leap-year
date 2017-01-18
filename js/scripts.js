$(document).ready(function() {

  var leapYear = function(year) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  };

  var leapYearTester = function(year) {
    if (leapYear(year)) {
      alert(year + " is a leap year");
    } else {
      alert(year + " is not a leap year");
    }
  }

  leapYearTester(1993);
  leapYearTester(2004);



}); // End Document Ready
