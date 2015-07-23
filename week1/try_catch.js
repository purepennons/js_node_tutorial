function getMonthName(mo) {
  mo = mo - 1;
  var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec");
  if (months[mo] != null) {
    return months[mo]
  } else {
    throw "InvalidMonthNumber";
  }
}

try {
  var monthName2 = getMonthName(13);
} catch (err) {
  monthName = "unknown"
  console.log(err)
}
