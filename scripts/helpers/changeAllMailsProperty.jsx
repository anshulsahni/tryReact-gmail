import _ from 'underscore';

function changeAllMailProperty(mails,prop) {
  var key = _.keys(prop)[0];
  return _.map(mails, (mail) => {
    var clonedMail = _.clone(mail)
    clonedMail[key] = prop[key];
    delete clonedMail['key'];
    return clonedMail;
  })
}

export default changeAllMailProperty;