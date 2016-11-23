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
      // if the chars don't match
      // looking at the lpsArray the index is set to the previous elements lpsNumber of the current element
      index = lpsArray[index - 1]
      // we move the lagging pointer to that index
      j = index
      if(j === 0){
      // if we reach the beginning where j is 0, we push zero
       lpsArray.push(0)
      // increment i to continue the for loop
       i++
      // set the new index
       index = i
      }
    }
    // note that this else statement somewhat acts like a while loop where we don't know when j will become 0
    // but j will keep changing with the index until it reaches to 0.
  }
  return lpsArray;
}

// example here to help visualize when working through
//string - abcdabdcabcdabc
//pattern-('a b c d a b c'))
//lpsArray-[0,0,0,0,1,2,3]
function KMP(string, pattern) {
  // lps array tells us where to look if the current letter does not match the current pattern char
  var lpsArray = createLPSArray(pattern)
  // keep track of current index at the pattern
  var patternIndex = 0
  // keep track of the index we want to return if the value is found
  var startingIndex = 0;
  // keep track of the counts of matching characters
  var count = 0;

  // loop through the string 
  for(var i = 0; i < string.length;) {
    var charAtStringI = string.charAt(i)
    var charAtPatternI = pattern.charAt(patternIndex)

    if(charAtStringI === charAtPatternI) {
      // this only changes if starting index is null 
      startingIndex = startingIndex || startingIndex === 0 ? startingIndex : i 
      i++
      count++
      patternIndex++
    } else {
      // if there is no match we set startingIndex to null
      startingIndex = null
      // we need a ternary operator so any patternIndex that goes -1 defaults to 0
      patternIndex =  (patternIndex - 1) < 0 ? lpsArray[0] : lpsArray[patternIndex - 1]
      // reset the count if no match
      count = 0
      // if the patternIndex reaches 0 we can start the loop again
      if(patternIndex === 0){
        i++
      }
    }
    // if the count and pattern.length the string contains the pattern
    if(count === pattern.length){
      return startingIndex
    }
  }
  // if we reach this point there is no match
  return -1

}