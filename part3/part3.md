
The bug is that the two input value are in type of string. When we add two strings togther we actually concatenate them together. Therefore we need to convert them to numbers and then do the calculation. Then we will get the sum.

I could fix it by use parseFloat() to convert two input string values to numbers.


DEVTools - Newwork Tab

1. citylots.json 
2. part2.js 
3. 11.7MB
4. 98ms
5. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetch()
