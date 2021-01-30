
Variables & Scoping




1.  it will print out the value of i.

2. it will print the value of variable "discountedPrice". That is because the scope of variable declared with "var" is not only the ececuation context but also the whole enclosing function. Therefore it will still be accessable when called console.log().


3. it will print the value of variable "finalPrice". The scope of variable declared with "var" is the whole enclosing function.

4. will print 3
              150
              150

In a short explaination, i is equal to 3 because the for-loop iterates for i=0, i=1, i=2 and when i=3, it will not goes through for loop but the increment is done.
Variable "discountedPrice" updates its value with the for-loop and 150 is the calculation on the last item of input array. Variable "finalPrice" also updates its value when it is assigned values within the for-loop.


5. There will be a ReferenceError: i is not defined. That i because variables declared by "let" will only have scope in the block where they were created. If I call console.log in the for-loop there will not be an error. But out of the block, there will be a error.

6. There will be a ReferenceError: discountedPrice is not defined. The variables declared by "let" will only have scope in the block where they were created. 


7.  It will print the value of varible "finalPrice". Since let has the scope in the block where they are created, then they also exist when we use console.log to get their value.


8. The function would have error and could not return any value. since i is declared by "let" in its own block, it will not exist out of the block. 
    The same error also happens to the next line when we try to print the variable discountedPrice.


9.  There will be a ReferenceError: i is not defined. That i because variables declared by "let" will only have scope in the block where they were created. If I call console.log in the for-loop there will not be an error. But out of the block, there will be a error.

10.  There will be a ReferenceError. That is because variable declared by const is also scoped within the block it is created.

11.  It will print the value of varible "finalPrice". "const" has the scope of the block they declared in so they would be called.



12. There will be type Error when we try to assign value to FinalPrice. FinalPrice is declared with const and the value cannot be reassigned or redeclared.




Data Types
13.

A. student.name
B. student['Grad Year']
C. student.greeting()
D. student['Favorite Teacher'].name
E. student.courseLoad[0]


Basic Operators & Type Conversion

14. Arithmetic

A. 32        As we add a number to a character, the program convert number 2 from to string and them put them together.
B.  1        As we subtract a number from a character, the symbol"-" make the character 3 to convert into a number and then we subtract 2 from the number.
C.  3        null could be converted to 0 and number 3 +0 =3
D.  3null    null is an string and two strings concatenate together is 3null.
E.  4        true could be converted to 1 and 3+1 is 4.
F.  0        false could be converted to 0 and null can be converted to 0.
G.  3undefined  As we add a number to a string, we convert undefined to a string and concatenate them together. So the reult is 3undefined.
H.  NaN        As we subtract "undefined" from a a string, the symbol"-" numerically converts the string 3 into a number but undefined is NaN and the subtraction results in NaN.


15. Comparison
A.true           JavaScript converts the values to numbers and 2>1.
B.false          JavaScript compares strings letter by letter, '2' in lexicographical order is smaller than '12'.      ???????
C.true           JavaScript converts the char value to number and 2=2.
D.false          JavaScript converts the char value to number an their value are the same but they are different type.
E.false          true can be numerically converted to 1 and it is not equal to 2
F.true           Boolean(2) returns true and true equals to true in value and type.


16. Explain the difference between the == and === operators.

=== oeprator determine whether variables or values on two sides are euqal in value and equal in type. However, == operator only tell 
whether variables or values on two sides are equal in value.



17.
It prints "How are you ?". That is because in the first if condition "2 == true",  true is converted numerically to the type on the left side and then to 1. 2 is not equal to 1. 


18.Loops



Functions

19.[6, 8, 10] 

In the modifyArray function and in the for loop, we iterate through each element of the input array. Before pushing each one into a new array, we first pass each element nad  the function(x) into function 'doSomething'. This function 'doSomething' add each input number to two and return the value to function(x). Then the value is multiplied by 2.
Next, the element is pushed into the new Array. Finally we return the new Array.


20.





21.

the out of this code is : 
1
4
3
2





