import _ from 'underscore';

//helper function used by mail folder components to filter the mail properties to be passed on to maillist
function filterMailProps(mailList,properties) {
  var mailsWithFilteredProps= _.map(mailList,(mail)=> {
    var filteredObject= {};
    _.each(properties,(prop)=> {
      if(mail.hasOwnProperty(prop)) {
        filteredObject[prop]=mail[prop];
      }
      else {
        throw 'Property Listed in properties argument is not present in object passed';
      }
    });
    return filteredObject;
  });
  return mailsWithFilteredProps;

}

export default filterMailProps;