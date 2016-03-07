
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'Jun',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function renderDate(milliseconds) {
  var sendingDate = new Date(milliseconds);
  var currentDate = new Date();

  if (sendingDate.toDateString() === currentDate.toDateString()) {
    return sendingDate.getHours() + ':' + sendingDate.getMinutes();
  }
  else if (sendingDate.getFullYear() === currentDate.getFullYear()) {
    return months[sendingDate.getMonth()] + ' ' + sendingDate.getDate();
  }
  else {
    return sendingDate.getDate() + '/' + (sendingDate.getMonth() + 1) + '/' + sendingDate.getFullYear();
  }
}

export default renderDate;
