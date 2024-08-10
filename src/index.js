module.exports = function check(str, bracketsConfig) {
  
  let testArr = [];
  
  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < bracketsConfig.length; j++) {

      if (str[i] === bracketsConfig[j][0]) {
        if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
          if (testArr[testArr.length - 1] === str[i]) {
            testArr.pop();
            } else {
            testArr.push(str[i]);
            }
        } else {
          testArr.push(str[i]);
        }
        break;
      }

      if (str[i] === bracketsConfig[j][1]) {
        if (testArr[testArr.length - 1] !== bracketsConfig[j][0]) {
          return false;
        } else {
            testArr.pop();
        }
        break;
      }
    }
  }

  if ( testArr.length === 0) {
    return true;
  } else { 
    return false;
  }
}