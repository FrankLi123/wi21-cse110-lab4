
The bug is that the two input value are in type of string. When we add two strings togther we actually concatenate them together. Therefore we need to convert them to numbers and then do the calculation. Then we will get the sum.

I could fix it by use parseFloat() to convert two input string values to numbers.
