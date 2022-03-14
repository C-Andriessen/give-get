async function isFilledIn(args) {
    var fields = [];  
    
    for (let key in args) {
        let value = args[key];
        if(!value) {
            fields.push(key);
      }
    }
    if (fields.length != 0) {
        return `Vul alsjeblieft ${fields.join(', ')} in`
    }
  }

  module.exports = {
    isFilledIn,
  };