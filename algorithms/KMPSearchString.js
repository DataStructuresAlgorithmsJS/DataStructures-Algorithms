/*
  The purpose of KMP is to find substrings in O(m+n) which results in O(n)
  brute force method involves O(n*m) which is not efficient
  The difference between these two methods is that brute force requires you to check
  every time the first characters are the same in the pattern and string something like 

  brute force:
  string- aaaaaaaaaaab
  pattern - ab
  will require you to check a === a -> a === b, a === a -> a === b, a === a -> a === b at every iteration

  KMP:
  string - aaaaaaaaaaab
  pattern - ab
  lps - [0,0]
  the lps array repesents at which point of the pattern do we need to check against the string
  with the lps array we know that there are no prefix and suffixes that are the same and we can iterate once
  a === a?, a === a?, a === a?, ...... a === b b === b?

  KMP creates a lps-longest prefix suffix array(i think that's what it stands for)
  this array of numbers is to keep track of suffix and prefixes of a string that is represented by numbers
  "abcdabc" in this example  has a prefix 'abc' and suffix 'abc' that are the same
  an array that tracks the lps is made in O(n) 

  Afterwards when parsing through the string for the pattern. The KMP function uses the lps array to keep track of
  the current element in the pattern we can use to compare with the regular string  

  helpful material: https://www.youtube.com/watch?v=GTJr8OvyEVQ
*/


function createLPSArray(pattern) {
  // first element is always 0
  var lpsArray = [0]
  // lagging pointer
  var j = 0;
  // if there is no match keep track of which index to go to
  var index = 1;

  // loop through the pattern
  for(var i = 1; i < pattern.length;) {
    // keep track of chars
    var charAtj = pattern.charAt(j)
    var charAtI = pattern.charAt(i)
    if (charAtI === charAtj){
    // if there is a match push the index of the lagging pointer + 1 to the array
      lpsArray.push(j + 1)
    // then increment i to continue the loop
      i++
    // move the lagging pointed to the next index
      j++
      index = i
    // set the index to i
    }  else {
      if(j === 0 && charAtj !== charAtI){
      // if we reach the beginning where j is 0, we push zero
       lpsArray.push(0)
      // increment i to continue the for loop
       i++
      // set the new index
       index = i
      }
      // if the chars don't match
      // looking at the lpsArray the index is set to the previous elements lpsNumber of the current element
      index = lpsArray[index - 1]
      // we move the lagging pointer to that index
      j = index
    }
    // note that this else statement somewhat acts like a while loop where we don't know when j will become 0
    // but j will keep changing with the index until it reaches to 0.
  }
  return lpsArray;
}
/*
  using 3 pointers to keep track of the string position, pattern position, and the starting index
  on the first match of the string. 
*/
function KMP(string, pattern) {
  var stringIndex = 0;
  var patternIndex = 0;
  var startingIndex = -1;
  var lpsArray = createLPSArray(pattern)
  // edge cases
  if(string === pattern || pattern === '') {
    return 0
  } else if (pattern.length >  string.length){
    return -1
  }
  // loop through strings
  while(stringIndex < string.length) {
    var charAtStringIndex = string.charAt(stringIndex)
    var charAtPatternIndex = pattern.charAt(patternIndex)
    // if the current characters match
    if(charAtStringIndex === charAtPatternIndex) {
      // only start the starting index on the first match
      if(patternIndex === 0){
        startingIndex = stringIndex 
      }
      // if the the pattern is fully matched return the starting index
      if(patternIndex >= pattern.length - 1 && startingIndex !== -1){
        return startingIndex
      }
      // increment both string and pattern pointers
      stringIndex++
      patternIndex++
      // if we have a match previously we don't want to restart the starting index but adjust it
    } else if(patternIndex > 0) {
      // look at the lps array and find the next pointer
      patternIndex = lpsArray[patternIndex - 1]
      // subtract from the starting index how much we have to go back
      startingIndex = stringIndex - patternIndex
      // if we reach back to the beginning of the pattern
      // and there is no match on the string and pattern pointer
    } else if(patternIndex === 0 && charAtStringIndex !== charAtPatternIndex) {
      // increment the string pointer and restart the starting index
      stringIndex++
      startingIndex = -1
    }
  }
  // if we reach here we did not find a match
  return -1
}

