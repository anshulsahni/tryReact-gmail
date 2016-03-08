import _ from 'underscore';

import filterMailProps from './filterMailProps';

function sortedFiltereMails(mails,props) {
  var mailsWithFilteredProps = filterMailProps(mails,props);
  var mailsWithFilteredPropsSorted = _.sortBy(mailsWithFilteredProps,(mail) => { 
    return -1 * mail.sendingDate ;
  });
  return mailsWithFilteredPropsSorted;
}

export default sortedFiltereMails;