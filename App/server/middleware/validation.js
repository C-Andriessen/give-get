async function isFilledIn(args) {
  var fields = [];

  for (let key in args) {
    let value = args[key];
    if (!value) {
      fields.push(key);
    }
  }
  if (fields.length != 0) {
    return `Vul alsjeblieft ${fields.join(", ")} in`;
  }
}

async function passwordEqual(pass, passRepeat) {
  if (pass !== passRepeat) {
    return `De wachtwoorden moeten hetzelfde zijn!`;
  }
}

async function emailRegex(email, domainsRegex, schools) {
    const emailRegexPattern = new RegExp(`^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(${domainsRegex.join('|')})$`);

    if(!email.match(emailRegexPattern)) {
        return `Je moet een geldig ${schools.join(', ').replace(/, ([^,]*)$/, ' of $1')} email gebruiken`;
    }
}

module.exports = {
  isFilledIn,
  passwordEqual,
  emailRegex,
};
