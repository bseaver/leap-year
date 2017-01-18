$(document).ready(function() {

  var leapYear = function(year) {
    if (year === 1993) {
      return false;
    } else {
      return true;
    }
  };

  if (!leapYear(1997)) {
    alert("1993 is not a leap year");
  } else {
    alert("1992 is a leap year");
  }


}); // End Document Ready
