const reverseString = str =>
  (!str.length) ? "" : reverseString(str.slice(1)) + str[0];
