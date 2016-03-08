import _ from 'underscore';

function changeMailProperty(mails,mailKey,prop) {
  var clonedMails = _.clone(mails);
  var key = _.keys(prop)[0];
  var index = _.findIndex(clonedMails,{ key: mailKey });
  clonedMails[index][key] = prop[key];
  return clonedMails;
}

export default changeMailProperty;