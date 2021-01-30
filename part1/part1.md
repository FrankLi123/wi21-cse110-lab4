
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






