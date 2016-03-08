import _ from 'underscore';

function sortMails(mails) {
  var sortedMails = _.sortBy(mails,(mail) => { 
    return -1 * mail.sendingDate ;
  });
  return sortedMails;
}

export default sortMails;