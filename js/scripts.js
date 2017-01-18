$(document).ready(function() {

  var leapYear = function(year) {
    if (year % 4 === 0 && year % 100 > 0 || year % 400 === 0) {
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

  // Back end test section
  // leapYearTester(1993);
  // leapYearTester(2004);
  // leapYearTester(1900);
  // leapYearTester(2000);





}); // End Document Ready
