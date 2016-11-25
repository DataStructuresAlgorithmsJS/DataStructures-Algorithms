const generateParenthesis = (n, output = []) => {

  (dfs = (combo, open, close)=> {
  	if (open + close === n * 2)
      return output = [...output, combo];
      
  	if (close < n && close < open)
  	  dfs(`${combo})`, open, close + 1);

  	if (open < n)
    	dfs(`${combo}(`, open + 1, close);

	})('', 0, 0);
  return output;
};
